var hongry = prompt("You're really really hungry... Do you got lotsa CASH, on a DIET, or POOR as poor is?").toUpperCase();

switch (hongry) {
  case 'CASH':
    var money = prompt("Cash is king! Want to spend it like you just dont care? (YES or NO)?").toUpperCase();
    var shrimp = prompt("Seafood? (YES or NO)").toUpperCase();
    if (money === 'YES' || shrimp === 'YES') {
      window.alert("Seafood ahoy! Steak and Lobster are in your future!");
    } else {
      window.alert("You're like really really reaaaally poor. Quit frontin', yo. Ramen tonight.");
    }
    break;
  case 'DIET':
    var soup = prompt("All right, soup and salad? (YES or NO)").toUpperCase();
    var run = prompt("Are you gonna go for a jog later? (YES or NO)").toUpperCase();
    if (soup === 'YES' && run === 'YES') {
      window.alert("Great! You can get some fat free yogurt with no guilt!");
    } else {
      window.alert("Dang! You're not committed you know you wanna go to a buffet.");
    }
    break;
  case 'POOR':
    var po = prompt("Are you poorer than poor? (YES or NO)").toUpperCase();
    var loan = prompt("Can you borrow some cash? (YES or NO)").toUpperCase();
    if (po === 'YES' && loan === 'NO') {
      window.alert("Being poor sucks, maybe you should go on a diet.");
    } else {
      window.alert("Sweet, you got enough for pizza.");
    }
    break;
  default:
    prompt("I didn't understand your choice. Try again, this time picking CASH, DIET, or POOR!");
}
