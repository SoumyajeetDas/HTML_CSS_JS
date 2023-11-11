function calculate() {
    var x = document.getElementById("empname").value;
    var y = document.getElementsByName("empname");
    var z = document.getElementById("empno").value;
    var a =parseInt(document.getElementById("empno").value);
    
    
    var g = document.getElementsByName("gender")[0].checked;// Returns true or false
    var h = document.getElementsByName("gender")[1].checked;
    var j = document.getElementById("male").checked; // Returns true or false
    var k = document.getElementById("female").checked;

    var int = document.getElementsByName("interest")[0];
    var p = document.getElementsByName("interest")[0].checked;//Returns true or false
    var q = document.getElementsByName("interest")[1].checked;
    var r = document.getElementsByName("interest")[2].checked;
   
    var s = document.getElementById("cars").value;

    var basic = parseInt(document.getElementById("bsal").value);
    var gross = parseInt(document.getElementById("gsal").value);
    var sal = basic +gross;
    var comment = document.getElementById("comments").value;
    var comment1 = document.getElementsByName("comments")[0].value;
    var dob = document.getElementById("DOB").value;//2021-05-06 type-string
    var dob1= document.getElementsByName("DOB")[0].value;//2021-05-06 type-string
    var month = document.getElementById("month").value;//2021-06
    var month1=document.getElementsByName("month")[0].value;
    var week = document.getElementById("week").value;//2012-W19
    var time = document.getElementById("time").value;//23:56

    // For button to fetch data
    // var but = document.getElementById("button_id").textContent;


    // console.log(comment);
    // console.log(comment1);
    // console.log(dob);
    // console.log(typeof dob); 
    // console.log(dob1);
    // console.log(month);
    // console.log(month1);
    // console.log(week);
    // console.log(time);
    // console.log(x);
    
    console.log(y);
    // console.log(z);
    // console.log(typeof z);
    // console.log(typeof a);
    // console.log(g);
    // console.log(h);
    // console.log(j);
    // console.log(k);
    // console.log(int);
    // console.log(p);
    // console.log(q);
    // console.log(r);
    // console.log(s);
    // console.log(sal);
    // console.log(a);
    // var s="";

    // if(g==true){
    //     s+="Gender:male";

    // }
    // else if(h==true)
    // {
    //     s+="Gender:male\n";
    // }

    // for(var d =0; d<int.length;d++){
    //     if(int[0].checked)
    //     {
    //         s+="Likes Painting\n";
    //     }
    //     if(int[1].checked)
    //     {
    //         s+="Likes Reading\n";
    //     }
    //     if(int[2].checked)
    //     {
    //         s+="Likes Sex\n";
    //     }
    //     break;
    // }

    // var k="Emp Name:"+x+"<br>"+"Emp No:"+z+"<br>"+s+"<br>"+sal;
    // document.getElementById("result").innerHTML=k;
    // return true;
    return false;
}