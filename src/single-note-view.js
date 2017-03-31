(function(exports){

  function SingleNoteView (Note) {
    this.note = Note
  };

  SingleNoteView.prototype.returnHTMLString = function () {
    return "<div>" + this.note._text + "</div>";
    console.log(returnHTMLString());
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
