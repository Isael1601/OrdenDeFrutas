const  frutas = ['naranjas', 'fresas', 'sandias', 'uvas', 'cerezas', 'manzanas'];

    frutas.sort((fruta1, fruta2) => {
        if(fruta1 < fruta2) {
            return -1;
        }

        if (fruta1 > fruta2){
        return 1;
        }

        return 0;
    })

console.log(frutas)
console.log(frutas[4])
console.log(frutas[1])
console.log(frutas[5])
console.log(frutas[0])
console.log(frutas[2])
console.log(frutas[3])

