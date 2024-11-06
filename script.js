function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = '';

    for (let i = 0; i < 7; i++) {
        let symbol = obj[i][0];
        let value = obj[i][1];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
        if (i % 2 === 0 && num >= value - obj[i + 2][1]) {
            result += obj[i + 2][0] + symbol;
            num -= value - obj[i + 2][1];
        }
    }

    return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(num));




// do not edit below this line
module.exports = convertToRoman
