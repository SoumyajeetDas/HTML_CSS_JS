function calculate2(form)
{
    var empname=form.empname.value;
    var empno = form.empno.value;
    var gender = form.gender.value;
    var interest = form.interest[2].checked;
    var cars = form.cars.value;
    console.log(empname);
    console.log(empno);
    console.log(gender);//male
    console.log(interest);
    console.log(cars);
    
    return false;
}