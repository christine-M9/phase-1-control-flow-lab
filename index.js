function scuberGreetingForFeet(distance){
  if (distance <= 400) {
  return "This one is on me!";
}
else if (distance > 2000 && distance <= 2500) {
  return "I will gladly take your thirty bucks.";
}
else if (distance > 2500) {
  return "No can do.";
}
} 
// Write your code here!
function ternaryCheckCity(place) {
  return place === "NYC"
    ? "Ok, sounds good."
    : "No go.";
}


 
  // Write your code here!
  function switchOnCharmFromTip(tipCharge) {
    let answer;
  
    switch (tipCharge) {
      case "generous":
        answer = "Thank you so much.";
        break;
     case "not as generous":
      answer = "Thank you.";
      break;
      case "not generous":
        answer = "Thank you.";
        break;
      default  :
        answer = "Bye." ;
        break;
    }
  
    return answer; 
  }
  // Write your code here!

