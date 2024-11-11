
// var a = 5
// function demo(){
//     // console.log("helo");
    
//     console.log(a++);
    
// }


var colors = ["red","green","yellow","blue","gray","black","orange","pink","indigo"]
// console.log(colors[0]);


function demo(){

    var randomIndex = Math.floor(Math.random() * colors.length);
    // console.log(randomIndex);
    
    var mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor =  colors[randomIndex]

}