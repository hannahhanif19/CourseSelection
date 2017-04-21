var button;
var button1;
var button2;
var button3;
var button4;
var button5;
var math;
var english;
var button6;
var overview;

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
  textAlign(CENTER);
  textStyle(ITALIC);
  overview = "This is the new and improved course selection page that allows students to find everything they are looking for during course signups all in one place. This page includes a login and sign up section so that students can save their work, a departments page that includes all the subjects and the courses offered at Lick, and a scheduling page which references to graduation requirements and an interactive course planner for the upcoming year. "; //course page overview
  text(overview, width/2-350, 140, 680, 200);

  
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
  button5.mousePressed(planSchedule);

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
  
  math = createButton('Math');
  math.position(width/2-500, 300);
  math.size(300,300);
  math.style("font-size", "22px")
  math.style("background-color", "#cfe2f3")
  math.mousePressed(mathp);
  
  button1 = createButton('Go Back');
  button1.position(25, 25);
  button1.size(100,35);
  button1.mousePressed(setup);
  button1.mousePressed(hideButton1);
}

function mathp() {
  createCanvas(1275,700);
  math.hide();
  button1.hide();
  button6 = createButton('Go Back');
  button6.position(25, 25);
  button6.size(100,35);
  button6.mousePressed(dePartments);
  button6.mousePressed(hideButton6);
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

function hideButton6() {
  button6.hide();
}