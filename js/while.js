/* let i = 1;
while (i < 16){
    console.log(2 ** i);
    i++;
}

 */

let totalCones = Math.floor(Math.random() * 51) + 50;


do {

    let conesBought = Math.floor(Math.random() * 5) + 1;

    if (conesBought <= totalCones) {

        totalCones -= conesBought;
        console.log(conesBought + " cones sold. " + totalCones + " cones left.");
    } else {

        console.log("Sorry chump, I don't have " + conesBought + " cones left. I only have " + totalCones + " cones left, " +
            "you shoulda came sooner!");
    }
} while (totalCones > 0);

console.log("Yay, I FINALLY sold all my cones and can go home to my poor wife and kids now!");
