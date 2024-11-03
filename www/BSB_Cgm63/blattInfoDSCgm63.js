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
		case "-2": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "-1": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "0": lagenNr="1"; lagenSymb="L4_01r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "1": lagenNr="1"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "2": lagenNr="1"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "3": lagenNr="1"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "4": lagenNr="1"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "5": lagenNr="1"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "6": lagenNr="1"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "7": lagenNr="1"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "8": lagenNr="1/2"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "9": lagenNr="2"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "10": lagenNr="2"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "11": lagenNr="2"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "12": lagenNr="2"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "13": lagenNr="2"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "14": lagenNr="2"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "15": lagenNr="2"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "16": lagenNr="2/3"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "17": lagenNr="3"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "18": lagenNr="3"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "19": lagenNr="3"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "20": lagenNr="3"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "21": lagenNr="3"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "22": lagenNr="3"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "23": lagenNr="3"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "24": lagenNr="3/4"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "25": lagenNr="4"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "26": lagenNr="4"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "27": lagenNr="4"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "28": lagenNr="4"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "29": lagenNr="4"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "30": lagenNr="4"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "31": lagenNr="4"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "32": lagenNr="4/5"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "33": lagenNr="5"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "34": lagenNr="5"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "35": lagenNr="5"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "36": lagenNr="5"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "37": lagenNr="5"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "38": lagenNr="5"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "39": lagenNr="5"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "40": lagenNr="5/6"; lagenSymb="L4_L4_w1_2"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "41": lagenNr="6"; lagenSymb="L4_w1_2_01v03r"; lagenName="Quaternio – 1 Bl."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "42": lagenNr="6"; lagenSymb="L4_w1_2_03v04r"; lagenName="Quaternio – 1 Bl."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "43": lagenNr="6"; lagenSymb="L4_w1_2_04v05r"; lagenName="Quaternio – 1 Bl."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "44": lagenNr="6"; lagenSymb="L4_w1_2_05v06r"; lagenName="Quaternio – 1 Bl."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "45": lagenNr="6"; lagenSymb="L4_w1_2_06v07r"; lagenName="Quaternio – 1 Bl."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "46": lagenNr="6"; lagenSymb="L4_w1_2_07v08r"; lagenName="Quaternio – 1 Bl."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "47": lagenNr="6/7"; lagenSymb="L4_w1_2_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "48": lagenNr="7"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "49": lagenNr="7"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "50": lagenNr="7"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "51": lagenNr="7"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "52": lagenNr="7"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "53": lagenNr="7"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "54": lagenNr="7"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "55": lagenNr="7/8"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "56": lagenNr="8"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "57": lagenNr="8"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "58": lagenNr="8"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "59": lagenNr="8"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "60": lagenNr="8"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "61": lagenNr="8"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "62": lagenNr="8"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "63": lagenNr="8/9"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "64": lagenNr="9"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "65": lagenNr="9"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "66": lagenNr="9"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "67": lagenNr="9"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "68": lagenNr="9"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "69": lagenNr="9"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "70": lagenNr="9"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "71": lagenNr="9/10"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "72": lagenNr="10"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "73": lagenNr="10"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "74": lagenNr="10"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "75": lagenNr="10"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "76": lagenNr="10"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "77": lagenNr="10"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "78": lagenNr="10"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "79": lagenNr="10/11"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "80": lagenNr="11"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "81": lagenNr="11"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "82": lagenNr="11"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "83": lagenNr="11"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "84": lagenNr="11"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "85": lagenNr="11"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "86": lagenNr="11"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "87": lagenNr="11/12"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "88": lagenNr="12"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "89": lagenNr="12"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "90": lagenNr="12"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "91": lagenNr="12"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "92": lagenNr="12"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "93": lagenNr="12"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "94": lagenNr="12"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "95": lagenNr="12/13"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "96": lagenNr="13"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "97": lagenNr="13"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "98": lagenNr="13"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "99": lagenNr="13"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "100": lagenNr="13"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "101": lagenNr="13"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "102": lagenNr="13"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "103": lagenNr="13/14"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "104": lagenNr="14"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "105": lagenNr="14"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "106": lagenNr="14"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "107": lagenNr="14"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "108": lagenNr="14"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "109": lagenNr="14"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "110": lagenNr="14"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "111": lagenNr="14"; lagenSymb="L4_08v"; lagenName="Quaternio"; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "112": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "113": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "114": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "115": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "116": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 

		return;
	}
}