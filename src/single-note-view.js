(function(exports){

  function SingleNoteView (Note) {
    this.note = Note
  };

  SingleNoteView.prototype.returnHTMLString = function () {
    return "<div>" + this.note.text + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
