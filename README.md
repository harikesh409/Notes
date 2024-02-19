# Notes

A simple command-line application built using nodejs to manage notes.

## Getting Started
---------------
To get started with the notes, follow these steps:
1. Install Node.js: The notes are built using Node.js, so you will need to have it installed on your computer. You can download Node.js from the [official website](https://nodejs.org/).
2. Clone the repository: Clone the repository to your local machine using the following command:
``` bash
git clone https://github.com/harikesh409/Notes.git
```
3. Install dependencies: Navigate to the repository directory and install the dependencies using the following command:
``` bash
npm install
```
4. To get the list of available commands run either of the following:
``` bash
npm run help
```
OR
``` bash
node app.js help
```
### Commands
------------
- **add:** Add a new note
- **list:** List all notes
- **read:** Read a note
- **remove:** Remove a note

### Usage
------------
```bash
node app.js add -t <title> -b <body>      # Add a new note
node app.js list                          # List all notes
node app.js read -t <title>               # Read a note
node app.js remove -t <title>             # Remove a note
```

## Contributing
------------
Contributions to the notes are welcome! If you have something to add or correct, please submit a pull request.

## License
-------
This project is licensed under the MIT License - see the [License](LICENSE.md) file for details.

## Contact
-------
If you have any questions or concerns, please contact the repository owner at [harikesh409](https://github.com/harikesh409).
