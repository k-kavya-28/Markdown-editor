const textEditor = document.querySelector(".text-editor");
const preview = document.querySelector(".preview");
const converter = new showdown.Converter();
const renderPreview = (value) => {
    const html = converter.makeHtml(value);
    preview.innerText = html;
    console.log(html);
}

// console.log('preview',preview);
// console.log('text editor',textEditor);

textEditor.addEventListener("keyup", evt => {
    const {value} = evt.target;
    console.log(value);
    renderPreview(value)
    // console.log(value);
});
