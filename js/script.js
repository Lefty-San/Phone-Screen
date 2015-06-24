var entry = [],
	right = ["3", "2", "1"],
    combo = [],
    notes = [],
    winnerText = $(".notify");

winnerText.hide();

$("a").click(function(e){
	var chk = $(this).hasClass("pressed"),
	    ths = $(this),
	    num = ths.text();
	if ( !chk ) {
		ths.addClass("pressed");
	}
	combo.plus(num);
	$(".num1").text(entry[0]);
	$(".num2").text(entry[1]);
	$(".num3").text(entry[2]);
	console.log(entry[0]);
	console.log(entry);
});

combo.plus = function(t) {
	winner = false;
	entry.push(t);
	if (entry.length > 3) {
		combo.check();
		//update notepad
		$(".notepad").append("<p>" + entry + "</p>");
		if ($(".notepad p").length > 5){
			notes.rem();
		}
		//clear for new game
		$("article").removeClass("pressed");
		entry.length = 0;
	}
}

combo.check = function() {
	//  validate the combo or reset the array 
	for (i=0; i<4; i++){
		if (entry[i] != right[i]){
			winnerText.hide();
			$(".notepad").show();
			return;
		}
	}
	winner = true;
	winnerText.show();
	$(".notepad").hide();
}

notes.rem = function(){
	$(".notepad p:nth-child(2)").remove();
}
