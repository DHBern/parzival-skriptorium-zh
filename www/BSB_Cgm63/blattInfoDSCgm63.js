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
		case "0": lagenNr="1"; lagenSymb="L4_01r"; lagenName="Quaternio"; konkordanz="1-32"; aktBuch = 0; imgDescr = false; break; 
		case "1": lagenNr="1"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="33-181"; aktBuch = 0; imgDescr = false; break; 
		case "2": lagenNr="1"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="182-333"; aktBuch = 0; imgDescr = false; break; 
		case "3": lagenNr="1"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="334-485"; aktBuch = 0; imgDescr = false; break; 
		case "4": lagenNr="1"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="486-560"; aktBuch = 0; imgDescr = false; break; 
		case "5": lagenNr="1"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="561-713"; aktBuch = 0; imgDescr = false; break; 
		case "6": lagenNr="1"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="714-789"; aktBuch = 0; imgDescr = false; break; 
		case "7": lagenNr="1"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="790-943"; aktBuch = 0; imgDescr = false; break; 
		case "8": lagenNr="1/2"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="944-1095"; aktBuch = 0; imgDescr = false; break; 
		case "9": lagenNr="2"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="1096-1250"; aktBuch = 0; imgDescr = false; break; 
		case "10": lagenNr="2"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="1251-1402"; aktBuch = 0; imgDescr = false; break; 
		case "11": lagenNr="2"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="1403-1478"; aktBuch = 0; imgDescr = false; break; 
		case "12": lagenNr="2"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="1479-1630"; aktBuch = 0; imgDescr = false; break; 
		case "13": lagenNr="2"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="1631-1782"; aktBuch = 0; imgDescr = false; break; 
		case "14": lagenNr="2"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="1783-1934"; aktBuch = 0; imgDescr = false; break; 
		case "15": lagenNr="2"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="1935-2010"; aktBuch = 0; imgDescr = false; break; 
		case "16": lagenNr="2/3"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="2011-2159"; aktBuch = 0; imgDescr = false; break; 
		case "17": lagenNr="3"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="2160-2312"; aktBuch = 0; imgDescr = false; break; 
		case "18": lagenNr="3"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="2313-2464"; aktBuch = 0; imgDescr = false; break; 
		case "19": lagenNr="3"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="2465-2540"; aktBuch = 0; imgDescr = false; break; 
		case "20": lagenNr="3"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="2541-2694"; aktBuch = 0; imgDescr = false; break; 
		case "21": lagenNr="3"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="2695-2846"; aktBuch = 0; imgDescr = false; break; 
		case "22": lagenNr="3"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="2847-2998"; aktBuch = 0; imgDescr = false; break; 
		case "23": lagenNr="3"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="2999-3150"; aktBuch = 0; imgDescr = false; break; 
		case "24": lagenNr="3/4"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="3151-3226"; aktBuch = 0; imgDescr = false; break; 
		case "25": lagenNr="4"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="3227-3376"; aktBuch = 0; imgDescr = false; break; 
		case "26": lagenNr="4"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="3377-3528"; aktBuch = 0; imgDescr = false; break; 
		case "27": lagenNr="4"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="3529-3604"; aktBuch = 0; imgDescr = false; break; 
		case "28": lagenNr="4"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="3605-3756"; aktBuch = 0; imgDescr = false; break; 
		case "29": lagenNr="4"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="3757-3832"; aktBuch = 0; imgDescr = false; break; 
		case "30": lagenNr="4"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="3833-3984"; aktBuch = 0; imgDescr = false; break; 
		case "31": lagenNr="4"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="3985-4136"; aktBuch = 0; imgDescr = false; break; 
		case "32": lagenNr="4/5"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="4137-4288"; aktBuch = 0; imgDescr = false; break; 
		case "33": lagenNr="5"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="4289-4440"; aktBuch = 0; imgDescr = false; break; 
		case "34": lagenNr="5"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="4441-4555"; aktBuch = 0; imgDescr = false; break; 
		case "35": lagenNr="5"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="4556-4668"; aktBuch = 0; imgDescr = false; break; 
		case "36": lagenNr="5"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="4669-4820"; aktBuch = 0; imgDescr = false; break; 
		case "37": lagenNr="5"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="4821-4972"; aktBuch = 0; imgDescr = false; break; 
		case "38": lagenNr="5"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="4973-5048"; aktBuch = 0; imgDescr = false; break; 
		case "39": lagenNr="5"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="5049-5200"; aktBuch = 0; imgDescr = false; break; 
		case "40": lagenNr="5/6"; lagenSymb="L4_L4_w1_2"; lagenName="Quat./Quat."; konkordanz="5201-5352"; aktBuch = 0; imgDescr = false; break; 
		case "41": lagenNr="6"; lagenSymb="L4_w1_2_01v03r"; lagenName="Quaternio – 1 Bl."; konkordanz="5353-5574"; aktBuch = 0; imgDescr = false; break; 
		case "42": lagenNr="6"; lagenSymb="L4_w1_2_03v04r"; lagenName="Quaternio – 1 Bl."; konkordanz="5575-5726"; aktBuch = 0; imgDescr = false; break; 
		case "43": lagenNr="6"; lagenSymb="L4_w1_2_04v05r"; lagenName="Quaternio – 1 Bl."; konkordanz="5727-5876"; aktBuch = 0; imgDescr = false; break; 
		case "44": lagenNr="6"; lagenSymb="L4_w1_2_05v06r"; lagenName="Quaternio – 1 Bl."; konkordanz="5877-5952"; aktBuch = 0; imgDescr = false; break; 
		case "45": lagenNr="6"; lagenSymb="L4_w1_2_06v07r"; lagenName="Quaternio – 1 Bl."; konkordanz="5953-6104"; aktBuch = 0; imgDescr = false; break; 
		case "46": lagenNr="6"; lagenSymb="L4_w1_2_07v08r"; lagenName="Quaternio – 1 Bl."; konkordanz="6105-6256"; aktBuch = 0; imgDescr = false; break; 
		case "47": lagenNr="6/7"; lagenSymb="L4_w1_2_L4"; lagenName="Quat./Quat."; konkordanz="6257-6408"; aktBuch = 0; imgDescr = false; break; 
		case "48": lagenNr="7"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="6409-6484"; aktBuch = 0; imgDescr = false; break; 
		case "49": lagenNr="7"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="6485-6636"; aktBuch = 0; imgDescr = false; break; 
		case "50": lagenNr="7"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="6637-6788"; aktBuch = 0; imgDescr = false; break; 
		case "51": lagenNr="7"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="6789-6940"; aktBuch = 0; imgDescr = false; break; 
		case "52": lagenNr="7"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="6941-7017"; aktBuch = 0; imgDescr = false; break; 
		case "53": lagenNr="7"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="7018-7170"; aktBuch = 0; imgDescr = false; break; 
		case "54": lagenNr="7"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="7171-7322"; aktBuch = 0; imgDescr = false; break; 
		case "55": lagenNr="7/8"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="7323-7474"; aktBuch = 0; imgDescr = false; break; 
		case "56": lagenNr="8"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="7475-7550"; aktBuch = 0; imgDescr = false; break; 
		case "57": lagenNr="8"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="7551-7702"; aktBuch = 0; imgDescr = false; break; 
		case "58": lagenNr="8"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="7703-7854"; aktBuch = 0; imgDescr = false; break; 
		case "59": lagenNr="8"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="7855-8006"; aktBuch = 0; imgDescr = false; break; 
		case "60": lagenNr="8"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="8007-8082"; aktBuch = 0; imgDescr = false; break; 
		case "61": lagenNr="8"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="8083-8238"; aktBuch = 0; imgDescr = false; break; 
		case "62": lagenNr="8"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="8239-8390"; aktBuch = 0; imgDescr = false; break; 
		case "63": lagenNr="8/9"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="8391-8542"; aktBuch = 0; imgDescr = false; break; 
		case "64": lagenNr="9"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="8543-8618"; aktBuch = 0; imgDescr = false; break; 
		case "65": lagenNr="9"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="8619-8773"; aktBuch = 0; imgDescr = false; break; 
		case "66": lagenNr="9"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="8774-8926"; aktBuch = 0; imgDescr = false; break; 
		case "67": lagenNr="9"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="8927-9002"; aktBuch = 0; imgDescr = false; break; 
		case "68": lagenNr="9"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="9003-9154"; aktBuch = 0; imgDescr = false; break; 
		case "69": lagenNr="9"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="9155-9306"; aktBuch = 0; imgDescr = false; break; 
		case "70": lagenNr="9"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="9307-9458"; aktBuch = 0; imgDescr = false; break; 
		case "71": lagenNr="9/10"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="9459-9610"; aktBuch = 0; imgDescr = false; break; 
		case "72": lagenNr="10"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="9611-9686"; aktBuch = 0; imgDescr = false; break; 
		case "73": lagenNr="10"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="9687-9838"; aktBuch = 0; imgDescr = false; break; 
		case "74": lagenNr="10"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="9839-9990"; aktBuch = 0; imgDescr = false; break; 
		case "75": lagenNr="10"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="9991-10142"; aktBuch = 0; imgDescr = false; break; 
		case "76": lagenNr="10"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="10143-10218"; aktBuch = 0; imgDescr = false; break; 
		case "77": lagenNr="10"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="10219-10370"; aktBuch = 0; imgDescr = false; break; 
		case "78": lagenNr="10"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="10371-10522"; aktBuch = 0; imgDescr = false; break; 
		case "79": lagenNr="10/11"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="10523-10674"; aktBuch = 0; imgDescr = false; break; 
		case "80": lagenNr="11"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="10675-10750"; aktBuch = 0; imgDescr = false; break; 
		case "81": lagenNr="11"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="10751-10902"; aktBuch = 0; imgDescr = false; break; 
		case "82": lagenNr="11"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="10903-11054"; aktBuch = 0; imgDescr = false; break; 
		case "83": lagenNr="11"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="11055-11130"; aktBuch = 0; imgDescr = false; break; 
		case "84": lagenNr="11"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="11131-11282"; aktBuch = 0; imgDescr = false; break; 
		case "85": lagenNr="11"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="11283-11434"; aktBuch = 0; imgDescr = false; break; 
		case "86": lagenNr="11"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="11435-11510"; aktBuch = 0; imgDescr = false; break; 
		case "87": lagenNr="11/12"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="11511-11662"; aktBuch = 0; imgDescr = false; break; 
		case "88": lagenNr="12"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="11663-11816"; aktBuch = 0; imgDescr = false; break; 
		case "89": lagenNr="12"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="11817-11968"; aktBuch = 0; imgDescr = false; break; 
		case "90": lagenNr="12"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="11969-12120"; aktBuch = 0; imgDescr = false; break; 
		case "91": lagenNr="12"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="12121-12195"; aktBuch = 0; imgDescr = false; break; 
		case "92": lagenNr="12"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="12196-12348"; aktBuch = 0; imgDescr = false; break; 
		case "93": lagenNr="12"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="12349-12500"; aktBuch = 0; imgDescr = false; break; 
		case "94": lagenNr="12"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="12501-12652"; aktBuch = 0; imgDescr = false; break; 
		case "95": lagenNr="12/13"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="12653-12804"; aktBuch = 0; imgDescr = false; break; 
		case "96": lagenNr="13"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="12805-12880"; aktBuch = 0; imgDescr = false; break; 
		case "97": lagenNr="13"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="12881-13032"; aktBuch = 0; imgDescr = false; break; 
		case "98": lagenNr="13"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="13033-13184"; aktBuch = 0; imgDescr = false; break; 
		case "99": lagenNr="13"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="13185-13336"; aktBuch = 0; imgDescr = false; break; 
		case "100": lagenNr="13"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="13337-13412"; aktBuch = 0; imgDescr = false; break; 
		case "101": lagenNr="13"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="13413-13564"; aktBuch = 0; imgDescr = false; break; 
		case "102": lagenNr="13"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="13565-13716"; aktBuch = 0; imgDescr = false; break; 
		case "103": lagenNr="13/14"; lagenSymb="L4_L4"; lagenName="Quat./Quat."; konkordanz="13717-13868"; aktBuch = 0; imgDescr = false; break; 
		case "104": lagenNr="14"; lagenSymb="L4_01v02r"; lagenName="Quaternio"; konkordanz="13869-13944"; aktBuch = 0; imgDescr = false; break; 
		case "105": lagenNr="14"; lagenSymb="L4_02v03r"; lagenName="Quaternio"; konkordanz="13945-14096"; aktBuch = 0; imgDescr = false; break; 
		case "106": lagenNr="14"; lagenSymb="L4_03v04r"; lagenName="Quaternio"; konkordanz="14097-15248"; aktBuch = 0; imgDescr = false; break; 
		case "107": lagenNr="14"; lagenSymb="L4_04v05r"; lagenName="Quaternio"; konkordanz="15249-14324"; aktBuch = 0; imgDescr = false; break; 
		case "108": lagenNr="14"; lagenSymb="L4_05v06r"; lagenName="Quaternio"; konkordanz="14325-14478"; aktBuch = 0; imgDescr = false; break; 
		case "109": lagenNr="14"; lagenSymb="L4_06v07r"; lagenName="Quaternio"; konkordanz="14479-14630"; aktBuch = 0; imgDescr = false; break; 
		case "110": lagenNr="14"; lagenSymb="L4_07v08r"; lagenName="Quaternio"; konkordanz="14631-14782"; aktBuch = 0; imgDescr = false; break; 
		case "111": lagenNr="14"; lagenSymb="L4_08v"; lagenName="Quaternio"; konkordanz="14783-14857"; aktBuch = 0; imgDescr = false; break; 
		case "112": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "113": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "114": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "115": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 
		case "116": lagenNr="1"; lagenSymb="blind"; lagenName=""; konkordanz=""; aktBuch = 0; imgDescr = false; break; 

		return;
	}
}