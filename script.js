function decimalToBinary(num) {
  //Write you code here
	let bValue=""
  while(num>0)
	  {
		  let rem=Math.parse(num%2)
		  bValue+=rem
		  num=Math.parse(num/2)
	  }
	return bValue
}

window.decimalToBinary = decimalToBinary;
