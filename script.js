let input= document.getElementsByClassName("decimal")
let btn=document.getElementsByClassName("btn")
let output= document.getElementsByClassName("output")


function decimalToBinary(num) {
  //Write you code here
	let bValue=""
  while(num>0)
	  {
		  let rem=parseInt(num%2)
		  bValue=rem+bValue
		  num=parseInt(num/2)
	  }
	output[0].innerText=bValue
}
btn[0].addEventListener("click",()=>decimalToBinary(input[0].value))

// window.decimalToBinary = decimalToBinary;
