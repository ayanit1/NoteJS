// the note instantiates with a string of text stored within a text property on the note an return the note text when requested
test({
 showNoteMethodReturnsString: function() {
   var newNote = new Note("I am a note", 0);
   assert.isEqual(newNote.showNote(), "I am a note", 'showNoteMethodReturnsString')
  },

  newNoteInstantiatesWithString: function() {
    var newNote = new Note("string of text", 0);
    assert.isTrue(newNote.text === "string of text", 'newNoteInstantiatesWithString');
  },

  newNoteInstantiatesWithANewId: function() {
    var newNote  = new Note("First Note", 0);
    assert.isTrue(newNote.id === 0, "newNoteInstantiatesWithANewId")
  }

})
