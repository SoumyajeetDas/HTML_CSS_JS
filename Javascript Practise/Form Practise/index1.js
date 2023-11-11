function calculate1() {
    var x = document.getElementById("empname").value;
    var y = document.getElementsByName("empname")[0].value;
    var z = document.getElementById("empno").value;
    var a =parseInt(document.getElementById("empno").value);
    console.log(a);
    var g = document.getElementsByName("gender")[0].checked;// Returns true or false
    var h = document.getElementsByName("gender")[1].checked;
    var j = document.getElementById("male").checked;
    var k = document.getElementById("female").checked;
    var int = document.getElementsByName("interest");
    var p = document.getElementsByName("interest")[0].checked;//Returns true or false
    var q = document.getElementsByName("interest")[1].checked;
    var r = document.getElementsByName("interest")[2].checked;
    var s = document.getElementById("cars").value;
    var basic = parseInt(document.getElementById("bsal").value);
    var gross = parseInt(document.getElementById("gsal").value);
    var sal = basic +gross;
    var errors=[];

    var chk_empname=/^[a-zA-Z]{1,3}$/;
    if(!chk_empname.test(x))
    {
        errors[errors.length]="Name not perfect\n"
    }

    if(g==false && h==false)
    {
        errors[errors.length]="Need to select gender\n"
    }

    if(p==false && q==false && r==false)
    {
        errors[errors.length]="Need to select interest\n"
    }

    if(errors.length>0)
    {
        reporterrors(errors);
        return false;
    }
    else{
        var r = confirm("Please confirm whether you want to submit the form");
        if(r==false){
            document.getElementById("result").innerHTML="You have selected Cancel";
            return false;

        }
        else
        {
            if(g==true){
                s+="Gender:male";
        
            }
            else if(h==true)
            {
                s+="Gender:Female\n";
            }
        
            for(var d =0; d<int.length;d++){
                if(int[0].checked)
                {
                    s+="Likes Painting\n";
                }
                if(int[1].checked)
                {
                    s+="Likes Reading\n";
                }
                if(int[2].checked)
                {
                    s+="Likes Sex\n";
                }
                break;
            }
        
            var k="Emp Name:"+x+"<br>"+"Emp No:"+z+"<br>"+s+"<br>"+sal;
            document.getElementById("result").innerHTML=k;
            
            return true;
        }
    
        
        

    }
    



}

function reporterrors(errors)
{
    var msg = "Errors: \n"
    for(var i =0 ; i<errors.length;i++)
    {
        msg+=errors[i];
    }
    alert(msg);
}