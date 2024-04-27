function chooseOption(option) {
    let resultDiv = document.querySelector('.result');
    let dialogueDiv = document.querySelector('.dialogue');

    if (option === 'yes') {
        dialogueDiv.innerHTML = "<p>Squidward enjoyed your company and wants to see you again!</p>";
        resultDiv.innerHTML = "<p>Congratulations, you won Squidward's heart!</p>";
    } else if (option === 'no') {
        dialogueDiv.innerHTML = "<p>Squidward was not impressed, better luck next time!</p>";
        resultDiv.innerHTML = "<p>Sorry, you did not win Squidward's heart.</p>";
    } else {
        dialogueDiv.innerHTML = "<p>Squidward is confused by your response, try again!</p>";
        resultDiv.innerHTML = "<p>Your relationship status with Squidward remains uncertain.</p>";
    }

    let optionsDiv = document.querySelector('.options');
    optionsDiv.style.display = 'none';
}