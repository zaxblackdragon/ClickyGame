# Clicky Game
<br>

### **Deployed on Heroku:**
[View Site](https://obscure-anchorage-84538.herokuapp.com/)
<hr>

#### Basic Play:
The goal is to click on the images without clicking on the same image twice.
<br>
Architecture:
- -> User clicks an image
- --> If the images differs from the last image clicked the the User gets a point
- ---> If it the same image twice, then the User looses a point.
- ----> Once the score = 10, the games starts over and the user accumulates a win.
<hr>

#### UI/UX

Colors:<br>
- Body ***medium grey*** &#10144; #DBDBDB;
- Header ***blue/green*** &#10144;#27C8C1
- Header ***black*** &#10144; #0F0F0F
- Header Text ***white*** &#10144; #E9E9E9
- Score Box ***red*** &#10144; #E52A40
#### Notes:
1. Not sure why, the "src" folder didn't convert to "build". The heroku deployment is working despite that change. -> Need to know why and if that needs a remidy?
2. I figured out how favicons work and how to insert them into a react site.