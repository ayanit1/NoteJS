(function(exports) {

  function List() {
    this.notes = [];
  };

  List.prototype.listNotes = function(){
    return this.notes;
  };

  List.prototype.addNote = function(text) {
    var id = this.notes.length
    this.notes.push(new Note(text, id));
  };

  exports.List = List
})(this);
