function check(){
	
	var input = "";
	input = document.getElementById("normalOrMorse").value;
	input = input.toUpperCase();
	var i, n = 0, j;
	var characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

	if (input === ""){
		
		var error = document.getElementById("error");
		error.innerHTML = "Please Enter A Message";
		error.style.background = "red";
		error.style.color = "white";
		
		
	}
	
	else{
		
		var error = document.getElementById("error");
		error.innerHTML = "";
		error.style.background = "#f5f5f5";
		error.style.color = "#f5f5f5";
		for (i = 0; i < input.length; i++){
			
			for (j = 0; j < characters.length; j++){
				
				if (input[i] === characters[j]){
				
					++n;
				
					break;
				
				}
			
			}
			
		}
		
		if (n === 0){
			
			decrypt();
			
		}
		else{
			
			encrypt();
			
		}
	
	}
}

function encrypt(){
	
	var normal = document.getElementById("normalOrMorse").value;
	var i;
	var rslt = "";
	
	normal = normal.toUpperCase();
	
	for (i = 0; i < normal.length; i++){
		
		switch(normal[i]){
			
			case 'A' : rslt += " .-"; break;
			case 'B' : rslt += " -..."; break;
			case 'C' : rslt += " -.-."; break;
			case 'D' : rslt += " -.."; break;
			case 'E' : rslt += " ."; break;
			case 'F' : rslt += " ..-."; break;
			case 'G' : rslt += " --."; break;
			case 'H' : rslt += " ...."; break;
			case 'I' : rslt += " .."; break;
			case 'J' : rslt += " .---"; break;
			case 'K' : rslt += " -.-"; break;
			case 'L' : rslt += " .-.."; break;
			case 'M' : rslt += " --"; break;
			case 'N' : rslt += " -."; break;
			case 'O' : rslt += " ---"; break;
			case 'P' : rslt += " .--."; break;
			case 'Q' : rslt += " --.-"; break;
			case 'R' : rslt += " .-."; break;
			case 'S' : rslt += " ..."; break;
			case 'T' : rslt += " -"; break;
			case 'U' : rslt += " ..-"; break;
			case 'V' : rslt += " ...-"; break;
			case 'W' : rslt += " --."; break;
			case 'X' : rslt += " -..-"; break;
			case 'Y' : rslt += " -.--"; break;
			case 'Z' : rslt += " --.."; break;
			case ' ' : rslt += " /"; break;
			case '0' : rslt += " -----"; break;
			case '1' : rslt += " .----"; break;
			case '2' : rslt += " ..---"; break;
			case '3' : rslt += " ...--"; break;
			case '4' : rslt += " ....-"; break;
			case '5' : rslt += " ....."; break;
			case '6' : rslt += " -...."; break;
			case '7' : rslt += " --..."; break;
			case '8' : rslt += " ---.."; break;
			case '9' : rslt += " ----."; break;
			case '.' : rslt += " .-.-.-"; break;
			case '?' : rslt += " ..--.."; break;
			case ',' : rslt += " --..--"; break;
			case '@' : rslt += " .--.-."; break;
			case '/' : rslt += " -..-."; break;
			case '-' : rslt += " -....-"; break;
			case '\'': rslt += " .----."; break;
			case '(' : rslt += " -.--.-"; break;
			case ')' : rslt += " -.--.-"; break;
			
		}
		
	}
	
	document.getElementById("result").innerHTML = rslt;
	
}

function decrypt(){
	
	var mcode = document.getElementById("normalOrMorse").value + " ";
	var i, j = 0;
	var rslt = "";
	
	for (i = 0; i < mcode.length; i++){
	
			if ((mcode[i] === '.') || (mcode[i] === '-') || (mcode[i] === '/') || (mcode[i] === '|')){

				//	printf ("%d",j);

				++j;

			}

			else if (mcode[i] === ' '){

			//	printf ("\n %d",i);

				if (j === 1){

					if (mcode[i - 1] === '.'){

						rslt += "E";

					}
					else if (mcode[i - 1] === '-'){

						rslt += "T";

					}

					else/* if ((mcode[i - 1] == '/') || (mcode[i - 1] == '|'))*/{

						rslt += " ";

					}

					j = 0;

				}

				else if (j === 2){

					if ((mcode[i - 2] === '.') && (mcode[i - 1] === '-')){

						rslt += "A";

					}

					else if ((mcode[i - 2] === '-') && (mcode[i - 1] === '.')){

						rslt += "N";

					}

					else if ((mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "I";

					}

					else{

						rslt += "M";

					}

					j = 0;

				}

				else if (j === 3){

					if ((mcode[i - 3] === '.') && (mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "S";

					}

					else if ((mcode[i - 3] === '-') && (mcode[i - 2] === '-') && (mcode[i - 1] === '-')){

						rslt += "O";

					}

					else if ((mcode[i - 3] === '.') && (mcode[i - 2] === '.') && (mcode[i - 1] === '-')){

						rslt += "U";

					}

					else if ((mcode[i - 3] === '.') && (mcode[i - 2] === '-') && (mcode[i - 1] === '-')){

						rslt += "W";

					}

					else if ((mcode[i - 3] === '-') && (mcode[i - 2] === '.') && (mcode[i - 1] === '-')){

						rslt += "K";

					}

					else if ((mcode[i - 3] === '.') && (mcode[i - 2] === '-') && (mcode[i - 1] === '.')){

						rslt += "R";

					}

					else if ((mcode[i - 3] === '-') && (mcode[i - 2] === '-') && (mcode[i - 1] === '.')){

						rslt += "G";

					}

					else{

						rslt += "D";

					}

					j = 0;

				}

				else if (j === 4){

					if ((mcode[i - 4] === '.') && (mcode[i - 3] === '.') && (mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "H";

					}

					else if ((mcode[i - 4] === '.') && (mcode[i - 3] === '.') && (mcode[i - 2] === '.') && (mcode[i - 1] === '-')){

						rslt += "V";

					}

					else if ((mcode[i - 4] === '.') && (mcode[i - 3] === '-') && (mcode[i - 2] === '-') && (mcode[i - 1] === '-')){

						rslt += "J";

					}

					else if ((mcode[i - 4] === '-') && (mcode[i - 3] === '.') && (mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "B";

					}

					else if ((mcode[i - 4] === '-') && (mcode[i - 3] === '.') && (mcode[i - 2] === '-') && (mcode[i - 1] === '.')){

						rslt += "C";

					}

					else if ((mcode[i - 4] === '.') && (mcode[i - 3] === '.') && (mcode[i - 2] === '-') && (mcode[i - 1] === '.')){

						rslt += "F";

					}

					else if ((mcode[i - 4] === '.') && (mcode[i - 3] === '-') && (mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "L";

					}

					else if ((mcode[i - 4] === '.') && (mcode[i - 3] === '-') && (mcode[i - 2] === '-') && (mcode[i - 1] === '.')){

						rslt += "P";

					}

					else if ((mcode[i - 4] === '-') && (mcode[i - 3] === '-') && (mcode[i - 2] === '.') && (mcode[i - 1] === '-')){

						rslt += "Q";

					}

					else if ((mcode[i - 4] === '-') && (mcode[i - 3] === '.') && (mcode[i - 2] === '.') && (mcode[i - 1] === '-')){

						rslt += "X";

					}

					else if ((mcode[i - 4] === '-') && (mcode[i - 3] === '-') && (mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "Z";

					}

					else {

						rslt += "Y";

					}

					j = 0;

				}

				else if (j === 5){

					if ((mcode[i - 5] === '.') && (mcode[i - 4] === '.') && (mcode[i - 3] === '.') && (mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "5";

					}

					else if ((mcode[i - 5] === '.') && (mcode[i - 4] === '-') && (mcode[i - 3] === '-') && (mcode[i - 2] === '-') && (mcode[i - 1] === '-')){

						rslt += "1";

					}

					else if ((mcode[i - 5] === '.') && (mcode[i - 4] === '.') && (mcode[i - 3] === '-') && (mcode[i - 2] === '-') && (mcode[i - 1] === '-')){

						rslt += "2";

					}

					else if ((mcode[i - 5] === '.') && (mcode[i - 4] === '.') && (mcode[i - 3] === '.') && (mcode[i - 2] === '-') && (mcode[i - 1] === '-')){

						rslt += " 3";

					}

					else if ((mcode[i - 5] === '.') && (mcode[i - 4] === '.') && (mcode[i - 3] === '.') && (mcode[i - 2] === '.') && (mcode[i - 1] === '-')){

						rslt += " 4";

					}

					else if ((mcode[i - 5] === '-') && (mcode[i - 4] === '.') && (mcode[i - 3] === '.') && (mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "6";

					}

					else if ((mcode[i - 5] === '-') && (mcode[i - 4] === '-') && (mcode[i - 3] === '.') && (mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "7";

					}

					else if ((mcode[i - 5] === '-') && (mcode[i - 4] === '-') && (mcode[i - 3] === '-') && (mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "8";

					}

					else if ((mcode[i - 5] === '-') && (mcode[i - 4] === '-') && (mcode[i - 3] === '-') && (mcode[i - 2] === '-') && (mcode[i - 1] === '.')){

						rslt += "9";

					}

					else if ((mcode[i - 5] === '-') && (mcode[i - 4] === '-') && (mcode[i - 3] === '-') && (mcode[i - 2] === '-') && (mcode[i - 1] === '-')){

						rslt += "0";

					}

					else {

						rslt += "/";

					}

					j = 0;

				}

				else if (j === 6){

					if ((mcode[i - 6] === '.') && (mcode[i - 5] === '-') && (mcode[i - 4] === '.') && (mcode[i - 3] === '-') && (mcode[i - 2] === '.') && (mcode[i - 1] === '-')){

						rslt += ".";

					}

					else if ((mcode[i - 6] === '.') && (mcode[i - 5] === '.') && (mcode[i - 4] === '-') && (mcode[i - 3] === '-') && (mcode[i - 2] === '.') && (mcode[i - 1] === '.')){

						rslt += "?";

					}

					else if ((mcode[i - 6] === '-') && (mcode[i - 5] === '-') && (mcode[i - 4] === '.') && (mcode[i - 3] === '.') && (mcode[i - 2] === '-') && (mcode[i - 1] === '-')){

						rslt += ",";

					}

					else if ((mcode[i - 6] === '.') && (mcode[i - 5] === '-') && (mcode[i - 4] === '-') && (mcode[i - 3] === '.') && (mcode[i - 2] === '-') && (mcode[i - 1] === '.')){

						rslt += "@";

					}

					j = 0;

				}

			}
			
			else{
				
				switch(mcode[i]){
			
					case 'A' : rslt += " .-"; break;
					case 'B' : rslt += " -..."; break;
					case 'C' : rslt += " -.-."; break;
					case 'D' : rslt += " -.."; break;
					case 'E' : rslt += " ."; break;
					case 'F' : rslt += " ..-."; break;
					case 'G' : rslt += " --."; break;
					case 'H' : rslt += " ...."; break;
					case 'I' : rslt += " .."; break;
					case 'J' : rslt += " .---"; break;
					case 'K' : rslt += " -.-"; break;
					case 'L' : rslt += " .-.."; break;
					case 'M' : rslt += " --"; break;
					case 'N' : rslt += " -."; break;
					case 'O' : rslt += " ---"; break;
					case 'P' : rslt += " .--."; break;
					case 'Q' : rslt += " --.-"; break;
					case 'R' : rslt += " .-."; break;
					case 'S' : rslt += " ..."; break;
					case 'T' : rslt += " -"; break;
					case 'U' : rslt += " ..-"; break;
					case 'V' : rslt += " ...-"; break;
					case 'W' : rslt += " --."; break;
					case 'X' : rslt += " -..-"; break;
					case 'Y' : rslt += " -.--"; break;
					case 'Z' : rslt += " --.."; break;
					case ' ' : rslt += " /"; break;
					case '0' : rslt += " -----"; break;
					case '1' : rslt += " .----"; break;
					case '2' : rslt += " ..---"; break;
					case '3' : rslt += " ...--"; break;
					case '4' : rslt += " ....-"; break;
					case '5' : rslt += " ....."; break;
					case '6' : rslt += " -...."; break;
					case '7' : rslt += " --..."; break;
					case '8' : rslt += " ---.."; break;
					case '9' : rslt += " ----."; break;
					case '.' : rslt += " -.-.-."; break;
					case '?' : rslt += " ..--.."; break;
					case ',' : rslt += " --..--"; break;
					case '@' : rslt += " .--.-."; break;
					case '/' : rslt += " -..-."; break;
					
				}
				
				j = 0;
				
			}
			
	}

	console.log(rslt);
	document.getElementById("result").innerHTML = rslt;
}

function reset(){
	document.getElementById("normalOrMorse").value = "";
	document.getElementById("result").innerHTML = "The translated message appears here.";
	
	var error = document.getElementById("error");
	error.innerHTML = "";
	error.style.background = "#f5f5f5";
	error.style.color = "#f5f5f5";
}
