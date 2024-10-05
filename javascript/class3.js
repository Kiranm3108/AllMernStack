class Employee
{
    id=1001;
    ename="KIRAN Kumar";
    displayInfo()
    {
        console.log(this.id+" "+this.ename);
    }
}
let emp=new Employee();
emp.displayInfo();