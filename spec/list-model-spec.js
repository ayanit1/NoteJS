// the list stores an array of notes. Has a method that returns the notes
test({
listHasArrayOfNotes: function()  {
  var newList = new List();
  assert.isTrue(Array.isArray(newList._notes), 'listHasArrayOfNotes');
},



// list has a method that creates and stores a new single note
listCanCreateAndStoreNotes: function() {
  var newList = new List();
  newList.addNote("This is my note");
  newList.addNote("This is my other note");
  assert.isEqual(newList.listNotes()[0].showNote(), "This is my note", 'listCanCreateAndStoreNotes');
  assert.isEqual(newList.listNotes()[1].showNote(), "This is my other note", 'listCanCreateAndStoreNotes');
}
})
