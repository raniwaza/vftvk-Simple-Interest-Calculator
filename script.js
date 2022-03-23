function compute()
{
    p = document.getElementById("principal").value;
  
  if (p<1){alert("please insert a greater than 0");
          document.getElementById("principal").focus();}
  else{
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    result = p*(1+(r*t)/100)-p;
  
 y1 =  Number(t) + 2022;       
 document.getElementById("result").innerHTML = "if you deposit <mark>"+ p +"</mark><br> at an interest rate of <mark>"+r+" %</mark><br> "
 +"You will receive an amount of <mark>"+ result +"</mark>,<br/> in the year <mark>" + y1+"</mark>";
return 0;}
}
 