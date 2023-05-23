const addbtn=document.querySelector("#addbtn");
const main=document.querySelector(".main");
addbtn.addEventListener("click",function(){
    addnote ();
})
const savenote=()=>{
    const notes=document.querySelectorAll(".note textarea");
    const data=[];
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
}

const addnote=()=>{
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    
<div class="heading">
    <i class=" save fas fa-save"></i>
    <i class="trash fas fa-trash-alt"></i>
</div>
<textarea></textarea>
       
    `;
note.querySelector(".trash").addEventListener("click",function(){
    note.remove();
})
note.querySelector(".save").addEventListener("click",function(){
    savenote();
})
main.appendChild(note);
}

