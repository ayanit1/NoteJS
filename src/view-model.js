(function(exports) {

  function View(noteList) {
    this._noteList = noteList;
  };

  View.prototype.returnHTML = function(){
    var listItemsHTML = ''
    this._noteList.listNotes().forEach(function(item){
      listItemsHTML += '<li><div>' + item.showNote().substring(0, 20) + '</div></li>';
    })
    return '<ul>' + listItemsHTML + '</ul>'
  };

  exports.View = View;

})(this);
