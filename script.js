function compute()
{
    p = document.getElementById("principal").value;
    
    if (p<1){
            alert("please insert a greater than 0");
           document.getElementById("principal").focus();
             }
  else{
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    result = p*(1+(r*t)/100)-p;
  
 y1 =  Number(t) + 2022;       
document.getElementById("result").innerHTML = "if you deposit "+ p +"<br> at an interest rate of "+r+"% <br> "
+"You will receive an amount of "+ result +" in the year " + y1;
return 0;
}
}
 