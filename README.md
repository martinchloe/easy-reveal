#Hi Guys 
##How to create an easy reveal effect with JQUERY
Easy Reveal makes the elements appear progressively while your scroll.

1.Create your HTML file and give every element the same class.
2.Make sure to add these elements to your class in the CSS file :
ex:
.yourclass{
   opacity:0;
   position: relative;
   bottom:-50px;
   transition:.5s all ease-in-out;
}
3.Create another class in CSS which will be later used in the JS file and which will be linked to the scroll to make appear the elements.
ex:
.anotherclass{
    opacity: 1;
    bottom:0;
}
4.Create now a JS file and make a variable containing the windows height. Add an Event Listener on scroll which will execute the easy reveal effect.
Now name your function. First step consists in getting the user 
ex:$windowSize = window.innerHeight;

