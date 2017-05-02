function dePartments() {

	canvas2 = createCanvas(1275, 700);
	//background("#beefed");
	canvas2.position(0, 0);
	button.hide();
	button2.hide();
	button3.hide();
	button4.hide();
	button5.hide();

	select("#cows").show();
	select("#cows").position(100, 100);
	select("#cows").size(300, 300);
	select("#cows").style("font-size", "22px");
	select("#cows").style("background-color", "#cfe2f3");
	select("#cows").style("z-index", "1");
	//math = createButton('Math');

	//math.position(100, 100);
	//math.size(300,300);
	//math.style("font-size", "22px");
	//math.style("background-color", "#cfe2f3");
	//math.mousePressed(mathp);

	english = createButton('English');
	english.position(450, 100);
	english.size(300, 300);
	english.style("font-size", "22px")
	english.style("background-color", "#cfe2f3")
	english.mousePressed(englishp);
	science = createButton('Science');
	science.position(800, 100);
	science.size(300, 300);
	science.style("font-size", "22px")
	science.style("background-color", "#cfe2f3")
	science.mousePressed(sciencep);

	historyn = createButton('History');
	historyn.position(100, 450);
	historyn.size(300, 300);
	historyn.style("font-size", "22px")
	historyn.style("background-color", "#cfe2f3")
	historyn.mousePressed(historyp);

	wlang = createButton('World Language');
	wlang.position(450, 450);
	wlang.size(300, 300);
	wlang.style("font-size", "22px")
	wlang.style("background-color", "#cfe2f3")
	wlang.mousePressed(wlangp);

	elective = createButton('Elective');
	elective.position(800, 450);
	elective.size(300, 300);
	elective.style("font-size", "22px")
	elective.style("background-color", "#cfe2f3")
	elective.mousePressed(electivep);

	button1 = createButton('Go Back');
	button1.position(25, 25);
	button1.size(100, 35);
	button1.mousePressed(setup);
	button1.mousePressed(hideButton1);
}