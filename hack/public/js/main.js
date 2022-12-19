
const socket = io.connect();

function oiga (){
  socket.emit('solicitud', { name: "John" });
}
const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  let cuota = document.getElementById('cuotas');
  const nCouta = (valor)=>{
  if (valor <=100000 ) {
    cuota.innerHTML=`<option value="${1}" >${1}</option>`;
  } else if (valor >=100000 && valor <=200000 ){

cuota.innerHTML=`<option value="${1}">${1}</option>
<option value="${2}" >${2}</option>`;
}else if (valor >200000 && valor <=300000 ){
cuota.innerHTML=`   <option value="${1}" >${1}</option>
<option value="${2}" >${2}</option>
<option value="${3}" >${3}</option>`;
}else if (valor >300000 && valor <=350000 ){
cuota.innerHTML=`   <option value="${1}" >${1}</option>
<option value="${2}" >${2}</option>
<option value="${3}" >${3}</option>
<option value="${4}" >${4}</option>`;
}else if (valor >350000 && valor <=1000000 ){
cuota.innerHTML=`   <option value="${1}" >${1}</option>
<option value="${2}" >${2}</option>
<option value="${3}" >${3}</option>
<option value="${4}" >${4}</option>
<option value="${5}" >${5}</option>`;
}
  }
addEventListener('load',inicio,false);

function inicio()
{
  if(localStorage.getItem('usuario')){
    localStorage.removeItem('usuario')
    localStorage.removeItem('id')
  }
document.getElementById('temperatura').addEventListener('change',cambioTemperatura,false);
}
function cambioTemperatura()
{    
let valor =  document.getElementById('temperatura').value;
nCouta(valor);
document.getElementById('temp').innerHTML=formatterPeso.format(valor);
}
const envio2 = async (datas)=>{
  let monto =datas.get('monto');
  let cuotas =datas.get('cuotas');
  let referido =datas.get('referido');
  let id =JSON.parse(localStorage.getItem('id')) ;
   let envio = JSON.parse(localStorage.getItem('usuario'))
 envio ={
   id,
   nombre: envio.nombre,
   monto:monto,
   cuotas:cuotas,
   fecha: new Date()
 }
  let jsonData2 = {
    id_cliente:id,
    fecha_solicitud: new Date(),
    data:{
      monto,
      cuotas,
      referido
    }
  }

const res = await  fetch('http://localhost:4000/prestamo', {
  method: 'POST',
  body: JSON.stringify(jsonData2),
  headers:{
     'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})



const dato =await res.json();
 
if (dato.status ===200) {
  socket.emit('solicitud', envio)
  document.querySelector('#dos') .classList.toggle('fade');
  document.querySelector('#texto') .classList.add('d-none');
  setTimeout(function()
{ 
  document.querySelector('#dos').classList.add('d-none');
}, 1000)
setTimeout(function()
{ 
  document.querySelector('#tres').classList.remove('d-none');
}, 1000)
localStorage.removeItem('id');
localStorage.removeItem('usuario');

 }

}
const envio = async (data)=>{
  let nombre =data.get('nombre');
  let apellido =data.get('apellido');
  let documento =data.get('documento');
  let tipo =data.get('tipo');
  let telefono =data.get('telefono');
  let email =data.get('email');
  let jsonData = {
    nombre,
    apellido,
    identificacion:documento,
    tipo_identificacion:tipo,
    telefono,
    email
  }
const res = await  fetch('http://localhost:4000/clientes', {
  method: 'POST',
  body: JSON.stringify(jsonData),
  headers:{
  
     'Accept': 'application/json',
    'Content-Type': 'application/json'
}
})


const dato =await res.json();

if (dato.status ===500) {
  document.querySelector('.alerta').classList.remove('d-none');
   document.querySelector('#alerta').innerText=`${dato.mensaje}`

  
}
if (dato.status ===200) {

  localStorage.setItem('id',dato.id);
  localStorage.setItem('usuario',JSON.stringify(jsonData));
  document.querySelector('.alert-warning').classList.add('d-none');
document.querySelector('#uno') .classList.toggle('fade');

document.querySelector('#form').classList.add('d-none');
document.querySelector('#check').classList.add('d-none');
setTimeout(function()
{ 
  document.querySelector('#uno').classList.add('d-none');
}, 1000)
setTimeout(function()
{ 
  document.querySelector('#dos').classList.remove('d-none');
}, 1000)

}
}

(function () {
'use strict'

var forms = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(forms)
.forEach(function (form) {
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }else{
        event.preventDefault()
        var data = new FormData(form)
        let da =data.get('monto');
        if (da){
           envio2(data);
        }else{
          envio(data); 
        }
         
    }

    form.classList.add('was-validated')
  }, false)
})
})()