var noteList = new List()
noteList.addNote("Favourite drink: seltzer")
noteList.addNote("Second Note I've Created")

var view = new View(noteList)
var controller = new NoteController(noteList)

controller.insertHTML(view)
controller.makeURLShowNoteForCurrentPage();
