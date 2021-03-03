let btn = document.getElementById("btn");
let form = document.getElementById('form');
let close = document.getElementById("close");
let registro = document.getElementById("registro");
let camp = document.getElementById("camp-form");
let camp2 = document.getElementById("camp-form2");
let iniciar = document.getElementById("iniciar");

btn.addEventListener("click", ()=>{
   form.style.display="block"; 
});

close.addEventListener('click', ()=>{
   form.style.display="none";
   camp.style.display="block";
   registro.style.display="block";
   camp2.style.display="none";
   iniciar.style.display="none";
});

registro.addEventListener('click', ()=>{
    camp.style.display="none";
    registro.style.display="none";
    camp2.style.display="block";
    iniciar.style.display="block";
});

iniciar.addEventListener('click', ()=>{
    camp.style.display="block";
    registro.style.display="block";
    camp2.style.display="none";
    iniciar.style.display="none";
});