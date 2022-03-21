const wrapper=document.querySelector(".wrapper");
let qrInput=wrapper.querySelector(".form input");
let generatebtn=wrapper.querySelector(".form button");
let qrimg=wrapper.querySelector(".qr-code img");
generatebtn.addEventListener("click",()=>{
    let qrvalue=qrInput.value;
    if(!qrvalue) return;
    generatebtn.innerText="Generating QR Code..."
qrimg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`
qrimg.addEventListener("load",()=>{
    wrapper.classList.add("active");
    generatebtn.innerText="Generate QR Code"
})
})
qrInput.addEventListener("keyup",()=>{

  if(!qrInput.value){
    wrapper.classList.remove("active");
  }  
})