var blattInfoData;
var currentSlide = 0;
var dpSlide = 0; // doppelSeiten slide

// Load JSON data using fetch
fetch('./blattInfo.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Return the JSON data
  })
  .then(data => {
    blattInfoData = data; // Assign the fetched data to the variable
	zoom = 50;
	bildAnzeigeDSNeu();
  })
  .catch(error => console.error('There was a problem with the fetch operation:', error));


// Aus html übernommen
//--------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dropdown").addEventListener("mouseover", function() {
        Tip('Buch wählen');
    });

    document.getElementById("dropdown").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("buchMenu").addEventListener("change", function() {
        MM_jumpMenuParts();
    });
	document.getElementById("blatt").addEventListener("mouseover", function() {
        Tip('Blatt finden');
    });

    document.getElementById("blatt").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("blattInput").addEventListener("keypress", function(event) {
        return submitenter(this, event);
    });

    document.getElementById("submitBlattImg").addEventListener("mouseover", function() {
        Tip('Blatt finden');
    });

    document.getElementById("submitBlattImg").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("submitBlattImg").addEventListener("click", function() {
        checkSeitenEingabe();
    });
	document.getElementById("handschrift").addEventListener("mouseover", function() {
        Tip('Handschrift wählen');
    });

    document.getElementById("handschrift").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("handMenu").addEventListener("change", function() {
        MM_jumpHandschrift();
    });
	document.getElementById("blaettern1").addEventListener("mouseover", function() {
        Tip('vorheriger Abschnitt');
    });

    document.getElementById("blaettern1").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("blaettern1").addEventListener("click", function() {
        goPrevBook();
    });

    document.getElementById("blaettern2").addEventListener("mouseover", function() {
        Tip('zurückblättern');
    });

    document.getElementById("blaettern2").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("blaettern2").addEventListener("click", function() {
        goPrevPage();
    });

    document.getElementById("blaettern3").addEventListener("mouseover", function() {
        Tip('weiterblättern');
    });

    document.getElementById("blaettern3").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("blaettern3").addEventListener("click", function() {
        goNextPage();
    });

    document.getElementById("blaettern4").addEventListener("mouseover", function() {
        Tip('nächster Abschnitt');
    });

    document.getElementById("blaettern4").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("blaettern4").addEventListener("click", function() {
        goNextBook();
    });
	document.getElementById("g50").addEventListener("mouseover", function() {
        Tip('50%-Größe anzeigen');
    });

    document.getElementById("g50").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("g50").addEventListener("click", function() {
        zoom50();
    });

    document.getElementById("g100").addEventListener("mouseover", function() {
        Tip('100%-Größe anzeigen');
    });

    document.getElementById("g100").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("g100").addEventListener("click", function() {
        zoom100();
    });

    document.getElementById("g150").addEventListener("mouseover", function() {
        Tip('150%-Größe anzeigen');
    });

    document.getElementById("g150").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("g150").addEventListener("click", function() {
        zoom150();
    });

    document.getElementById("zoomminus").addEventListener("mouseover", function() {
        Tip('Zoom -');
    });

    document.getElementById("zoomminus").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("zoomminus").addEventListener("click", function() {
        zoomout();
    });

    document.getElementById("zoomplus").addEventListener("mouseover", function() {
        Tip('Zoom +');
    });

    document.getElementById("zoomplus").addEventListener("mouseout", function() {
        UnTip();
    });

    document.getElementById("zoomplus").addEventListener("click", function() {
        zoomin();
    });
});

// Funktion, um Tooltip anzuzeigen
function Tip(text) {
    var tooltip = document.createElement("div");
    tooltip.innerHTML = text;
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);

    document.addEventListener("mousemove", updateTooltipPosition);

    function updateTooltipPosition(event) {
        var x = event.clientX + 10; 
        var y = event.clientY - 30; 

        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }
}

// Funktion, um Tooltip zu entfernen
function UnTip() {
    var tooltip = document.querySelector(".tooltip");
    if (tooltip) {
        tooltip.parentNode.removeChild(tooltip);
    }
}

function zoomin() {
	var GFG = document.getElementById("imgFaksimile");
	var currWidth = GFG.clientWidth;
	GFG.style.width = (currWidth + 100) + "px";
}

function zoomout() {
	var GFG = document.getElementById("imgFaksimile");
	var currWidth = GFG.clientWidth;
	GFG.style.width = (currWidth - 100) + "px";
}


function isOnLastSinglePage() {
	const lastPageIdx = blattInfoData.blattInfo.length-1; // the very last blatt index in the json
	return currentSlide === lastPageIdx;
}

function isOnLastDoublePage() {
	const lastPageIdx = blattInfoData.blattInfo.length-1; // the very last blatt index in the json
	const lastDoublePageNumber = blattInfoData.blattInfo[lastPageIdx]?.dpSlide; // the last double page number in the data
	return dpSlide === lastDoublePageNumber;
}

// reset the current slide, i.e. the index of a single page when the double page changes
function resetCurrentSlide() {
	const nextDP = blattInfoData.blattInfo.filter(b => b.dpSlide === dpSlide); // get the double page (an array of all pages with that dpSlide)
	currentSlide = blattInfoData.blattInfo.findIndex(b => b.blatt === nextDP[0].blatt); // get the index of the first page in the double page
}

function resetDPSlide() {
	const nextBlatt = blattInfoData.blattInfo[currentSlide]; // get the blatt from the data
   	dpSlide = nextBlatt.dpSlide;
}

function goNextPage() {
	if (zoom === 50 ) { // we are in double pages view
		if ( isOnLastDoublePage() ) {
        	return; // we don't do anything, because we are aleady on the last double page
        }
    	dpSlide +=1; // increase the double page number
    	bildAnzeigeDSNeu();
    	resetCurrentSlide(); // reset also the single page
    } else { // we are in single page view
    	if ( isOnLastSinglePage() ) {
        	return; // we don't do anything because we are already on the last page
        } // else we go to the next page/blatt
    	currentSlide += 1; // increase
		bildAnzeigeESNeu(); // display single page
    	resetDPSlide(); // but also reset the double page number according to the new current single page 
    }
}

function goPrevPage() {
	if (zoom === 50) {
    	if (dpSlide === 0) {
        	return; // we abort becasue we are already on the first page
        }
    	dpSlide = dpSlide-1; // decrease
    	bildAnzeigeDSNeu(); // display
    	resetCurrentSlide(); // also set the single page to the first page of the new double page.
    } else { // we are in single page view
    	if (currentSlide == 0) {
        	return; // we are already at the very first single page
        }
    	currentSlide -= 1; // decrease    
		bildAnzeigeESNeu(); // display
    	resetDPSlide(); // but also reset the double page number according to the new current single page 
    }
}

function bildAnzeigeESNeu() {
	
	const blatt = blattInfoData.blattInfo[currentSlide]; // get the blatt
	// set all the elements in the DOM
	document.getElementById('versAnzeige').innerHTML = blatt.konkordanz;
    document.getElementById('schreibAnzeige').innerHTML = blatt.schreiber;

	const blattAngabe = blatt.alt ? blatt.blatt + ' (alt ' + blatt.alt + ')' : blatt.blatt;
	document.getElementById('blattAnzeige').innerHTML = "Bl. " + blattAngabe;
	document.getElementById('lagenAnzeige').innerHTML = blatt.lagenNr + '. Lage ' + blatt.lagenName;
	document.getElementById('schreibAnzeige').innerHTML = blatt.schreiber;

	window.document.ImgLagensymbol.src = "../Lagensymbole/Einzelseite/" + blatt.lagenSymb + ".gif";
	document.naviHSR.selectBook.selectedIndex = blatt.aktBuch;
	document.images['imgFaksimilev'].src = "../Lagensymbole/Einzelseite/blind.gif";
	document.images['imgFaksimiler'].src = "../Lagensymbole/Einzelseite/blind.gif";

	const bildURL = zoom + "/" + blatt.img; 
	document.images['imgFaksimile'].src = bildURL;
}

function bildAnzeigeDSNeu() {

	const doublePage = blattInfoData.blattInfo.filter(b => b.dpSlide === dpSlide); // get the blätter of the double page
	const blankPage = "50/transparent.png"; // for hiding other images if nothing to display

	let versoPage;
	let rectoPage;
	let singlePage;

	let seitenAngabe;
	let konkordanz;
    let schreiber;
	let lagenSym;
	let lagenText;

	// set all the elements in the DOM
	if (doublePage.length === 2) {
    	versoPage = doublePage.find(p => p.blatt[p.blatt.length-1] === 'v');
        rectoPage = doublePage.find(p => p.blatt[p.blatt.length-1] === 'r');
    	seitenAngabe = 'Bl. ' + versoPage.blatt + ' / ' + rectoPage.blatt;
        konkordanz = versoPage.dpKonkordanz;
    	schreiber = versoPage.schreiber;
    	lagenSym = "../Lagensymbole/Doppelseite/" + versoPage.dpLagenSymb + ".gif";
    	lagenText = versoPage.dpLagenName;
    	buch = versoPage.aktBuch;

    } else { // we are in double page view but there is only one page to display as there is only one
    	singlePage = doublePage[0];
    console.log(singlePage);
    	seitenAngabe = 'Bl. ' + singlePage.blatt;
    	konkordanz = singlePage.dpKonkordanz;
    	schreiber = singlePage.schreiber;
        lagenSym = "../Lagensymbole/Doppelseite/" + singlePage.dpLagenSymb + ".gif";
    	lagenText = singlePage.lagenNr + '. Lage ' +singlePage.dpLagenName;
    	buch = singlePage.aktBuch;
    }

	document.getElementById('blattAnzeige').innerHTML = seitenAngabe;
	document.getElementById('versAnzeige').innerHTML = konkordanz;
	document.getElementById('schreibAnzeige').innerHTML = schreiber;
	window.document.ImgLagensymbol.src = lagenSym;
	document.getElementById('lagenAnzeige').innerHTML = lagenText;
	document.naviHSR.selectBook.selectedIndex = buch;

	if (singlePage) {
    	document.images['imgFaksimile'].src = "./50/" + singlePage.img;
    	document.images['imgFaksimilev'].src = blankPage;
		document.images['imgFaksimiler'].src = blankPage;
    } else {
    	document.images['imgFaksimile'].src = blankPage;
		document.images['imgFaksimilev'].src = "./50/" + versoPage.img;
		document.images['imgFaksimiler'].src = "./50/" + rectoPage.img;
    }
}

function zoom150() {
    zoom = 150;
	bildAnzeigeESNeu();
	enableManualZoom();	
}

function zoom100() {
    zoom = 100;
    bildAnzeigeESNeu();
	disableManualZoom();
}

function zoom50() {
	zoom = 50;
	bildAnzeigeDSNeu();
	disableManualZoom();
}

function disableManualZoom() {
	window.document.getElementById('zoomminus').style.visibility='hidden';
	window.document.getElementById('zoomplus').style.visibility='hidden';
	window.document.getElementById('zoomminusHell').style.visibility='visible';
	window.document.getElementById('zoomplusHell').style.visibility='visible';
}

function enableManualZoom() {
console.log('ena');
	window.document.getElementById('zoomminus').style.visibility='visible';
	window.document.getElementById('zoomplus').style.visibility='visible'; 
	window.document.getElementById('zoomminusHell').style.visibility='hidden';
	window.document.getElementById('zoomplusHell').style.visibility='hidden'; 
}

// change to another Handschrift via the select
function MM_jumpHandschrift(){
	
	if (document.naviHSR.selectHand.value != "javascript:") {

			var temp = document.naviHSR.selectHand.value;
			document.naviHSR.selectHand.selectedIndex = 0;
			window.location.href=temp
	}
}

// listen to enter strokes
function submitenter(myfield, e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (keycode == 13) {
        if (myfield.name == "Blatt") {
            checkSeitenEingabe();
            if (e.preventDefault) e.preventDefault(); 
            return false;
        }
    }
    return true;
}

// get the value of the blatt input and navigate to that blatt/ double page
function checkSeitenEingabe() {
	const seitenEingabe = document.naviHSR.Blatt.value;
	blattIdx = blattInfoData.blattInfo.findIndex(b => b.blatt.includes(seitenEingabe));
	if (blattIdx > -1 ) { // if something is found
       	// set the slides
       	currentSlide = blattIdx;
       	resetDPSlide();
       	if (zoom === 50) {
           	bildAnzeigeDSNeu();
        } else {
    		bildAnzeigeESNeu(); 
        }
    }
}

//Menu Abschnitte wählen
function MM_jumpMenuParts(){ 
	return;
}
			
function goNextBook () {
	return;
}

function goPrevBook () {
	return;
}
