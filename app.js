const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const body = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command('add', 'Add a new note', {
        title,
        body
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title
    })
    .command('remove', 'Remove a note', {
        title
    })
    .help()
    .argv;
let command = argv._[0];

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note created`);
        notes.logNote(note);
    } else {
        console.error(`Note with title: ${argv.title} already exists`);
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log("Note found with details:")
        notes.logNote(note);
    } else {
        console.error("Note title not found");
    }
} else if (command === 'remove') {
    notes.removeNote(argv.title) ? console.log("Note removed successfully!") : console.log("There is no such node with that title");
} else {
    console.log('Enter either add,remove,read or list as argument');
}