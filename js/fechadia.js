/* Obtener los datos de fecha */
const fechadia = new Date();
meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

/*formatea una cadena*/
const dia = fechadia.getDate() + " " + meses[fechadia.getMonth()] + " " + fechadia.getFullYear();
const diasemana = fechadia.getHours() + ":" + fechadia.getMinutes();

/* muestra la fecha */
document.getElementById("fechadia").innerHTML = "<p>" + dia + ", " + diasemana + "</p>";