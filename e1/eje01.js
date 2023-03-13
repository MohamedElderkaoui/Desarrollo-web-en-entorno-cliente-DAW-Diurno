// Función que solicita un número y verifica que sea válido
function solicitarNumero(mensaje) {
  let numero = null;
  while (numero === null) {
    const entrada = prompt(mensaje);
    if (entrada === null || isNaN(entrada)) {
      alert('Entrada inválida. Por favor ingrese un número válido.');
    } else {
      numero = parseFloat(entrada);
    }
  }
  return numero;
}

// Función que solicita una operación y verifica que sea válida
function solicitarOperacion() {
  let operacion = null;
  while (operacion === null) {
    const entrada = prompt('Ingrese la operación que desea realizar (+, -, *, /)');
    if (entrada === null || !['+', '-', '*', '/'].includes(entrada)) {
      alert('Entrada inválida. Por favor ingrese una operación válida (+, -, *, /)');
    } else {
      operacion = entrada;
    }
  }
  return operacion;
}

// Función que realiza una operación matemática entre dos números
function calcular(operacion, num1, num2) {
  switch (operacion) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

// Función que muestra el resultado en una ventana emergente
function mostrarResultado(resultado) {
  const ventana = window.open('', 'Resultado', 'width=300,height=150,top=200,left=500,menubar=no,toolbar=no');
  ventana.document.body.style.backgroundColor = 'yellow';
  ventana.document.body.style.fontFamily = 'sans-serif';
  ventana.document.body.style.color = 'green';
  ventana.document.body.style.textAlign = 'center';
  ventana.document.body.style.paddingTop = '50px';
  ventana.document.body.innerHTML = `El resultado es: ${resultado}`;
  setTimeout(() => {
    ventana.close();
  }, 5000);
}

// Función principal que solicita los números y la operación, realiza el cálculo y muestra el resultado
function main() {
  const num1 = solicitarNumero("Ingrese el primer número");
  const num2 = solicitarNumero("Ingrese el segundo número");
  const operacion = solicitarOperacion();
  const resultado = calcular(operacion, num1, num2);
  mostrarResultado(resultado);
}

// Ejecución de la función principal
main();
