var entry = [],
	right = ["6", "3", "7", "8"],
    combo = [],
    notes = [],
    winnerText = $(".notify");


for (i=0; i<4; i++){
	$(".num" + (i+1)).hide();
}

winnerText.hide();

$("a").click(function(e){
	   var ths = $(this)
	   var num = ths.text();
	combo.plus(num);

	for (i=4; i>entry.length; i--){
		$(".num" + (i+1)).hide();
	}

	for (i=0; i<entry.length; i++){
		$(".num" + (i+1)).show();
	}
});

for (i=0; i<entry.length; i++){
	$(".num" + (i+1)).show();
}

combo.plus = function(t) {
	winner = false;
	entry.push(t);
	if (entry.length >4){
		entry.length = 1;
}
	console.log(entry);
	if (entry.length > 3) {
		combo.check();
		//update notepad
	}
}

combo.check = function() {
	//  validate the combo or reset the array 
	for (i=0; i<4; i++){
		if (entry[i] != right[i]){
			winnerText.hide();
			$(".notepad").show();
			console.log("winner: \r" + winner);
			return;
		}
	}
	winner = true;
	console.log("winner: \r" + winner);
	entry.length = 0;
	winnerText.show();
	$(".notepad").hide();
}

notes.rem = function(){
	$(".notepad p:nth-child(2)").remove();
}
