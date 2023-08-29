//your JS code here. If required.

 let output =document.getElementById("output");
let form = document.getElementById("btn");
  const msg=document.getElementById("text").value;
const delay=document.getElementById("delay").value;
form.addEventListener("click",(e)=>{
	e.preventdefault();
	async function main(delay){

	  await new Promise((resolve)=>{
		  setTimeout(()=>{
			  resolve();
		  },delay)
		 output.innerText=msg; 
	  })
		}
})
  
