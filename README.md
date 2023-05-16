# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here: https://github.com/lighthouse-labs/snek-multiplayer

## Final Product

The controls are: 
  1. 'w', 's', 'a', 'd' for up, down, left, and right movement respectively.
  2. 'z', 'x', 'c' and 'v' can be used for sending messages.
  3. 'CTRL + C' for exiting game if you die.

In the constants.js file you can setup your IP, PORT, and NAME (3 Letters).
You can also freely change your buttons for movement and taunt messages.

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.
