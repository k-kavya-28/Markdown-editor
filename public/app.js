const textEditor = document.querySelector(".text-editor");
const preview = document.querySelector(".preview");

function converter(){
    let te = textEditor.value;
    let prev = marked.parse(te);
    preview.innerHTML=prev;
}

textEditor.addEventListener('input',converter);
