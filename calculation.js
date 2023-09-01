const prompt = require("prompt-sync")()
function calci ()
{
if (opt === "addition" || opt === "+")
   {
     console .log (`The addition of ${num1} and ${num2} is :`+" ",num1+num2)
   }
   
else if (opt === "subtraction" || opt === "-")
   {
    console .log (`The subtraction of ${num1} and ${num2} is :`+" ",num1-num2)
   }

else if (opt === "multiplication" || opt === "*")
   {
    console .log (`The multiplication of ${num1} and ${num2} is :`+" ",num1*num2)
   }  

else if (opt === "division" || opt === "/")
   {
    console .log (`The division of ${num1} and ${num2} is :`+" ",num1/num2)
   }   

else if (opt === "percentage" || opt === "%")
   {
      console .log (`The percentage of ${num1} is :`+" ",num1/100)
   }   

else if (opt ==="square root" || opt === "√")
   {
      console .log (`The square root of ${num1} is :`+" ",Math.sqrt(num1))
   }   

else if (opt === "square" || opt === "^")
   {
      console .log (`The square of ${num1} and ${num2} is :`+" ",Math.pow(num1,num2))
   }   

else if (opt === "log" || opt === "lg")
   {
      console .log (`The log of ${num1} is :`+" ",Math.log10(num1))
   }   

else if (opt === "sin")
   {
      console .log (`The sin of ${num1} is :`+" ",Math.sin(num1))
   }   

else if (opt === "cos")
   {
      console .log (`The cos of ${num1} is :`+" ",Math.cos(num1))
   }   

else if (opt === "tan")
   {
      console .log (`The tan of ${num1} is :`+" ",Math.tan(num1))
   }   

else 
   {
      console.log("Enter a valid operation")
   }   
}    
let num1, opt, num2;


num1 = Number.parseInt(prompt("Enter a 1st number : "))

opt = prompt("Enter a operation : ").toLowerCase()

if (opt === "√" ||opt ==="square root" ||  opt ==="%" || opt === "percentage" ||  opt === "lg"|| opt === "log" )
{
 num2 = 1
}
else if (opt === "sin" || opt === "cos" || opt === "tan")
{
   num2 = 1
}
else
{
   num2 = Number.parseInt(prompt("Enter a 2nd number : "))
} 

if (num1 >=0 && num2 >=0)
{
   calci()
}
else
{
   console.log("Enter a valid number")
}