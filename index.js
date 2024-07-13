export function showContent(let content){
    const box = document.getElementById('box');
    const newContent = document.createElement('p');
    newContent.textContent = document.getElementById(content);
    box.appendChild(newContent);
}