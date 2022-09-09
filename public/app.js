const textEditor = document.querySelector(".text-editor");
const preview = document.querySelector(".preview");
const { marked } = require('marked');
const renderPreview = (value) => {
    const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
    document.getElementById('text-editor').innerHTML =
      marked.parse('# Marked in browser\n\nRendered by **marked**.');
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
