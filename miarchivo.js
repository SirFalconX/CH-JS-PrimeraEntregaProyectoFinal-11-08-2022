

//Seguro Vehículos

const marcaAutos = ["Chevrolet", "Renault", "Audi" ]; //Array de marca de vehículos

let seguroGlobal = 2000
let seguroBasico = 1000

let precioFinal = 0

let okay = false //Validador
let okay2 = false
let okay3 = false
let pideMarca


//Precio Chevrolet según el año del vehículo
const precioAnioChevrolet = [500, 1000, 1500]
//Precio Renault
const precioAnioRenault = [1000, 1500, 1850]
//Precio Audi
const precioAnioAudi = [2000, 2500, 3000]



function Cotizador() {
    do {
        pideMarca = prompt("Bienvenido/a, por favor ingrese una de las tres marcas de vehículo de a continuación: Chevrolet, Renault o Audi") 
        let pideAnio
        let pideSeguro      
        console.log(pideMarca)
        switch(pideMarca){
            case marcaAutos[0]: //Llamo elemento del array
                resuelveAnioChev(pideAnio) 
                resuelveSeguro(pideSeguro)
                okay = false 
                console.log(pideMarca.includes("Chevrolet"))
                break;   
            case marcaAutos[1]:
                resuelveAnioRen(pideAnio)
                resuelveSeguro(pideSeguro)
                okay = false
                console.log(pideMarca.includes("Renault"))
                break;
            case marcaAutos[2]:
                resuelveAnioAudi(pideAnio)
                resuelveSeguro(pideSeguro)
                okay = false
                console.log(pideMarca.includes("Audi"))
                break;
            default:
                    alert("Por favor, ingrese una marca válida de las descritas anteriormente")
                    okay = true
                    console.log(okay)
              break;
            } 
      
    }while (okay == true)

}


function resuelveAnioChev(pideAnio) {
    do {
        pideAnio = prompt("Ingrese año del vehículo (Entre 2000 a 2022)")
        if (pideAnio != "") {
            console.log(pideAnio)
            if (pideAnio >= 2000 && pideAnio <= 2009) {
                alert("El precio es de $" + precioAnioChevrolet[0])
                precioFinal += precioAnioChevrolet[0]
                okay2 = false
            }
            else {
                if(pideAnio >= 2010 && pideAnio <= 2019) {
                    alert("El precio es de $" + precioAnioChevrolet[1])
                    precioFinal += precioAnioChevrolet[1]
                    okay2 = false
                }
                else {
                    if(pideAnio >= 2020 && pideAnio <= 2022){
                        alert("El precio es de $" + precioAnioChevrolet[2])
                        precioFinal += precioAnioChevrolet[2]
                        okay2 = false
                    }
                    else {
                        alert("Se introdujo un año inválido, intente nuevamente")
                        okay2 = true
                    }
                }
            }
        }

    } while (okay2 == true)
}





function resuelveAnioRen(pideAnio) {
    do {
        pideAnio = prompt("Ingrese año del vehículo (Entre 2000 a 2022)")
        if (pideAnio != "") {
            console.log(pideAnio)
            if (pideAnio >= 2000 && pideAnio <= 2009) {
                alert("El precio es de $" + precioAnioRenault[0])
                precioFinal += precioAnioRenault[0]
                okay2 = false
            }
            else {
                if(pideAnio >= 2010 && pideAnio <= 2019) {
                    alert("El precio es de $" + precioAnioRenault[1])
                    precioFinal += precioAnioRenault[1]
                    okay2 = false
                }
                else {
                    if(pideAnio >= 2020 && pideAnio <= 2022){
                        alert("El precio es de $" + precioAnioRenault[2])
                        precioFinal += precioAnioRenault[2]
                        okay2 = false
                    }
                    else {
                        alert("Se introdujo un año inválido, intente nuevamente")
                        okay2 = true
                    }
                }
            }
        }

    } while (okay2 == true)
}


function resuelveAnioAudi(pideAnio) {
    do {
        pideAnio = prompt("Ingrese año del vehículo (Entre 2000 a 2022)")
        if (pideAnio != "") {
            console.log(pideAnio)
            if (pideAnio >= 2000 && pideAnio <= 2009) {
                alert("El precio es de $" + precioAnioAudi[0])
                precioFinal += precioAnioAudi[0]
                okay2 = false
            }
            else {
                if(pideAnio >= 2010 && pideAnio <= 2019) {
                    alert("El precio es de $" + precioAnioAudi[1])
                    precioFinal += precioAnioAudi[1]
                    okay2 = false
                }
                else {
                    if(pideAnio >= 2020 && pideAnio <= 2022){
                        alert("El precio es de $" + precioAnioAudi[2])
                        precioFinal += precioAnioAudi[2]
                        okay2 = false
                    }
                    else {
                        alert("Se introdujo un año inválido, intente nuevamente")
                        okay2 = true
                    }
                }
            }
        }

    } while (okay2 == true)
}

//Suma el seguro seleccionado:
function resuelveSeguro(pideSeguro) {
    do {
        pideSeguro = prompt("Seleccione el seguro deseado: 1 - Seguro Básico; 2 - Seguro Global")
        if (pideSeguro != ""){
            console.log(pideSeguro)
            if (pideSeguro == 1) {
                alert("El precio es de $" + seguroBasico)
                precioFinal += seguroBasico 
                okay3 = false 
            }
            else {
                if(pideSeguro == 2) {
                    alert("El precio es de $" + seguroGlobal)
                    precioFinal += seguroGlobal
                    okay3 = false
                }
                else {
                    alert("Por favor, ingrese un año una opción válida.")
                    okay3 = true
                }
            }
        }
    } while (okay3 == true)
}  



Cotizador()
//Resultado final del seguro
alert("El precio total de su seguro es de $" + precioFinal)