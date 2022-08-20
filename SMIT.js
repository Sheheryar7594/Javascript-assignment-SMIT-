// document.write("QUESTION NO 1. <br> Write a JavaScript function that reverse a number <br><br>");


var num;
num = prompt("Enter anything you want to reverse"); //input
if (typeof num == 'number')
{
    num = num.toString();        // convert into string
    num = num.split('');  // creating list
    num = num.reverse(); //reversed the list
    num = num.join('');      // joining the list
    num = parseFloat(num);   //converting to float
    document.write("ANSWER 1: ");
    document.write(num);
    document.write("<br>");
    document.write("<br>");
}
else
{
    num = num.split('');  // creating list
    num = num.reverse(); //reversed the list
    num = num.join('');      // joining the list
    document.write("ANSWER 1: ");
    document.write(num);
    document.write("<br>");
    document.write("<br>");
}



// document.write("QUESTION NO 2. <br> Write a JavaScript function that checks whether a passed string is palindrome or not?<br><br>");


var palindrome;
palindrome= prompt("Enter to Check Palindrome");
var pal = palindrome;
if (typeof num == 'number')
{
    pal = pal.toString();        // convert into string
    pal = pal.split('');  // creating list
    pal = pal.reverse(); //reversed the list
    pal = pal.join('');      // joining the list
    pal = parseFloat(pal);   //converting to float
    if ( palindrome == pal)
    {
        document.write("ANSWER 2: ");
        document.write("It is Palindrome");
        document.write("<br>");
        document.write("<br>");
    }
    else
    {
        document.write("ANSWER 2: ");
        document.write("It is not a Palindrome");
        document.write("<br>");
        document.write("<br>");
    }
}
else
{
    pal = pal.split('');  // creating list
    pal = pal.reverse(); //reversed the list
    pal = pal.join('');      // joining the list
    if ( palindrome == pal)
    {
        document.write("ANSWER 2: ");
        document.write("It is Palindrome");
        document.write("<br>");
        document.write("<br>");
    }
    else
    {
        document.write("ANSWER 2: ");
        document.write("It is not a Palindrome");
        document.write("<br>");
        document.write("<br>");
    }
}


// document.write("QUESTION NO 4. <br> Write a JavaScript function that returns a passed string with letters in alphabetical order.<br><br>");


var order;
order = prompt("Enter anything you want to inorder"); //input
if (typeof num == 'number')
{
    order = order.toString();        // convert into string
    order = order.split('');  // creating list
    order = order.sort(); //reversed the list
    order = order.join('');      // joining the list
    order = parseFloat(order);   //converting to float
    document.write("ANSWER 4: ");
    document.write(order);
    document.write("<br>");
    document.write("<br>");
}
else
{
    order = order.split('');  // creating list
    order = order.sort(); //reversed the list
    order = order.join('');      // joining the list
    document.write("ANSWER 4: ");
    document.write(order);
    document.write("<br>");
    document.write("<br>");
}



// document.write("QUESTION NO 5. <br>  Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.<br><br>");

// var para;
// para = prompt(" Enter the parameter you want to Capitalized");
// var L1 = para.split('');   //creating list
// var L2 = [];               //final list
// for(var x = 0; x < L1.length; x++)
// {
//     //Adding in new list = list ka phela charater upper case krkay + baaki characters mein add krdia 
//     L2.push(L1[x].charAt(0).toUpperCase() + L1[x].slice(1));
// }
// return L2.join(' ');

var para = prompt("Enter the parameter you want to Capitalized");
function Capitalized(para)
{
  var array1 = para.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write("ANSWER 5: ");
document.write(Capitalized(para));
document.write("<br>");
document.write("<br>");




// document.write("QUESTION NO 6. <br> Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.<br><br>");


var longword = prompt("Enter the parameter and you'll get the longest word");
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
document.write("ANSWER 6: ");
document.write(longestWord(longword));
document.write("<br>");
document.write("<br>");



// document.write("QUESTION NO 7. <br> Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.<br><br>");
var vowelscount = prompt("Enter Parameter and you'll get total no of vowels");
function vowels(str) {
    window.count = 0;
    var vowelsAlphabets = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    for(var i = 0; i <= str.length; i++){
        for(var j = 0; j < vowelsAlphabets.length; j++){
            if(str[i] === vowelsAlphabets[j]) {
                window.count = count + 1;
            }
        }
    }
    return count;

}
vowels(vowelscount);
document.write("ANSWER 7: ");
document.write(window.count);
document.write("<br>");
document.write("<br>");

// document.write("QUESTION NO 8. <br> Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.<br><br>");

function isPrime(n){
    if(n===1){
        return false;
    }
    else if(n===2){
        return true;
    }
    else{
        for(var i=2; i<n ;i++){
            if(n % i ===0){
                return false;
            }
        }
        return true;
    }
}
document.write("ANSWER 8: ");
document.write(isPrime(30));
document.write("<br>");
document.write("<br>");




// document.write("QUESTION NO 9. <br>  Write a JavaScript function which accepts an argument and returns the type.<br><br>");


function dataType(value) {
    var arrayOfTypes = [Function, RegExp, Number, String, Boolean, Object];

        for (x = 0; x < arrayOfTypes.length; x++) {
            if (typeof(value) === arrayOfTypes[x]) {
                return arrayOfTypes[x];
            }
        }

    return typeof value;
}
document.write("ANSWER 9: ");
document.write(dataType(false));
document.write("<br>");
document.write(dataType(20));
document.write("<br>");
document.write(dataType("Sheheryaar"));