// chap 4

// Q1
// name = "Muhammad Ali " ; age = "16 "; rollNo = 21 ;
// document.write(name , age , rollNo);

// Q2
// legal variable
// var name1 = "Muhammad"
// var name2 = "ali"
// var age = 16
// var roll_No = 19
// var age$ = 16
// // illegal variable
// var first name = "Muhammad"
// var Last name = "Ali"
// var @gmail = "ali@gmail.com"  
// var 123 = " "
// var *name = "ali"

// Q3
// document.write("<h1>Rules for naming JS variable</h1>")
// document.write("Variable names can only contain, numbers, $ and _ .For example : $my_1stVariable <br>");
// document.write("Variables must begin with a letter, $ or _.For example : $name, _name or name <br>")
// document.write("Variable names are case sensitive <br>")
// document.write("Variable names should not be JS Keywords")

// chap Q5

// Q1
// var number1 = 3
// var number2 = 5
// var number3 = number1 + number2
// // document.write("sum of 3 and 5 is " + number3 );

// Q2
// var number4 = number1 - number2 
// document.write("subraction of 3 and 5 is " + number4 );
// var number5 = number1 * number2 
// document.write("<br>multiplication of 3 and 5 is " + number5 );
// var number6 = number1 / number2 
// document.write("<br>division 3 and 5 is " + number6 );
// var number7 = number1 % number2 
// document.write("<br>modulus of 3 and 5 is " + number7 );

 // Q3
// var value = 
// document.write("Value after variable declaration is undefined <br>")
// var value = 5
// document.write("Initial value : " + value)
// var value= ++value
// document.write("<br> Value after increment is: " + value)
// var value3 = 7
// var value= value + value3
// document.write("<br> Value after addition is: " + value)
// value = --value
// document.write("<br>Value after decrement is: " + value)
// var value = value % 3
// document.write("<br>The remainder is : "+ value)

// Q4
// var ticket = 600
// var ticketFor5 = ticket*5b
// document.write("Total cost to buy 5 tickets to a movie is "+ ticketFor5 +"PKR")

// Q5
// document.write("<h4>Table of 4</h4> <br> " 
// + "4 x 1 = "+ 4*1 
// + "<br>4 x 2 = " + 4*2  
// + "<br>4 x 3 = " + 4*3 
// + "<br>4 x 4 = " + 4*4 
// + "<br>4 x 5 = " + 4*5 
// + "<br>4 x 6 = " + 4*6 
// + "<br>4 x 7 = " + 4*7 
// + "<br>4 x 8 = " + 4*8  
// + "<br>4 x 9 = " + 4*9  
// + "<br>4 x 10 = " + 4*10)

// Q6
// celcius = 25
// fahrenheit = (celcius * 9/5)+32
// document.write("25C is "+fahrenheit + "F")
// fahrenheit = 70
// celcius = (fahrenheit - 32)*5/9
// document.write("<br>70F is "+celcius + "C")

// Q7
// document.write("<h2>Shopping Cart</h2><br>")
// item1 = 650
// item2 = 100
// quantity1 = 3
// quantity2 = 7
// charge = 100
// document.write("Price of item 1 is 650 <br> Quantity of item 1 is 3 <br> Price of item 2 is 100 <br> Quantity of item 2 is 7 <br> Shipping Charges 100")
// cost = item1 * 3 + item2*7 + charge
// document.write("<br><br>Total cost of your order is "+ cost)

// Q8
// document.write("<h2>Mark Sheet</h2>")
// var total = 980
// var obtain = 804
// var percentage = obtain/total*100
// document.write("Total marks: 980 <br> Marks obtained: 804 <br> Percentage: "+ percentage +"%")

// Q9
// var dollar = 10
// var Riyal = 25
// var dollarpkr = 10*104.80
// var Riyalpkr = 25*28
// var total =dollarpkr + Riyalpkr 
// document.write("<h2>Currency in PKR</h2> Total Currency in PKR: "+ total)

// Q10
// var num = 2
// document.write(num+5*10/2)

// Q11
// var current = 2024
// var birth = 2007
// var age = current - birth
// document.write("<h2>Age Calculator</h2>Current Year: "+current+"<br> Birth Year: "+birth+"<br>Either Your Age is: "+age +"<br> Or your age is: "+--age) 

// Q12
// var radius = 20
// var circumference = 2*3.142*20
// var area = 3.142*(40)
// document.write("<h2>The Geometrizer </h2> Radius of a circle: " +radius+ "<br>The circumference is: " + circumference + "<br>The area is: "+area )

// Q13
// var snack = "Chocolate Chip"
// var currentAge = 16
// var maxAge = 65
// var amount = 2
// var output = 2*49*365
// document.write("<h2>The Lifetime Supply Calculator </h2> Favourite Snack: " +snack+ "<br> Current age: " +currentAge+"<br> Estimated Maximum age: " +maxAge+ "<br> Amount of snack per day: "+amount+"<br>You will need "+output + " to last you until the ripe old age of "+maxAge)

// chap 06
// // Q1
// var number = 10
// document.write("Result: <br> The value of a is: "+ number)
// var number = ++number
// document.write("<br><br><br>The value of ++a is: "+number + "<br> Now the value of a is: "+ number)
// var number = number++
// document.write("<br><br><br>The value a++ is: "+number++)
// document.write("<br>Now the value of a is: " +number)
// var number = --number
// document.write("<br><br><br>The value of --a is: "+number+"<br>Now the value of a is: "+number)
// var number = number--
// document.write("<br><br><br>The value of a-- is: "+number--)
// document.write("<br>Now the value of a is: "+number)

// Q2
// var a = 2 ; b = 1;
// var result = --a - --b + ++b + b-- ;
// --1
// 1 - 0
// 1+2
// 3 + 1--
// document.write("a = "+ a + "<br>b = "+b+"<br>result = "+result)

// Q3
// prompt("hello! enter your name")

// Q5
// prompt("Enter a number: ") 
// document.write("5 x 1 = "+ 5*1 + "<br>5 x 2 = "+5*2+ "<br>5 x 3 = "+5*3+
// "<br>5 x 4 = "+5*4+ "<br>5 x 5 = "+5*5+ "<br>5 x 6 = "+5*6+
// "<br>5 x 7 = "+5*7+ "<br>5 x 8 = "+5*8+ "<br>5 x 9 = "+5*9+ "<br>5 x 10 = "+5*10)

// Q6





// chap 6-9
// chap 6

// Q1
// x = x+1;
// x = x++;

// Q2
// x = 100
// x = --x
// document.write(x)

// Q3
// var x = 50
// y = x++
// document.write(y);

// Q4
// y = 50
// z = --y
// document.write(z)

// Q5
// x = 10 ; x = --x; y = x  
// document.write(y)

// Q6
// x = 10 ; x = ++x ; y = x
// document.write(y);

// Q7
// x = 10
// x = ++x
// alert(x)

// chap 7

// Q1
// var calculatedNum = 2 + (2 * 6); 
// document.write("The value of calculatedNum is: " +calculatedNum) 
// var calculatedNum = (2 + 2) * 6; 
// document.write("<br>The value of calculatedNum is: "+calculatedNum)

// Q3
// var calculatedNum = (2 + 2) * (4 + 2);
// document.write("The value of calculatedNum is: "+calculatedNum);

// Q4
// var calculatedNum = ((2 + 2) * 4) + 2;
// document.write("The value of calculatedNum is: "+calculatedNum);

// Q5
// cost = (2 + 2) * 4 + 10;
// document.write(cost)

// Q6
// units = 2 + (2 * 4) + 10;
// document.write(units)

// Q7
// pressure = 4/(2 *4);
// document.write(pressure)

// chap 8

// Q1
// var num = "2" + "2"
// document.write(num)

// Q2
// message = ("Hello," + "Dolly");
// alert(message);

// Q3
// alert("33" + 3);

// Q4
// alert("Pakistan Zindabad.")

// Q5
// alert("hello " + 1)

// Q6
// firstName = "Muhammad "
// lastName = "Ali"
// name = firstName + lastName;
// alert(name)

// chap 9 

// Q1
// prompt("Enter first name")

// Q2
// country = prompt("Country?" ,  "china")
// document.write(country)

// Q3
prompt("Enter Your Name");





