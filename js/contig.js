<script>
function fedpov(house,income,percentage){
	// Determine if your income is less than or equal to 
	// a percentage of the 2019 federal poverty guidelines 
	// for the contiguous United States. See
	// https://www.federalregister.gov/documents/2019/02/01/2019-00621/annual-update-of-the-hhs-poverty-guidelines
		var line = NaN;
		if (house == 1) {
			line = 12490;
		} else if (house == 2) {
			line = 16910;
		} else if (house == 3) {
			line = 21330;
		} else if (house == 4) {
			line = 25750;
		} else if (house == 5) {
			line = 30170;
		} else if (house == 6) {
			line = 34590;
		} else if (house == 7) {
			line = 39010;
		} else if (house == 8) {
			line = 43340;
		} else if (house > 8) {
			line = 43340 + (house-8)*4420;
		}
		if (income <= (line*(percentage/100))) {
			return true;
		} else {
			return false;
		}
	}	
</script>
