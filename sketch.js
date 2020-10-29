var Question,QuestionImage;
var Option1,Option1Image;
var Option2,Option2Image;
var Option3,Option3Image;
var Option4,Option4Image;
var CorrectAnswer;
var WrongAnswer;


function preload(){
    QuestionImage = loadImage("Rectangle_example.png") 
    Option1Image = loadImage("rect.png")
    Option2Image = loadImage("rect.png")
    Option3Image = loadImage("rect.png")
    Option4Image = loadImage("rect.png")
  
    CorrectAnswer = loadSound("Correct Answer.mp3")
    WrongAnswer = loadSound("Wrong answer.mp3")
}



function setup() {
 createCanvas (600,300);
  
  Question = createSprite(170,50,200,100);
  Question.addImage(QuestionImage);
  Question.scale =0.60;
  
  Option1 = createSprite(150,150,200,100)
  Option1.addImage(Option1Image);
  Option1.scale = 0.35;
  
  Option2 = createSprite(350,150,200,100)
  Option2.addImage(Option2Image);
  Option2.scale = 0.35;
  
  Option3 = createSprite(150,250,200,100)
  Option3.addImage(Option3Image);
  Option3.scale = 0.35;
  
  Option4 = createSprite(350,250,200,100)
  Option4.addImage(Option4Image);
  Option4.scale = 0.35;
}


function draw() {
 
background("White");
 
  if(mousePressedOver(Option3)){
    CorrectAnswer.play();
  }
  if(mousePressedOver(Option1)||mousePressedOver(Option2)||mousePressedOver(Option4)){
    WrongAnswer.play();
  }
  
  
 
  drawSprites();
  fill("Red")
   text("Q1. Which of the following is not a oviparous animal?",10,50);
  
  fill("red")
  text("a. Frog",150,150);
  
  fill("red")
  text("b.Silkworm",350,150);
  
  fill("red")
    text("c.Cow",150,250);
  
  fill("red")
    text("d.Hen",350,250);
  
}






