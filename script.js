//your JS code here. If required.
let prom1= new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Hello, world!")
	},1000)
	
})
prom1.then((data)=>{
	let div= document.getElementById("output")
	div.innerText=data
})