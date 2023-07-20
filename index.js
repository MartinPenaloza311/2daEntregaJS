const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 1390,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1600,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1930,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 2100,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 1450,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// Ejercicio 1 - Las pizzas que tengan un id impar //

const IdImpar = pizzas.filter ((pizza) => pizza.id % 2 !==0);
console.log("las pizzas con id impar son:");
IdImpar.forEach((pizza) => {
  console.log(`${pizza.nombre}, porque su id es, ${pizza.id}.`);
});


// Ejercicio 2 - Responder: ¿Hay alguna pizza que valga menos de $600? //

console.log("¿Hay Alguna Pizza que valga menos de $600?");
const PizzaMenosDe600 = pizzas.find ((pizza) => pizza.precio < 600);
if (PizzaMenosDe600) {
  console.log(`Si, Actualmente la ${pizza.nombre} se encuentra a ${PizzaMenosDe600.precio}`);
} else {
  console.log("No, actualmente no contamos con una pizza que valga menos de $600");
};


// Ejercicio 3 - El nombre de cada pizza con su respectivo precio. //

console.log(`El catalogo de nuestras pizzas con su respectivo precio`);
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre}, con un precio de $${pizza.precio}`);
});

// Ejercicio 4 - Todos los Ingredientes de las pizzas //

console.log("Todos los ingredientes de las pizzas son:");
pizzas.map((pizza) => {
  console.log(`${pizza.nombre}:`);
  pizza.ingredientes.map((ingrediente) => {
    console.log(`${ingrediente}`);
  })
})
