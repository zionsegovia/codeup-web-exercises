console.log("Hello From External Javascript");

//alert("Welcome to my Website!");
//let FavColor = prompt('What is your most favorite color in the world');
//alert (`Hey ${FavColor} Is My Favorite Color Too!`);

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
// how much will you have to pay?


//alert("Welcome to my movie renting service, there is a 3 dollar a day rental fee!");
//let TLM = prompt("How many days did you watch The Little Mermaid?");
//alert ('The price of the movie is '+ TLM * 3);
//let BB = prompt("How many days did you watch Brother Bear?");
//alert ('The price of the movie is '+ BB * 3);
//let H = prompt("How many days did you watch Hercules?");
//alert ('The price of the movie is '+ H * 3);



//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
//alert("Now Its Time To Do Some Math!");
//let GoogleHours = prompt("How many hours did you work for Google this week?");
//alert ('If they pay $400 an hour, you made a total of ' + GoogleHours * 400);
//let AmazonHours = prompt('Now, how many hours did you work at Amazon this week?');
//alert ('If the pay is $380 an hour, you made a whopping total of ' + AmazonHours * 380);
//let FacebookHours = prompt('Lastly, how many hours did you work for Facebook this week?');
//alert ('If the pay is $350 an hour, you made an astonishing total of ' + FacebookHours * 350);
//alert ('Congratulations! You made a lot of money!');
let googlePay = parseFloat(prompt('How much does google pay ou per hour?');
let googleHours = parseFloat(prompt("How many hours did you work for Google?");
let google = googlePay * googleHours;
let metapay = parseFloat(prompt("How much did meta pay ou per hour ");
let metaHours = parseFloat(prompt("How many hours did you work for meta?");
let meta = metaPay * metaHours;
let amazonPay = parseFloat(prompt("How much does Amazon pay you per hour?")
let amazonhours = parseFloat(prompt("How many hours did you work for amazon?")
let amazon = amazonPay * amazonhours;
let paycheck = google + meta + amazon;
let formattedpaycheck = paycheck.toLocaleString("en-US", {style:"currency", currency:"USD"});
alert(`your paycheck will be ${formattedpaycheck}`);




//A student can be enrolled in a class only if the class is not full
// and the class schedule does not conflict with her current schedule.

//let scheduleConflicts = false;
//let maxClassSize = 30;
//let ClassSize = prompt('what is your class size');
//let scheduleConflicts = prompt('Do you have a schedule conflict?');
//let canEnroll = !scheduleConflicts && (ClassSize < maxClassSize);
//alert('You are Enrolled')

let scheduleconflicts=false;
let maxclassinput = prompt"what is the max size of the class"));
let currentclasssize = parseInt(prompt("what is the current size of the class"));
let canenroll - !scheduleconflicts && (currentclasssize )


//let haspremium = true
//let haspremiumQuestion = prompt('do you have premium?');
//let cartsize = 4
//let cartsizeQuestion = prompt('Do you have more than two items?');
//let validoffer = true
//let validofferDiscount = prompt('Is the offer still available?');
//let HaveDiscount = validoffer && (cartsize > 2 || haspremium);

let mincartsize = 2;
let cartsize = parseInt(prompt('how many items did you buy'));
let premiummember = confirm('are you a premium member?');
let offerexpired = confirm('has the offer expired?');
let canofferapply = (premiummember || (cartsize > mincartsize)) && !offerexpired;
alert(`It is ${canofferapply} that offer does apply. `);


