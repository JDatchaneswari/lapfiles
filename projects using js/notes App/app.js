const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
//show notes
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
//local storage
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
//my logic
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
    //notesContainer.style.display="none";
    e.target.parentElement.display.remove();
    updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

//my logic 

//const img = document.querySelector(".img");
//img.addEventListener("click",()=>{
  //  console.log('button clicked');
    //notesContainer.style.display="none";
//})

//line break
document.addEventListener("keydown",event=>{
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");//inserts line break
        event.preventDefault();//it prevent default feature of enter key
    }
})