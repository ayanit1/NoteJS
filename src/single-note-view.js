(function(exports){

  function SingleNoteView (Note) {
    this.note = Note
  };

  SingleNoteView.prototype.returnHTMLString = function () {
    return "<div>" + this.note._text + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
