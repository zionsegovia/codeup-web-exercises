let userPrompt;
// apparently this can be used for an infinite loop: for (;;)
 for (;;) {
    userPrompt = parseInt(prompt("Please give me an ODD number between 1 and 50"));

    if (userPrompt >= 1 && userPrompt <= 50 && userPrompt % 2 !== 0) {
        break;
    }

    alert("I SAID AN ODD NUMBER.");
}

for (let i = 1; i <= 49; i += 2) {
    if (i === userPrompt) {
        console.log(`Yikes man! Skipping that number ${i}`);
        continue;
    }

    console.log(i);
}

