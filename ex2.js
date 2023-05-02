/**
 * Completa el cuerpo de la función del forEach para crear un objeto para cada elemento del array con el nombre de la persona. Crear objetos: https://www.w3schools.com/js/js_objects.asp
 */

const names = ["John", "Sarah", "Mike"];
let people = [];
names.forEach((name) => {
    let person = {
        nombre:name
    };
    people.push(person);
    // 1 línea de código
});
console.log(people); // Output: [{name: "John"}, {name: "Sarah"}, {name: "Mike"}]