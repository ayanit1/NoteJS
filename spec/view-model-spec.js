test({

  viewInstantiatesWithList: function() {
    var list = new List();
    list.addNote('This is the first note');
    list.addNote('This is the second note');
    var listView = new View(list);
  assert.isTrue(listView._noteList === list, 'viewInstantiatesWithList');
  },

  viewReturnsHTML: function() {
    var list = new List();
    list.addNote('This is the first note');
    list.addNote('This is the second note');
    var listView = new View(list);
    assert.isTrue(
      listView.returnHTML() === "<ul><li><div><a href='#notes/0'>This is the first no</a></div></li><li><div><a href='#notes/1'>This is the second n</a></div></li></ul>",
    'viewReturnsHTML');
  }
})
