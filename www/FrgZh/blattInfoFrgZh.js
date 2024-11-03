/* Blatt-Informationen für Einzelseiten. Beispiel:
 * - lagenNr: Nummer in Anführungszeichen ohne Punkt: "5". Wird in der Beschreibung unterhalb des Lagensymbols verwendet: "5. Lage, Sexternio"
 * - lagenSym: Der Name des Bildes des Lagensymbols ohne die Formatangabe/Endung. Bezieht die Bilder aus /hssfaks/Lagensymbole/Einzelseite/[lagenSym].gif
 * - lagenname: Der Fachbegiff der Lage wie "Quinternio". Wird in der Beschreibung unterhalb des Lagensymbols verwendet: "1. Lage, Quinternio"
 * 
 * Getestet werden kann , indem die Webseite komplett neu geladen wird (refresh) und die entsprechende Seite aufgerufen wird
*/
function blattInfo(blatt) {
	switch(blatt) {
		case "0v": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber=""; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "1r": lagenNr="2"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "1v": lagenNr="2"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "2r": lagenNr="2"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "2v": lagenNr="2"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "3r": lagenNr="2"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "3v": lagenNr="2"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "4r": lagenNr="2"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "4v": lagenNr="2"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "5r": lagenNr="6"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "5v": lagenNr="6"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "6r": lagenNr="6"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "6v": lagenNr="6"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "7r": lagenNr="9"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "7v": lagenNr="9"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "8r": lagenNr="9"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "8v": lagenNr="9"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "9r": lagenNr="9"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "9v": lagenNr="9"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "10r": lagenNr="9"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "10v": lagenNr="9"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "11r": lagenNr="9"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		case "11v": lagenNr="9"; lagenSymb="blind"; lagenName=""; konkordanz=""; schreiber="Schreiber 3"; aktBuch = 0; imgVer = false; imgKom = false; alt = ""; break;
		
		
		return;
	}
}