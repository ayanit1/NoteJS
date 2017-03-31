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
      listView.returnHTML() === '<ul><li><div>This is the first no</div></li><li><div>This is the second n</div></li></ul>',
    'viewReturnsHTML');
  }
})
