test({

  singleNoteViewInstantiatesWithNote: function (){
    var newNote = new Note("I am a note")
    var singleNoteView = new SingleNoteView(newNote)
    assert.isTrue(singleNoteView instanceof SingleNoteView, "singleNoteViewInstantiatesWithNote")
  },

  singleNoteViewreturnsHTMLString: function (){
    var newNote = new Note("I am a note")
    var singleNoteView = new SingleNoteView(newNote)
    var returnedString = singleNoteView.returnHTMLString()
    assert.isEqual("<div>I am a note</div>", returnedString, "singleNoteViewreturnsHTMLString")
    console.log(singleNoteView);
  }
})
