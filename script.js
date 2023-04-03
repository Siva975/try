function inc(){
    let img = document.getElementById("virat");
    let width = img.clientWidth;
    img.style.width = (width + 20) + "px";
}

function dec(){
    let img = document.getElementById("virat");
    let width = img.clientWidth;
    img.style.width = (width - 20) +"px";
}