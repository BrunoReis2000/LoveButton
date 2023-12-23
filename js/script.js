
var caller = $("#runBtn"),
box = $("#greenbox");


function foo()
{
    //console.log($(".content-wrapper").width());
    //console.log($(".content-wrapper").height());
    
    var randX = Math.floor(Math.random() * ($(".content-wrapper").width() - 100));
    var randY = Math.floor(Math.random() * ($(".content-wrapper").height() - 100));
    //console.log([randX, randY]);
    caller.stop().animate({"left": randX + "px", "top": randY + "px"});

}




$(document).ready(function(){
	$('.slick-demo' ).slick({
		autoplay: true,
		infinite: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: true,
		variableWidth: false,
		variableHeight: false
	});

	caller.on('mouseenter', foo);
    
    var clickSound = $("#sound")[0];

    // Attach click event to the button
    $("#btn1").click(function(){
        if (clickSound.readyState === 4) {
            // Play the sound
            clickSound.play();
        } else {
            // If the audio is not yet fully loaded, listen for the 'canplaythrough' event
            clickSound.addEventListener('canplaythrough', function() {
                // Now the sound is fully loaded, you can play it
                clickSound.play();
            });
        }
    
    });

    // Pass in the id of an element
    let confetti = new Confetti('btn1');
    // Edit given parameters
    confetti.setCount(300);
    confetti.setSize(1);
    confetti.setPower(40);
    confetti.setFade(false);
    confetti.destroyTarget(false); 
});




