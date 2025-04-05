let em = document.querySelectorAll('em');
let p = document.querySelector('p') as HTMLParagraphElement;
p.onmouseover = function() {
    for(let i of em) {
        i.setAttribute('style', "color: magenta; border: 2px magenta dashed;");
    }
}
p.onmouseout = function() {
    for(let i of em) {
        i.setAttribute('style', 'none');
    }
}
