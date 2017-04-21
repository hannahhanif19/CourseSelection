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
var science;
var historyn;
var wlang;
var electives;
var button6;

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
  button3.position(width/2-500, 310);
  button3.size(300,300);
  button3.style("font-size", "22px")
  button3.style("background-color", "#cfe2f3")
  button3.mousePressed(userInfo);
  
  button4 = createButton('DEPARTMENTS');
  button4.position(width/2-150, 310);
  button4.size(300,300);
  button4.style("font-size", "22px")
  button4.style("background-color", "#cfe2f3")
  button4.mousePressed(dePartments);
  
  button5 = createButton('PLAN YOUR SCHEDULE');
  button5.position(width/2 +200, 310);
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

  math.position(100, 100);
  math.size(300,300);
  math.style("font-size", "22px");
  math.style("background-color", "#cfe2f3");
  math.mousePressed(mathp);
  english = createButton('English');
  english.position(450, 100);
  english.size(300,300);
  english.style("font-size", "22px")
  english.style("background-color", "#cfe2f3")
  english.mousePressed(englishp);
  science = createButton('Science');
  science.position(800, 100);
  science.size(300,300);
  science.style("font-size", "22px")
  science.style("background-color", "#cfe2f3")
  science.mousePressed(sciencep);
  
  historyn = createButton('History');
  historyn.position(100, 450);
  historyn.size(300,300);
  historyn.style("font-size", "22px")
  historyn.style("background-color", "#cfe2f3")
  historyn.mousePressed(historyp);
  
  wlang = createButton('World Language');
  wlang.position(450, 450);
  wlang.size(300,300);
  wlang.style("font-size", "22px")
  wlang.style("background-color", "#cfe2f3")
  wlang.mousePressed(wlangp);
  
  elective = createButton('Elective');
  elective.position(800, 450);
  elective.size(300,300);
  elective.style("font-size", "22px")
  elective.style("background-color", "#cfe2f3")
  elective.mousePressed(electivep);
  
  button1 = createButton('Go Back');
  button1.position(25, 25);
  button1.size(100,35);
  button1.mousePressed(setup);
  button1.mousePressed(hideButton1);
}

function mathp() {
  createCanvas(1275,700);
  math.hide();
  english.hide();
  science.hide();
  historyn.hide();
  wlang.hide();
  elective.hide();

  button1.hide();
  button6 = createButton('Go Back');
  button6.position(25, 25);
  button6.size(100,35);
  button6.mousePressed(dePartments);
  button6.mousePressed(hideButton6);
}

function englishp() {
  createCanvas(1275,700);
  math.hide();
  english.hide();
  science.hide();
  historyn.hide();
  wlang.hide();
  elective.hide();
  button1.hide();
  button7 = createButton('Go Back');
  button7.position(25, 25);
  button7.size(100,35);
  button7.mousePressed(dePartments);
  button7.mousePressed(hideButton7);
}

function sciencep() {
  createCanvas(1275,700);
  math.hide();
  english.hide();
  science.hide();
  historyn.hide();
  wlang.hide();
  elective.hide();
  button1.hide();
  button8 = createButton('Go Back');
  button8.position(25, 25);
  button8.size(100,35);
  button8.mousePressed(dePartments);
  button8.mousePressed(hideButton8);
}

function historyp() {
  createCanvas(1275,700);
  math.hide();
  english.hide();
  science.hide();
  historyn.hide();
  wlang.hide();
  elective.hide();
  button1.hide();
  button9 = createButton('Go Back');
  button9.position(25, 25);
  button9.size(100,35);
  button9.mousePressed(dePartments);
  button9.mousePressed(hideButton9);
}

function wlangp() {
  createCanvas(1275,700);
  math.hide();
  english.hide();
  science.hide();
  historyn.hide();
  wlang.hide();
  elective.hide();
  button1.hide();
  button10 = createButton('Go Back');
  button10.position(25, 25);
  button10.size(100,35);
  button10.mousePressed(dePartments);
  button10.mousePressed(hideButton10);
}

function electivep() {
  createCanvas(1275,700);
  math.hide();
  english.hide();
  science.hide();
  historyn.hide();
  wlang.hide();
  elective.hide();
  button1.hide();
  button11 = createButton('Go Back');
  button11.position(25, 25);
  button11.size(100,35);
  button11.mousePressed(dePartments);
  button11.mousePressed(hideButton11);
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
  math.hide();
  english.hide();
  science.hide();
  historyn.hide();
  wlang.hide();
  elective.hide();
}

function hideButton6() {
  button6.hide();
}

function hideButton7() {
	button7.hide();
}

function hideButton8() {
	button8.hide();
}

function hideButton9() {
	button9.hide();
}

function hideButton10() {
	button10.hide();
}

function hideButton11() {
	button11.hide();
}