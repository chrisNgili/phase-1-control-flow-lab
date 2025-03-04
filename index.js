function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400){
  return "This one is on me!"}

  else if (someValue >=400 && someValue <2000){
    return "That will be twenty bucks."
  }

else if (someValue > 2500){
  return "No can do."
}
else if (someValue > 2000){
  return "I will gladly take your thirty bucks."
}
  
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  if (tip === "generous"){
    return "Thank you so much."
  }
  else if(tip === "not as generous"){
    return "Thank you."
  }
  else{
    return "Bye."
  }
}