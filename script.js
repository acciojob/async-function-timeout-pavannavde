//your JS code here. If required.

 let output =document.getElementById("output");
let form = document.getElementById("btn");
  let msg =document.getElementById("text").value;
let delay =document.getElementById("delay").value;
form.addEventListener("click",(e)=>{
	e.preventDefault();
	main(delay,msg);
	
})
  
async function main( delay,msg){

	  await new Promise((resolve)=>{
		  setTimeout(()=>{
			  resolve();
		  },delay);
		 output.innerText = msg; 
	  })
}