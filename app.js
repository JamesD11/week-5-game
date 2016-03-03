//Global Variables
//------------------------------------------------------
var time=90000;
var correct=0;
var incorrect=0;
var unanswered=0;



//functions
//------------------------------------------------------


function question(question,var1,var2,var3,var4){
	$(".container").append( 

	"<form>"+
	"<p>"+ question +"</p>"+
	"<input type='radio'  name='reason' value='Fit Description' id='one'> " + var1   + " " +
	"<input type='radio'  name='reason' value='Fit Description'> " + var2   + " " +
	"<input type='radio'  name='reason' value='Fit Description'> " + var3   + " " +
	"<input type='radio'  name='reason' value='Fit Description'> " + var4   + " " +
	"</form>"+
	"</br>")
}

$("#button").on("click", function(){
	console.log("Working");
	$("#heading").remove();
	$("#button").remove();
	
  function start(){
   counter = setInterval(count, 1000);
 }	
	
  function count(){
   time--;
   var converted = timeConverter(time);
  	$(".container").append("<p>" + hi + "</p>");
 }

 function timeConverter(t){
   var minutes = Math.floor(t/60);
   var seconds = t - (minutes * 60);
   if (seconds < 10){
     seconds = "0" + seconds;
   }
   if (minutes === 0){
     minutes = "00";
   } else if (minutes < 10){
     minutes = "0" + minutes;
   }
   return minutes + ":" + seconds;
 }

	setTimeout(timeUp, 1000 * 60 * 1.5 );
		function timeUp(){
		console.log("times up");
		}
	  
	  

	 
		  var question1= question("This is the only team with a perfect season: ","'72 Miami Dolphins","'85 Chicago Bears",
    		"'07 New England Patriots","'75 Pitsburgh Steelers");  
        	$( "input:radio[name='reason']:checked" ).val();
	


		var question2=question("This team has the most Superbowl wins: "," Dallas Cowboys"," Chicago Bears ",
		" New England Patriots"," Pitsburgh Steelers");

		question("This team had the most total yards in 2015:","Denver Broncos","New England Patriots",
			"Carolina Panthers","Arizona Cardinals");

		question("This defense allowed the fewest total yards against in 2015:","Seattle Seahawks","Carolina Panthers",
			"Denver Broncos","Houston Texans");

		question("This team's fans are known as the dogpound:","Oakland Raiders","Cleveland Browns",
			"Washington Redskins", "Minnesota Vikings");

		question("This team went to the superbowl four times in the early 90's and lost all four:","Dallas Cowboys",
			"Washington Redskins", "Buffalo Bills","New York Giants");

		question("This team moved out of Baltimore in the middle of the night in 1984:",
			"Ravens","Redskins","Colts","Eagles");
		
		$(".container").append(
			"<button type='button' class='btn btn-default' id='submit'>Submit!</button>"
			);
		$("#submit").on("click", function(){
			console.log("Working");
		
			if(question1 == "'72 Miami Dolphins" ){
				correct++;
			}else{
				incorrect++;
			}
			$("form").remove();
			$("timer").remove();
			$("#submit").remove();
			$(".container").append( 
				"<p>All done!!!</p>"+
				"<p> Correct: " + correct + "</p>" +
				"<p> Incorrect: " + incorrect + "</p>" +
				"<p> Unanswered: " + unanswered + "</p>" 
				);

			});
		
	});











