function fedpov(house,income,percentage){
	// Determine if your income is less than or equal to 
	// a percentage of the 2019 federal poverty guidelines 
	// for Hawaii. See
	// https://www.federalregister.gov/documents/2019/02/01/2019-00621/annual-update-of-the-hhs-poverty-guidelines
	
		var line = NaN;
	
		if (house == 1) {
			line = 14380;
		} else if (house == 2) {
			line = 19460;
		} else if (house == 3) {
			line = 24540;
		} else if (house == 4) {
			line = 29620;
		} else if (house == 5) {
			line = 34700;
		} else if (house == 6) {
			line = 39780;
		} else if (house == 7) {
			line = 44860;
		} else if (house == 8) {
			line = 49940;
		} else if (house > 8) {
			line = 49940 + (house-8)*5080;
		}
	
		if (income <= (line*(percentage/100))) {
			return true;
		} else {
			return false;
		}
	}	
