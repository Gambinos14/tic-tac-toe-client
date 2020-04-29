# Tic Tac Toe - El Clásico (Barcelona vs Real Madrid)

### Game Logic:

> A soccer inspired game of tic tac toe for lovers of European soccer. User 1
> will always go first and their icon will replace an X in the game logic.
> The game will alternate between game icons and will report scores based on
> the number of wins by player 1 (aka 'X') and player 2 (aka 'O'). Players can
> change icons every time they log in to play with a different team each time!

### Technologies Used:

HTML5, CSS, SASS, Bootstrap, JavaScript, jQuery, AJAX

### Project Planning

>I began the project by laying out a basic user interface which served as a
>framework for testing the functionality of the application. Once the framework
>was displayed on the screen (including the game board), I began working on
>some simple game logic. At first, I began by displaying X's and O's on the
>screen, then, I started keeping track of the individual moves by using a data
>attribute on each box and an array representing the current game to check if
>a truthy value was already present at the array index I was trying to play in.
>A simple counter keeps track of what move the game is on so that it will
>alternate between X and O, and end the game if the counter reaches 9.
>From there, the game logic remained the same; however, to accompany my soccer theme,
>I made it so the user can pick an icon that will represent player 1 (aka 'X').
>In the future, it is simple enough to add many different team icons allowing
>the user to pick an icon for both Player 1 and Player 2. To finish off the game logic,
>I wrote a function which checks for a winner. This function checks all possible
>winning combinations to see if the corresponding array indices are truthy and
>equal to each other, if so, it will return the winner. I used this function
>to check for a winner after each move and to generate win statistics on the
>completed games. API integration for user authentication was fairly straightforward
>as well as the API interaction for game updates and requests. As I planned how I
>was going to send the API game update information, I wasn't certain how to structure
>the object that was going to be sent in JSON format to the API, but with some trial
>and error, and a few console.log tests I was able to quickly sort that out.
>As this is the first real web application that I build from scratch, I'm quite
>satisfied with the final product and what I was able to accomplish at the end
>of this first project.

### Challenges:

> There is an ongoing issue with displaying the game view on larger monitors; however,
> the game works on most laptops and has been optimized for "larger" mobile
> devices. In general, it would make sense to review the CSS component of this
> project as the height of the different "pages" in this single page application
> needs to be more uniform. A second challenge arose when I would click on the
> images that had already been placed on the game board. It appears that these
> images would pass the click event to their parent element which would initiate
> some JavaScript logic that tried to access the non-existent data attribute on
> the image that was clicked. This resulted in a bug which was resolved by
> filtering the jQuery result for the img tag's data attribute. Upon consulting
> with course instructors, I will go back and review the differences between
> event.target and event.currentTarget to try and fine tune this particular
> event handler function.


### Future Upgrades:

* Responsive design for larger screens and smaller mobile phones
* Larger selection of teams for users to pick player 1 and player 2 icons
* Add an option to view all game ID's played in order to retrieve previous games
* Add sound effect on win

This is the [Wireframe Link](https://media.git.generalassemb.ly/user/27494/files/07cc6880-8478-11ea-9725-93e2c6dd2d76)

### User Stories:

* As a user I want to be able to play the game without any glitches or user facing bugs.
* As a user I want the game to end when someone wins and a winner displayed.
* As a user I want the site to know who's turn it is so there isn't any confusion between x's and o's.
* As a user I also want to be able to play the game correctly, such that the same move can't be made twice in one game.
* As a user I want to be able to restart a game whenever I like in case I messed up a move.
