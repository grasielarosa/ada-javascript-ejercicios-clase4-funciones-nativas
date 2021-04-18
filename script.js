//EJERCICIO 1: Tienen misma longitud
// const tienenMismaLongitud=(a,b)=>{
//     return (a.length===b.length)
//   }
//EJERCICIO 2: Es el último caracter
// const esElUltimoCaracter= (palabra,caracter)=>{
//     return (palabra.slice(-1)===caracter)
//   }
//EJERCICIO 3: Es contraseña válida
//const esValida = (contrasenia) => {
//    return (contrasenia.length >= 8)
//}
//EJERCICIO 4: Son iguales
// const sonIguales = (a, b) => {
//     return (a.toUpperCase() === b.toUpperCase());
// }
//EJERCICIO 5: Contar palabras
// const contarPalabras=(str)=>{
//     return (str.split(" ").length)
//   }
//EJERCICIO 6: Burlarse
// const burlarse = (str) =>{
//     return str.replace(/[aeiou]/g, 'i');
// }
//EJERCICIO 7: Es fraccion mayor a uno
// function esFraccionMayorAUno(fraccion) {
//     const numerador = Number(fraccion[0]);
//     const denominador = Number(fraccion[2]);
//     const resultado = numerador / denominador;
//     return resultado > 1
// }

//EJERCICIO 8: Capitalizar
// const capitalizar=(str)=>{
//     return (str.charAt(0).toUpperCase() + str.slice(1))
//   }
// EJERCICIO 9: A hacker speak
// const aHackerSpeak = (str) => {
//     return (str.replace(/i/gi, '1').replace(/e/gi, 3).replace(/a/gi, 4).replace(/s/gi, 5).replace(/o/gi, 0));
// }
// EJERCICIO 10: Obtener primera oración
// const obtenerPrimeraOracion = (str) => {
//     return str.split(".").slice(0, 1)
// }

// EJERCICIO 11:

//     EJERCICIO 12: Remover vocales
// const removerVocales = (str) => {
//     return str.replace(/[aeiouà-ú]/gi, "")
// }
// EJERCICIO 13: Obtener extension
// const obtenerExtension = (archivo) => {
//     return archivo.split(".").slice(1, 2)
// }
// EJERCICIO 14: Es puente seguro
// const esPuenteSeguro = (puente) => {
//     const seguro = (puente.indexOf(" ") >= 0)
//     return !seguro
// }
// EJERCICIO 15: Obtener subreddit
// const obtenerSubreddit = (url) => {
//     return url.split('/').slice(4, 5)
// }