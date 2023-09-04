# Frontend Mentor - Connect Four game solution

This is my solution to the [Connect Four game challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/connect-four-game-6G8QVH923s).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the game rules
- Play a game of Connect Four against another human player (alternating turns on the same computer)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the discs animate into their position when a move is made
- **Bonus**: Play against the computer

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [solution URL](https://github.com/roodhouse/frontend-mentor-connect-four)
- Live Site URL: [live site](https://connect.rugh.us)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

For me, this project was a marathon. I find that projects drag out for me due to my inability to accurately plan before starting to code. Often I hit my MVP and I am happy with it, then I go back to add new features and the MVP begins to unravel. Soon I am left with a tangeled mess that would no longer qualify as an MVP. Thankfully git allows an easy way to step back and start again from any point.

For this project I forced myself to utilize useContext in React. Previously I had been "prop drilling" and the code was becoming increasely massive and unreadable. I am not entirely sure that I utilized useContext with best practice (my context files are a bit out of control) but I found it far easier to utilize useContext than to prop drill. 

A second thing I learned was how to use pointer-events with CSS. I an into an issue where the game board and game piece would at some point display in the wrong order. This was because I was using a higher z-index on the game piece so that it could be clicked and used. But with the higher z-index, the piece would settle on top of the game board and not give the appearance as if it were behind the game board. Switching the z-index of the piece and board would give the correct appearance but not allow any additional pieces to be clicked. The solution was to keep the board above the pieces with z-index, and also use pointer-events: none on the game board. This allows for the next layer to be clicked and the z-index order to remain intact and consistent.

### Continued development

I had to compromise with this project. Animation works, but only while playing 2 player. Vs the CPU I have turned the animation off. This is the situation I was referring to above. Continued development looks like figuring out the best way to add animation to the CPU logic without having to start completely over. 

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)

