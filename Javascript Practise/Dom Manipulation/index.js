function textchange()
{
    // var x = document.getElementById("text").innerText;


    // if(x=="Some random text")
    // {
    //     document.getElementById("text").innerHTML="Clicked for once";
    // }
    // else
    // {
    //     document.getElementById("text").innerHTML="Some random text";
    // }

    // var x = document.getElementById("data").value;
    // console.log(document.getElementById("data"))
    // alert(x);
    // document.getElementById("show").innerHTML=x;

    
  
}

function myFunction() {
    // var list = document.getElementsByTagName("UL")[0];
    // console.log(document.getElementsByTagName("UL"));
    // console.log(list);

    // console.log(list.getElementsByTagName("li"));
    // list.getElementsByTagName("LI")[0].innerHTML = "Milk" ;

    // var pa = document.getElementsByTagName("p");
    // console.log(pa);
    
    // for(var i=0;i<pa.length;i++) {
    //     pa[i].style.color="red";

    // }

    var x = document.getElementsByClassName("class1");
    console.log(x);
    var y= document.getElementById("class2").innerText;
    console.log(y);
    console.log(document.getElementById("class2").innerHTML);
    // alert(document.getElementsByClassName("class2").innerText);
}

function funcform() {

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    console.log(typeof password);
    var error1 = document.getElementsByClassName("error")[0];
    console.log(error1);
    var error2 = document.getElementsByClassName("error")[1]; 
    // const reg = /Sou/;
    const reg = new RegExp("Sou","i");
    console.log(reg.test(password));

    if(username=="")
    {
        document.getElementById("username").style.border = "solid 3px red";
        error1.style.display = "block";
    }
    if(password == "" ){
        document.getElementById("password").style.border = "3px solid red";
        error2.style.display = "block";
        
    }

    return false;

}



document.getElementById("button1").addEventListener("click",start);
document.getElementById("button1").addEventListener("click",function(){
    this.style.border = "2px solid black";
});

var Id=0;
var Id1=0;
var second =0;
function printmsg1()
{
    
    
    document.getElementById("time").innerHTML="Checking after 5s";

}

function printmsg2()
{
    
    document.getElementById("time").innerHTML="You stopped the timer";
    
}

function printmsg3(){
   
    document.getElementById("time1").innerHTML=second++ + "seconds";
    
}
function start()
{
    document.getElementById("time").innerHTML="You clicked start";
    Id = window.setTimeout(printmsg1,5000);
    Id1 = window.setInterval(printmsg3,1000);
    
}

function stop()
{
    window.clearTimeout(Id);
    window.clearInterval(Id1);
    second =0;
    printmsg2();
    
}

function changecolor1()
{
    document.getElementById("button2").style.backgroundColor="red";
}

function changecolor2()
{
    document.getElementById("button2").style.backgroundColor="green";
}

function changeborder()
{
    console.log("Hi");
    document.getElementById("button2").style.border="2px solid black";
}

console.log(document.querySelector("#button1"));



// var a = {
//     name : "Soumya",
//     age : 30
// }

// var a1 = [1,2,3];

// var n = a1.map(function(x)
// {
//     return x*10;
// });

// var str = "Soumyajeet"
// console.log(str.split(/[abc]/));

// console.log(str.slice(-7,-3));
// console.log(str.substring(0,2));
