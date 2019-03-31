
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('.img1').setAttribute('src','images/dice' + dice1 + '.png');
document.querySelector('.img2').setAttribute('src','images/dice' + dice2 + '.png');


if(dice1 > dice2)
   document.querySelector('.container h1').innerHTML = '🚩Player 1 wins!';
else if(dice1 < dice2)
   document.querySelector('.container h1').innerHTML = 'Player 2 wins!🚩';
else
   document.querySelector('.container h1').innerHTML = 'Draw!';