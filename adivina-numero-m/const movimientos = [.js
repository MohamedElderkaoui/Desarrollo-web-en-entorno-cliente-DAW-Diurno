const movimientos = [
    200,
    450,
    -400,
    3000,
    -650,
    -130,
    70,
    1300,
    100,
    -400,
    850,
    -30,
    -80,
    150,
    250,
    -70,
    430,
    1200,
    -900,
    -600,
    440,
    500,
    -600,
    -30
];


// 1. ForEach
 total =0;
movimientos.forEach((movimiento, index) => {
    total += movimiento;
    console.log(`Movimiento ${index + 1}: ${movimiento}`);
})
total = 0;
// 2. for of
for (const movimiento of movimientos) {
    total += movimiento;
    console.log(`Movimiento: ${movimiento}`);
}
total = 0;
// 3. for
for (let i = 0; i < movimientos.length; i++) {
    total += movimientos[i];
    console.log(`Movimiento ${i + 1}: ${movimientos[i]}`);
}
//solo ingresa a la condicion si el movimiento es mayor a 0
const ingreso = movimientos.filter(movimiento => movimiento > 0);
//sale en consola el array de ingresos 
console.log(`Movimientos de ingreso: ${ingreso}`);