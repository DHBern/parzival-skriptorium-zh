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
		case "0": lagenNr="1"; lagenSymb="L4_w1_1_02r"; lagenName="Quaternio  – 1 Bl."; konkordanz="1.1–3.16"; aktBuch = 0; imgDescr = false; break; 
		case "1": lagenNr="1"; lagenSymb="L4_w1_1_02v03r"; lagenName="Quaternio  – 1 Bl."; konkordanz="3.17–8.18"; aktBuch = 0; imgDescr = false; break;
		case "2": lagenNr="1"; lagenSymb="L4_w1_1_03v04r"; lagenName="Quaternio  – 1 Bl."; konkordanz="8.19–13.20"; aktBuch = 0; imgDescr = false; break; 
		case "3": lagenNr="1"; lagenSymb="L4_w1_1_04v05r"; lagenName="Quaternio  – 1 Bl."; konkordanz="13.21–18.22"; aktBuch = 0; imgDescr = false; break;
		case "4": lagenNr="1"; lagenSymb="L4_w1_1_05v06r"; lagenName="Quaternio  – 1 Bl."; konkordanz="18.23–23.24"; aktBuch = 0; imgDescr = false; break; 
		case "5": lagenNr="1"; lagenSymb="L4_w1_1_06v07r"; lagenName="Quaternio  – 1 Bl."; konkordanz="23.25-28.26"; aktBuch = 0; imgDescr = false; break;
		case "6": lagenNr="1"; lagenSymb="L4_w1_1_07v08r"; lagenName="Quaternio  – 1 Bl."; konkordanz="28.27-33.28"; aktBuch = 0; imgDescr = false; break; 
		case "7": lagenNr="1/2"; lagenSymb="L4_w1_L6"; lagenName="Quaternio/Sexternio"; konkordanz="33.29-38.30"; aktBuch = 0; imgDescr = false; break;
		case "8": lagenNr="2"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="39.1-44.2"; aktBuch = 0; imgDescr = false; break; 
		case "9": lagenNr="2"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="44.3-49.4"; aktBuch = 0; imgDescr = false; break;
		case "10": lagenNr="2"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="49.5-54.6"; aktBuch = 0; imgDescr = false; break; 
		case "11": lagenNr="2"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="54.7-0-59.4"; aktBuch = 1; imgDescr = false; break;
		case "12": lagenNr="2"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="59.5-64.8"; aktBuch = 1; imgDescr = false; break; 
		case "13": lagenNr="2"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="64.9-69.10"; aktBuch = 1; imgDescr = false; break;
		case "14": lagenNr="2"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="69.11-74.12"; aktBuch = 1; imgDescr = false; break; 
		case "15": lagenNr="2"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="74.13-79.28"; aktBuch = 1; imgDescr = false; break;
		case "16": lagenNr="2"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="79.29-84.30"; aktBuch = 1; imgDescr = false; break; 
		case "17": lagenNr="2"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="85.1-90.4"; aktBuch = 1; imgDescr = false; break;
		case "18": lagenNr="2"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="90.5-95.6"; aktBuch = 1; imgDescr = false; break; 
		case "19": lagenNr="2/3"; lagenSymb="L6_L6"; lagenName="Sexternio"; konkordanz="95.7-100.8"; aktBuch = 1; imgDescr = false; break;
		case "20": lagenNr="3"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="100.9-105.10"; aktBuch = 1; imgDescr = false; break; 
		case "21": lagenNr="3"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="105.11-110.12"; aktBuch = 1; imgDescr = false; break;
		case "22": lagenNr="3"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="110.13-115.14"; aktBuch = 1; imgDescr = false; break; 
		case "23": lagenNr="3"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="115.15-120.12"; aktBuch = 2; imgDescr = false; break;
		case "24": lagenNr="3"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="120.13-125.14"; aktBuch = 2; imgDescr = false; break; 
		case "25": lagenNr="3"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="125.15-130.16"; aktBuch = 2; imgDescr = false; break;
		case "26": lagenNr="3"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="130.17-135.18"; aktBuch = 2; imgDescr = false; break; 
		case "27": lagenNr="3"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="135.19-140.22"; aktBuch = 2; imgDescr = false; break;
		case "28": lagenNr="3"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="140.23-145.24"; aktBuch = 2; imgDescr = false; break; 
		case "29": lagenNr="3"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="145.25-150.26"; aktBuch = 2; imgDescr = false; break;
		case "30": lagenNr="3"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="150.27-155.24"; aktBuch = 2; imgDescr = false; break; 
		case "31": lagenNr="3/4"; lagenSymb="L6_L1"; lagenName="Sext./Unio"; konkordanz="155.25-160.10"; aktBuch = 2; imgDescr = false; break;
		case "32": lagenNr="4"; lagenSymb="L1_01v02r"; lagenName="Unio"; konkordanz="160.11-165.12"; aktBuch = 2; imgDescr = false; break; 
		case "33": lagenNr="4/5"; lagenSymb="L1_L5"; lagenName="Unio/Quint."; konkordanz="165.13-0-170.14"; aktBuch = 2; imgDescr = false; break;
		case "34": lagenNr="5"; lagenSymb="L5_01v02r"; lagenName="Quinternio"; konkordanz="170.15-175.16"; aktBuch = 2; imgDescr = false; break; 
		case "35": lagenNr="5"; lagenSymb="L5_02v03r"; lagenName="Quinternio"; konkordanz="175.17-0-180.18"; aktBuch = 3; imgDescr = false; break;
		case "36": lagenNr="5"; lagenSymb="L5_03v04r"; lagenName="Quinternio"; konkordanz="180.19-185.20"; aktBuch = 3; imgDescr = false; break; 
		case "37": lagenNr="5"; lagenSymb="L5_04v05r"; lagenName="Quinternio"; konkordanz="185.21-190.20"; aktBuch = 3; imgDescr = false; break;
		case "38": lagenNr="5"; lagenSymb="L5_05v06r"; lagenName="Quinternio"; konkordanz="190.21-195.22"; aktBuch = 3; imgDescr = false; break; 
		case "39": lagenNr="5"; lagenSymb="L5_06v07r"; lagenName="Quinternio"; konkordanz="195.23-200.24"; aktBuch = 3; imgDescr = false; break;
		case "40": lagenNr="5"; lagenSymb="L5_07v08r"; lagenName="Quinternio"; konkordanz="200.25-205.26"; aktBuch = 3; imgDescr = false; break; 
		case "41": lagenNr="5"; lagenSymb="L5_08v09r"; lagenName="Quinternio"; konkordanz="205.27-210.28"; aktBuch = 3; imgDescr = false; break;
		case "42": lagenNr="5"; lagenSymb="L5_09v10r"; lagenName="Quinternio"; konkordanz="210.29-216.2"; aktBuch = 3; imgDescr = false; break; 
		case "43": lagenNr="5/6"; lagenSymb="L5_L6"; lagenName="Quint./Sext."; konkordanz="216.3-221.4"; aktBuch = 3; imgDescr = false; break;
		case "44": lagenNr="6"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="221.5-226.1"; aktBuch = 4; imgDescr = false; break; 
		case "45": lagenNr="6"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="226.3-231.6"; aktBuch = 4; imgDescr = false; break;
		case "46": lagenNr="6"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="231.7-236.10"; aktBuch = 4; imgDescr = false; break; 
		case "47": lagenNr="6"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="236.11-241.11"; aktBuch = 4; imgDescr = false; break;
		case "48": lagenNr="6"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="241.12-246.14"; aktBuch = 4; imgDescr = false; break; 
		case "49": lagenNr="6"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="246.15-251.18"; aktBuch = 4; imgDescr = false; break;
		case "50": lagenNr="6"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="251.19-256.20"; aktBuch = 4; imgDescr = false; break; 
		case "51": lagenNr="6"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="256.21-261.20"; aktBuch = 4; imgDescr = false; break;
		case "52": lagenNr="6"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="261.21-266.22"; aktBuch = 4; imgDescr = false; break; 
		case "53": lagenNr="6"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="266.23-271.24"; aktBuch = 4; imgDescr = false; break;
		case "54": lagenNr="6"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="271.25-276.26"; aktBuch = 4; imgDescr = false; break; 
		case "55": lagenNr="6/7"; lagenSymb="L6_L6"; lagenName="Sext./Sext"; konkordanz="276.27-281.30"; aktBuch = 5; imgDescr = false; break;
		case "56": lagenNr="7"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="282.1-287.2"; aktBuch = 5; imgDescr = false; break; 
		case "57": lagenNr="7"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="287.3-292.8"; aktBuch = 5; imgDescr = false; break;
		case "58": lagenNr="7"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="292.9-297.14"; aktBuch = 5; imgDescr = false; break; 
		case "59": lagenNr="7"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="297.15-302.16"; aktBuch = 5; imgDescr = false; break;
		case "60": lagenNr="7"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="302.17-307.19"; aktBuch = 5; imgDescr = false; break; 
		case "61": lagenNr="7"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="307.20-312.20"; aktBuch = 5; imgDescr = false; break;
		case "62": lagenNr="7"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="312.21-317.23"; aktBuch = 5; imgDescr = false; break; 
		case "63": lagenNr="7"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="317.24-322.30"; aktBuch = 5; imgDescr = false; break;
		case "64": lagenNr="7"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="323.1-328.4"; aktBuch = 5; imgDescr = false; break; 
		case "65": lagenNr="7"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="328.5-333.8"; aktBuch = 5; imgDescr = false; break;
		case "66": lagenNr="7"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="333.9-338.8"; aktBuch = 6; imgDescr = false; break; 
		case "67": lagenNr="7/8"; lagenSymb="L6_L6"; lagenName="Sext./Sext."; konkordanz="338.9-343.10"; aktBuch = 6; imgDescr = false; break;
		case "68": lagenNr="8"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="343.11-348.12"; aktBuch = 6; imgDescr = false; break; 
		case "69": lagenNr="8"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="348.13-353.14"; aktBuch = 6; imgDescr = false; break;
		case "70": lagenNr="8"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="353.15-358.20"; aktBuch = 6; imgDescr = false; break; 
		case "71": lagenNr="8"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="358.21-363.24"; aktBuch = 6; imgDescr = false; break;
		case "72": lagenNr="8"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="363.25-368.28"; aktBuch = 6; imgDescr = false; break; 
		case "73": lagenNr="8"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="368.29-374.2"; aktBuch = 6; imgDescr = false; break;
		case "74": lagenNr="8"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="374.3-379.4"; aktBuch = 6; imgDescr = false; break; 
		case "75": lagenNr="8"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="379.5-384.6"; aktBuch = 6; imgDescr = false; break;
		case "76": lagenNr="8"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="384.7-389.8"; aktBuch = 6; imgDescr = false; break; 
		case "77": lagenNr="8"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="389.9-394.10"; aktBuch = 6; imgDescr = false; break;
		case "78": lagenNr="8"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="394.11-399.5"; aktBuch = 7; imgDescr = false; break; 
		case "79": lagenNr="8/9"; lagenSymb="L6_L5"; lagenName="Sext./Quint."; konkordanz="399.6-404.6"; aktBuch = 7; imgDescr = false; break;
		case "80": lagenNr="9"; lagenSymb="L5_01v02r"; lagenName="Quinternio"; konkordanz="404.7-409.8"; aktBuch = 7; imgDescr = false; break; 
		case "81": lagenNr="9"; lagenSymb="L5_02v03r"; lagenName="Quinternio"; konkordanz="409.9-414.10"; aktBuch = 7; imgDescr = false; break;
		case "82": lagenNr="9"; lagenSymb="L5_03v04r"; lagenName="Quinternio"; konkordanz="414.11-419.12"; aktBuch = 7; imgDescr = false; break; 
		case "83": lagenNr="9"; lagenSymb="L5_04v05r"; lagenName="Quinternio"; konkordanz="419.13-424.14"; aktBuch = 7; imgDescr = false; break;
		case "84": lagenNr="9"; lagenSymb="L5_05v06r"; lagenName="Quinternio"; konkordanz="424.15-429.16"; aktBuch = 7; imgDescr = false; break; 
		case "85": lagenNr="9"; lagenSymb="L5_06v07r"; lagenName="Quinternio"; konkordanz="429.17-434.14"; aktBuch = 8; imgDescr = false; break;
		case "86": lagenNr="9"; lagenSymb="L5_07v08r"; lagenName="Quinternio"; konkordanz="434.15-439.16"; aktBuch = 8; imgDescr = false; break; 
		case "87": lagenNr="9"; lagenSymb="L5_08v09r"; lagenName="Quinternio"; konkordanz="439.17-444.14"; aktBuch = 8; imgDescr = false; break;
		case "88": lagenNr="9"; lagenSymb="L5_09v10r"; lagenName="Quinternio"; konkordanz="444.15-449.12"; aktBuch = 8; imgDescr = false; break; 
		case "89": lagenNr="9/10"; lagenSymb="L5_L6"; lagenName="Quint./Sext."; konkordanz="449.13-454.4"; aktBuch = 8; imgDescr = false; break;
		case "90": lagenNr="10"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="454.5-459.6"; aktBuch = 8; imgDescr = false; break; 
		case "91": lagenNr="10"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="459.7-464.8"; aktBuch = 8; imgDescr = false; break;
		case "92": lagenNr="10"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="464.9-469.10"; aktBuch = 8; imgDescr = false; break; 
		case "93": lagenNr="10"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="469.11-474.12"; aktBuch = 8; imgDescr = false; break;
		case "94": lagenNr="10"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="474.13-479.14"; aktBuch = 8; imgDescr = false; break; 
		case "95": lagenNr="10"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="479.15-484.16"; aktBuch = 8; imgDescr = false; break;
		case "96": lagenNr="10"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="484.17-489.18"; aktBuch = 8; imgDescr = false; break; 
		case "97": lagenNr="10"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="489.19-494.20"; aktBuch = 8; imgDescr = false; break;
		case "98": lagenNr="10"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="494.21-499.28"; aktBuch = 8; imgDescr = false; break; 
		case "99": lagenNr="10"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="499.29-504.26"; aktBuch = 9; imgDescr = false; break;
		case "100": lagenNr="10"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="504.27-509.28"; aktBuch = 9; imgDescr = false; break; 
		case "101": lagenNr="10/11"; lagenSymb="L6_L6"; lagenName="Sext./Sext."; konkordanz="509.29-514.30"; aktBuch = 9; imgDescr = false; break;
		case "102": lagenNr="11"; lagenSymb="L6_01v02r"; lagenName="Sexternio"; konkordanz="515.1-520.6"; aktBuch = 9; imgDescr = false; break; 
		case "103": lagenNr="11"; lagenSymb="L6_02v03r"; lagenName="Sexternio"; konkordanz="520.7-525.3"; aktBuch = 9; imgDescr = false; break;
		case "104": lagenNr="11"; lagenSymb="L6_03v04r"; lagenName="Sexternio"; konkordanz="525.4-530.7"; aktBuch = 9; imgDescr = false; break; 
		case "105": lagenNr="11"; lagenSymb="L6_04v05r"; lagenName="Sexternio"; konkordanz="530.8-535.10"; aktBuch = 9; imgDescr = false; break;
		case "106": lagenNr="11"; lagenSymb="L6_05v06r"; lagenName="Sexternio"; konkordanz="535.11-540.4"; aktBuch = 9; imgDescr = false; break; 
		case "107": lagenNr="11"; lagenSymb="L6_06v07r"; lagenName="Sexternio"; konkordanz="540.5-544.29"; aktBuch = 9; imgDescr = false; break;
		case "108": lagenNr="11"; lagenSymb="L6_07v08r"; lagenName="Sexternio"; konkordanz="544.30-549.28"; aktBuch = 9; imgDescr = false; break; 
		case "109": lagenNr="11"; lagenSymb="L6_08v09r"; lagenName="Sexternio"; konkordanz="549.29-554.30"; aktBuch = 10; imgDescr = false; break;
		case "110": lagenNr="11"; lagenSymb="L6_09v10r"; lagenName="Sexternio"; konkordanz="555.1-560.4"; aktBuch = 10; imgDescr = false; break; 
		case "111": lagenNr="11"; lagenSymb="L6_10v11r"; lagenName="Sexternio"; konkordanz="560.5-565.6"; aktBuch = 10; imgDescr = false; break;
		case "112": lagenNr="11"; lagenSymb="L6_11v12r"; lagenName="Sexternio"; konkordanz="565.7-570.14"; aktBuch = 10; imgDescr = false; break; 
		case "113": lagenNr="11"; lagenSymb="L6_12v"; lagenName="Sexternio"; konkordanz="570.15-572.30"; aktBuch = 10; imgDescr = false; break;
		case "114": lagenNr=""; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 10; imgDescr = false; break;
		return;
	}
}