let TextArea = document.getElementById("textarea");
let CreateButton = document.getElementById("add-btn");
let notesContainer = document.querySelector(".notesHolder");
let emptyText = document.getElementById("empty-text");
let notes = [];

emptyText.innerHTML = "No notes added!";


function createNewNote(){

  // creating Note //

    let InputValue = TextArea.value;
    let divElement = document.createElement("textarea");
    let removeButton = document.createElement("img");
    removeButton.src = "images/trash-outline-removebg-preview.png";
    removeButton.setAttribute("id", "remove-btn");
    divElement.setAttribute("id", "new-text");
    divElement.innerHTML = InputValue;
    notesContainer.appendChild(divElement);
    notes.push(divElement);
    notesContainer.appendChild(removeButton);

   // remove Note //


    if(notes.length >= 0){
        emptyText.style.display = "none";
    }
    function removeNote(){
      notes.pop(divElement);
      notesContainer.removeChild(divElement);
      notesContainer.removeChild(removeButton);
      if(notes.length === 0){
         emptyText.style.display = "block";
      }
    
   }
  TextArea.value = "";
  removeButton.addEventListener("click", removeNote);
}



CreateButton.addEventListener("click", createNewNote)