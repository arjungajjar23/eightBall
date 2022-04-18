let userName = 'newuser'; // variable that takes a new username

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!"); //write a ternarry rxpression that decided what to do if user enters a name or not!

let userQuestion = 'How do I play this game?'; // a new variable where user can ask questions about the game. 

console.log(`${userName} has asked: ${userQuestion}`); // print user's question


const randomNumber = Math.floor(Math.random() * 8); // declare a new variable that generates random numbers.

let eightBall = '';
 // create a control flow that takes a randomNumber and assign it to the eightBall variable!
switch (randomNumber){
  case 1:
    eightBall = "It is certain";
  break;
  case 2:
    eightBall ='It is decidedly so';
  break;
  case 3:
    eightBall = 'Reply hazy try again';
  break;
  case 4:
    eightBall ='Cannot predict now';
  break;
  case 5:
    eightBall ='Do not count on it';
  break;
  case 6:
    eightBall ='My sources say no';
  break;
  case 7:
    eightBall ='Outlook not so good';
  break;
  case 8:
    eightBall ='Signs point to yes';
  break;
  default:
  eightBall ="try again";
  break;
} 
//print the answer!!!
console.log(`The magic eight ball's answer is ${eightBall}.`);