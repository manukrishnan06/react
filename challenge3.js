

let d=new Date()
day=d.getDay();

switch(day)
{
case 0:console.log("Sunday");
break;
case 1:console.log("Monday");
break;
case 2:console.log("Tuesaday");
case 3:console.log("Wednesday");
case 4:console.log("Thursday");
case 5:console.log("Friday");
case 6:console.log("Saturday");

default:console.log("error");


}