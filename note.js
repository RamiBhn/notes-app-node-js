const fs = require ('fs')
const chalk = require('chalk')
const getNote = () => {
    return('I will make my dream true soon ')
}

//adding note to json file
const addNote =  ( title, body ) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter( ( note ) => {
        return note.title === title
    } )

    debugger
    
    if ( duplicateNotes.length === 0 ) {
        notes.push( {
        title: title,
        body: body
    } )
        saveNotes( notes )
        console.log(chalk.green.inverse("new notes added!"));
    } else {
        console.log(chalk.res.inverse("note title taken!"));
    }
    
}

//removing note from json file
const removeNote = (title) => {
  const notes = loadNotes()
  const noteIndex = notes.findIndex((note) => {
    return note.title === title
  })

  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1)
    saveNotes(notes)
    console.log(chalk.green.inverse("Note was deleted!"))
  } else {
    console.log(chalk.red.inverse("The note you want to delete doesn't exist"))
  }
}
//List the notes
//we can 2 methode the first methode with for 
const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.green.bold.inverse("Your notes:"));
  for (let i = 0; i < notes.length; i++) {
    console.log(chalk.blue.bold(notes[i].title));
  }
//the second methode with forEach
//     const listNotes = () => {
//   const notes = loadNotes();
//   console.log(chalk.green.bold.inverse("Your notes:"));

//   notes.forEach((note) => {
//     console.log(chalk.blue.bold(note.title));
//     console.log(note.body);
//   });
// };

};

//Read the notes
const readNote = (title) => {
    const notes = loadNotes();
    const ourNote = notes.find((note) => note.title === title);

    if (!ourNote) {
        console.log(chalk.red.inverse("The note you want doesn't exist"));
    } else {
        console.log(chalk.bold.green(`${ourNote.title} ${ourNote.body}`));
    }
};



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify( notes )
    fs.writeFileSync("notes.json", dataJSON)
}
const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync( 'notes.json' )
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch ( e ) {
        return []
    }
    
}


module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}