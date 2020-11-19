const readline = require("readline-sync");
const name = readline.question("What is your name? ");

var readlineSync = require('readline-sync');

//function with all avail choice for user

function userChoiceMenu()

{

    console.log("1. Put hand in hole");

    console.log("2. Find the key")

    console.log("3. Open the door")

}

function startGame()

{

    // Wait for user's response.

    var userName = readlineSync.question('May I Know your name: ');

    console.log('Hi ' + userName + '!');

    console.log('WELCOME TO THE GAME');

    console.log("===================\n")

    //variable to stroe the value if key found

    let isKeyFound = false;

    while (true)

    {

        userChoiceMenu();

        var userChoice = readlineSync.question('Enter your choice: ');

        if (!Number(userChoice) || Number(userChoice) < 1 || Number(userChoice) > 3)

        {

            console.log("Please enter a numeric value in range 1 to 3");

            continue;

        }

        //perform action based upon user selection

        if (userChoice == 1)

        {

            console.log("Oh NO! Youu died");

            console.log("Game Over. Best luck next time.")

            break;

        } else if (userChoice == 2)

        {

            isKeyFound = true;

            console.log("Great! You found the key. Now try to open the door")

        } else

        {

            if (isKeyFound)

            {

                console.log("CONGRATS! You unlock the door. You are safe now");

                console.log("YOU WON");

                break;

            } else

            {

                console.log("Please Find the key first to open the door");

            }

        }

    }

}

//start the game

startGame();