
// player one's 

var randomNumber1 = Math.floor(Math.random() * 3) + 1; // This will generate a random number between 1 to 3

var randomImage1 = "p" + randomNumber1 + ".png"; // Generates our image names e.g pl1.img

var randomImageSource1 = "playerOne/" + randomImage1; // Generates the location of our images

var playerOne = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);



// player two's

var randomNumber2 = Math.floor(Math.random() * 3) + 1; // This will generate a random number between 1 to 3

var randomImage2 = "p" + randomNumber2 + ".png"; // Generates our image names e.g pl1.img

var randomImageSource2 = "playerTwo/" + randomImage2; // Generates the location of our images

var playerTwo = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//PLay btn

document.querySelector(".playButton").addEventListener("click", handleButton);

function handleButton() {
    window.location.reload();
}

// Send Messege to the winner



