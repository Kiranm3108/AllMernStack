class Employee
{
    constructor()
    {
     this.id=1001;
     this.ename="KIRAN"
    }
    displayInfo()
    {
        console.log(this.id+" "+this.ename);
    }
}
let emp=new Employee();
emp.displayInfo();