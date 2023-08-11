export function modifyingArrayEntrada(array){

    let arrayModified = array.map(iten =>{
        let auxiliar= iten.split(",")
        return [...auxiliar]
    })

    return arrayModified
}

