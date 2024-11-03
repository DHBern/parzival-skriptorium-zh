/* Blattinformationen zu Doppelseiten
 * Hier muss etwas gerechnet werden: Jede Zeile entspricht einer Doppelseite, d.h. bei Zeile
 * <case "3": lagenNr=""; ...> befinden wir uns auf der dritten Doppelseite gerechnet von der ersten dargestellten Bild
 * Beispiel:
 * 		case "9": lagenNr="1/2"; lagenSymb="L5_L6"; lagenName="Quint./Sext."; konkordanz="12r–96v"; aktBuch = 1; imgDescr = false; break;
 * resultiert in:
 * 
 * Lagenbeschreibung: "1/2. Lage, Quint./Sext."
*/

function blattInfoDS(blatt) {
	switch(blatt) {
		case "0": lagenNr="2"; lagenSymb="blind"; lagenName="Quinternio (?)"; konkordanz=""; schreiber=""; aktBuch = 0; imgDescr = false; break; 
		case "1": lagenNr="2"; lagenSymb="L5_FrgZh_L2_01r"; lagenName="Quinternio (?)"; konkordanz="Tristan 2209–2346"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "2": lagenNr="2"; lagenSymb="L5_FrgZh_L2_01v02r"; lagenName="Quinternio (?)"; konkordanz="Tristan 2347–2484"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "3": lagenNr="2"; lagenSymb="L5_FrgZh_L2_03v04r"; lagenName="Quinternio (?)"; konkordanz="Tristan 3037–3176"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "4": lagenNr="2"; lagenSymb="L5_FrgZh_L2_05v06r"; lagenName="Quinternio (?)"; konkordanz="Tristan 3177–3314, 3867–4004"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "5": lagenNr="2"; lagenSymb="L5_FrgZh_L2_07v08r"; lagenName="Quinternio (?)"; konkordanz="Tristan 4005–4142"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "6": lagenNr="2"; lagenSymb="L5_FrgZh_L2_09v10r"; lagenName="Quinternio (?)"; konkordanz="Tristan 4696–4834"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "7": lagenNr="2"; lagenSymb="L5_FrgZh_L2_10v"; lagenName="Quinternio (?)"; konkordanz="Tristan 4835–4972"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "8": lagenNr="6"; lagenSymb="L5_FrgZh_L6_04v05r"; lagenName="Quinternio (?)"; konkordanz="Tristan 14369–14507"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "9": lagenNr="6"; lagenSymb="L5_FrgZh_L6_05v06r"; lagenName="Quinternio (?)"; konkordanz="Tristan 14508–14648, 14649–14786"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "10": lagenNr="6"; lagenSymb="L5_FrgZh_L6_06v07r"; lagenName="Quinternio (?)"; konkordanz="Tristan 14787–14924"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "11": lagenNr="9"; lagenSymb="L2_01r"; lagenName="Binio (?)"; konkordanz="Parzival 1.1–5.18"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "12": lagenNr="9"; lagenSymb="L2_01v02r"; lagenName="Binio (?)"; konkordanz="Parzival 5.21–10.7, 10.8–14.26"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "13": lagenNr="9"; lagenSymb="L2_02v03r"; lagenName="Binio (?)"; konkordanz="Parzival 14.27–19.16, 19.17–24.6"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break; 
		case "14": lagenNr="9"; lagenSymb="L2_03v04r"; lagenName="Binio (?)"; konkordanz="Parzival 24.7–28.24, 28.27–33.12"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break;
		case "15": lagenNr="9"; lagenSymb="L2_04v"; lagenName="Binio (?)"; konkordanz="Parzival 33.23–37.30"; schreiber="Schreiber 3"; aktBuch = 0; imgDescr = false; break;	
		return;
	}
}