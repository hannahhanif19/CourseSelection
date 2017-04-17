var button;
var button1;
var button2;
var button3;
var button4;
var button5;

function setup() {
  createCanvas(1275,700);
  background("#beefed");
  textAlign(CENTER);
  textFont("Georgia");
  textSize(32);
  fill(0)
  text("Lick Wilmerding Course Selection", width/2, 50); //title
  fill("#ffe599")
  rect(width/2-500,70,1000,40,5)
  
  button = createButton('SIGN UP');
  button.position(width/2-275, 73);
  button.size(100,35);
  button.style("background-color", "#cfe2f3")
  button.mousePressed(signUp);
  
  button2 = createButton('LOGIN');
  button2.position(width/2+170, 73);
  button2.size(100,35);
  button2.style("background-color", "#cfe2f3")
  button2.mousePressed(logIn);
  
  textFont("Georgia");
  textSize(18);
  fill(0)
  text("This is the course selection page that allows ……… (overview of web page)", width/2, 180); //course page overview
  
  button3 = createButton('USER INFO');
  button3.position(width/2-500, 300);
  button3.size(300,300);
  button3.style("font-size", "22px")
  button3.style("background-color", "#cfe2f3")
  button3.mousePressed(userInfo);
  
  button4 = createButton('DEPARTMENTS');
  button4.position(width/2-150, 300);
  button4.size(300,300);
  button4.style("font-size", "22px")
  button4.style("background-color", "#cfe2f3")
  button4.mousePressed(dePartments);
  
  button5 = createButton('PLAN YOUR SCHEDULE');
  button5.position(width/2 +200, 300);
  button5.size(300,300);
  button5.style("font-size", "22px")
  button5.style("background-color", "#cfe2f3")
  button5.mousePressed(dePartments);
}

function draw() {
  
}


function signUp() {
  createCanvas(1275,700);
  button.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button1 = createButton('Go Back');
  button1.position(25, 25);
  button1.size(100,35);
  button1.mousePressed(setup);
  button1.mousePressed(hideButton1);
}

function logIn() {
  createCanvas(1275,700);
  button.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button1 = createButton('Go Back');
  button1.position(25, 25);
  button1.size(100,35);
  button1.mousePressed(setup);
  button1.mousePressed(hideButton1);
}

function userInfo() {
  createCanvas(1275,700);
  button.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button1 = createButton('Go Back');
  button1.position(25, 25);
  button1.size(100,35);
  button1.mousePressed(setup);
  button1.mousePressed(hideButton1);
}

function dePartments() {
  createCanvas(1275,700);
  button.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button1 = createButton('Go Back');
  button1.position(25, 25);
  button1.size(100,35);
  button1.mousePressed(setup);
  button1.mousePressed(hideButton1);
}

function planSchedule() {
  createCanvas(1275,700);
  button.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button1 = createButton('Go Back');
  button1.position(25, 25);
  button1.size(100,35);
  button1.mousePressed(setup);
  button1.mousePressed(hideButton1);
}

function hideButton1() {
  button1.hide();
}