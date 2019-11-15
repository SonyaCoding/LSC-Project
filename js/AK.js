<script>
function fedpov(house,income,percentage){
	// Determine if your income is less than or equal to 
	// a percentage of the 2019 federal poverty guidelines 
	// for the Alaska. See
	// https://www.federalregister.gov/documents/2019/02/01/2019-00621/annual-update-of-the-hhs-poverty-guidelines
	
		var line = NaN;
	
		if (house == 1) {
			line = 15600;
		} else if (house == 2) {
			line = 21130;
		} else if (house == 3) {
			line = 26660;
		} else if (house == 4) {
			line = 32190;
		} else if (house == 5) {
			line = 37720;
		} else if (house == 6) {
			line = 43250;
		} else if (house == 7) {
			line = 48780;
		} else if (house == 8) {
			line = 54310;
		} else if (house > 8) {
			line = 54310 + (house-8)*5530;
		}
	
		if (income <= (line*(percentage/100))) {
			return true;
		} else {
			return false;
		}
	}	
</script>	
