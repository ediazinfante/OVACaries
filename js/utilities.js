/*----------- Back Scroll Button --------*/
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
} 

//----------- Tab Page Transition -----------
function openTab(tabName, btnName, audNum) {

		var i;
		var x = document.getElementsByClassName("myTabs");	
		var y = document.getElementsByClassName("w3-bar-item w3-button myPage");
		var z = document.getElementsByClassName("myAudio");
	
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		for (i = 0; i < y.length; i++) {
			y[i].style.backgroundColor = "black";
		}
		for (i = 0; i < z.length; i++) {
			z[i].pause();
			z[i].currentTime = 0;
		}
		
		document.getElementById(tabName).style.display = "block";
		document.getElementById(btnName).style.backgroundColor = "#00e9b4";
		
		z[audNum].play();
		
}

//------------  Open Acordion --------------
function openAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}	

