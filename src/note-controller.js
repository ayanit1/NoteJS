// var element = document.getElementById('app');
// element.innerHTML = "Howdy";

(function(exports) {

  function NoteController(noteList) {
    this._noteList = noteList;
  };

// shows list of notes
  NoteController.prototype.insertHTML = function (view, element = document.getElementById("notelist")) {
    var myNotes = view.returnHTML();
    var element = element;
    element.innerHTML = myNotes
  };

  NoteController.prototype.makeURLShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    document.getElementById("app").innerHTML = this.noteList.notes[window.location.hash.split("/")[1]].text
  };

  exports.NoteController = NoteController;
})(this);


// Takes a note list model upon instantiation. Adds a note that says Favourite drink: seltzer. (You could create another file, index.js, to instantiate the NoteController.)
// Creates a note list view, passing in the note list model.
// Has a method that gets HTML from the note list view and inserts it into the app element.
