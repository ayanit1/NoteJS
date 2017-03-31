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
      listView.returnHTML() === '<ul><li><div>This is the first note</div></li><li><div>This is the second note</div></li></ul>',
    'viewReturnsHTML');
  }
})
