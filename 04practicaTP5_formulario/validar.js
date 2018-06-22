

function validarFormulario(){
 
  var txtNombre = document.getElementById('nombre').value;
  var txtApellido = document.getElementById('apellido').value;
  var txtCorreo = document.getElementById('correo').value;
  var chkEstado = document.getElementById('checkBox');


  //Test campo obligatorio
  if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
    alert('ERROR: El campo Nombre no debe estar vacío o lleno de solamente espacios en blanco');
    return false;
  }

    //Test campo obligatorio
    if(txtNombre == null || txtApellido.length == 0 || /^\s+$/.test(txtApellido)){
      alert('ERROR: El campo Apellido no debe estar vacío o lleno de solamente espacios en blanco');
      return false;
    }


  //Test correo
  if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
    alert('ERROR: Ecriba un correo válido');
    return false;
  }

  //Test checkBox
  if(!chkEstado.checked){
    alert('ERROR: Debe aceptar la política');
    return false;
  }

  return true;
}
