/*
Crea un documento HTML (página Web) donde exista un botón “Crear cuenta bancaria”. Cuando el usuario
pulse sobre el botón debe:
- Solicitar al usuario el nombre del titular, apellidos del titular y saldo de la cuenta mediante
ventanas emergentes.
- Crear un nuevo objeto “CuentaBancaria” que se inicializará con los datos facilitados por el usuario.
- Mostrar un mensaje (en una ventana emergente) informando de que se ha creado la nueva cuenta
bancaria y de los datos asociados a la cuenta bancaria creada.
- Se tendrá en cuenta la eficiencia en el código y en la propuesta de solución. El código deberá estar
bien comentado. Siempre que se pueda, hay que utilizar funciones y objetos de usuario (con sus
propiedades y métodos).*/

class CuentaBancaria {
  <#nombre;
    #apellidos;
    #saldo;>
    constructor(nombre, apellidos, saldo) {
      this.#nombre = nombre;
      this.#apellidos = apellidos;
      this.#saldo = saldo;
    }
    get nombre() {
        return this.#nombre;
        }
    get apellidos() {
        return this.#apellidos;
        }
    get saldo() {
        return this.#saldo;
        }
    set nombre(nombre) {
        this.#nombre = nombre;
        }
    set apellidos(apellidos) {
        this.#apellidos = apellidos;
        }
    set saldo(saldo) {
        this.#saldo = saldo;
        }
    mostrarDatos() {
        return `Nombre: ${this.#nombre} ${this.#apellidos} Saldo: ${this.#saldo}`;
        }
        
}
function crearCuentaBancaria() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const saldo = parseFloat(document.getElementById("saldo").value);

    const cuenta = new CuentaBancaria(nombre, apellidos, saldo);
    alert(cuenta.mostrarDatos());
    
  // borrar los campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("saldo").value = "";
}

