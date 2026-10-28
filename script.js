function decimalToBinary(num) {
  //Write you code here
	let bValue=""
  while(num>0)
	  {
		  let rem=parseInt(num%2)
		  bValue=rem+bValue
		  num=parseInt(num/2)
	  }
	return bValue
}

window.decimalToBinary = decimalToBinary;
