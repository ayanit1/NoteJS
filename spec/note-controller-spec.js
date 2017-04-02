test({

  noteControllerCanBeInstantiated: function() {
    function ListDouble() {};
    var notelist = new ListDouble();

    noteControl = new NoteController(notelist);
    assert.isTrue(noteControl instanceof NoteController, "noteControllerCanBeInstantiated");
    assert.isTrue(noteControl._noteList === notelist, "noteControllerCanBeInstantiated" );
  },

  noteControllerInsertsHTML: function() {
    function dummyElement() {
      this.innerHTML = ''
    };

    function dummyView(){
      dummyView.prototype.returnHTML = function(){
        return "<ul><li><div>Fake Note</div></ul></li>"
      };
    };

    var dummyElement = new dummyElement();
    var dummyView = new dummyView();
    var noteController = new NoteController(dummyView)
    noteController.insertHTML(dummyView, dummyElement);
    assert.isEqual("<ul><li><div>Fake Note</div></ul></li>", dummyElement.value, "noteControllerInsertsHTML")

  }

})
