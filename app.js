const notes = require( './note.js' )
const chalk = require( 'chalk' )
const yargs = require ('yargs')

//customize yargs version
yargs.version( '1.1.0' )

//in our samll app the user must add, remove, read, list 

yargs.command( {
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demendOption: true,
            type:"string"
        },
        body: {
            describe: "brand of car",
            demendOption: true,
            type:"string"
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
} )

yargs.command( {
    command: "remove",
    describe: "Remove a note",
    handler:(argv) => {
        notes.removeNote(argv.title)
    }
} )

yargs.command( {
    command: "list",
    describe: "List the notes",
    builder: {
        title: {
            describe: "list the notes",
            demendOption: "true",
            type:"string"
        }
    },
    handler: () => {
        notes.listNote()
    }
} )

yargs.command( {
    command: "read",
    describe: "Read the specifique note",
    builder: {
        title: {
            describe: "list the notes",
            demendOption: "true",
            type:"string"
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})
yargs.parse()