
$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "correct"){
      document.getElementById("button Verificar1").style.background='#28D81C';
      document.getElementById("button Verificar1").style.border='#000000';
      document.getElementById("button Verificar1").value='Correcto';
    } else if(respuesta == "incorrect"){
      document.getElementById("button Verificar1").style.background='#F20D0D';
      document.getElementById("button Verificar1").style.border='#000000';
      document.getElementById("button Verificar1").value='Incorrecto';
    }
  });
  
  $('input[name="pregunta_2"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "correct"){
      document.getElementById("button Verificar2").style.background='#28D81C';
      document.getElementById("button Verificar2").style.border='#000000';
      document.getElementById("button Verificar2").value='Correcto';
    } else if(respuesta == "incorrect"){
      document.getElementById("button Verificar2").style.background='#F20D0D';
      document.getElementById("button Verificar2").style.border='#000000';
      document.getElementById("button Verificar2").value='Incorrecto';
    }
  });
  
  $('input[name="pregunta_3"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "correct"){
      document.getElementById("button Verificar3").style.background='#28D81C';
      document.getElementById("button Verificar3").style.border='#000000';
      document.getElementById("button Verificar3").value='Correcto';
    } else if(respuesta == "incorrect"){
      document.getElementById("button Verificar3").style.background='#F20D0D';
      document.getElementById("button Verificar3").style.border='#000000';
      document.getElementById("button Verificar3").value='Incorrecto';
    }
  });
  
  $('input[name="pregunta_4"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "correct"){
      document.getElementById("button Verificar4").style.background='#28D81C';
      document.getElementById("button Verificar4").style.border='#000000';
      document.getElementById("button Verificar4").value='Correcto';
    } else if(respuesta == "incorrect"){
      document.getElementById("button Verificar4").style.background='#F20D0D';
      document.getElementById("button Verificar4").style.border='#000000';
      document.getElementById("button Verificar4").value='Incorrecto';
    }
  });
  
  $('input[name="pregunta_5"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "correct"){
      document.getElementById("button Verificar5").style.background='#28D81C';
      document.getElementById("button Verificar5").style.border='#000000';
      document.getElementById("button Verificar5").value='Correcto';
    } else if(respuesta == "incorrect"){
      document.getElementById("button Verificar5").style.background='#F20D0D';
      document.getElementById("button Verificar5").style.border='#000000';
      document.getElementById("button Verificar5").value='Incorrecto';
    }
  });
  $('input[name="pregunta_6"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "correct"){
      document.getElementById("button Verificar6").style.background='#28D81C';
      document.getElementById("button Verificar6").style.border='#000000';
      document.getElementById("button Verificar6").value='Correcto';
    } else if(respuesta == "incorrect"){
      document.getElementById("button Verificar6").style.background='#F20D0D';
      document.getElementById("button Verificar6").style.border='#000000';
      document.getElementById("button Verificar6").value='Incorrecto';
    }
  });