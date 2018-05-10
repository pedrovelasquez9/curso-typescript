let objeto_a_recorrer = {
    nombre: "Pedro",
    apellido: "Plasencia",
    correo: "pjpv9011@gmail.com"
};
for (let key in objeto_a_recorrer) {
    if (key == "nombre") {
        console.log(objeto_a_recorrer[key]);
    }
}
