// identify :
// id  -- uniqui
// class -- duplicate
// name -- duplicate
// tagName -- duplicate
// querryselector



// var x = document.getElementById("txt").innerHTML = "Royal technosoft"
// console.log(x);

// Event 
// onclick 

function changeTxt(){
    // document.getElementById("txt").innerHTML = "Royal TechnoSoft"
    var txt = document.getElementById("txt")
    txt.innerHTML = "Royal TechnoSoft";
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
}



function chnageHref(){

    var link = document.getElementById("link");
    link.href = "https://www.netflix.com"
    link.innerHTML = "Netflix"
    link.target = "_blank";
    link.style.backgroundColor = "red";

    var btn = document.getElementById("btn");
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.border = "none"
    btn.style.height = "100px";
    btn.style.width = "200px";
}

const changeSize = ()=>{

    var img = document.getElementById("img");
    img.style.width = "300px";
    img.style.height = "300px";
}