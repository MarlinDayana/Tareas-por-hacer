const fs = require('fs');


const archivo ='./db/data.json';
const guardarDb = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data)); // recuerda que esta funcion sirve para grabar en archivos de txt o json
}

const leerDB = () => {

        if (!fs.existsSync(archivo)) {
            return null; //para verificar que existe un archivo que leer 
        } 
        
        const info = fs.readFileSync(archivo,{encoding: 'utf8'});
        const data = JSON.parse(info); // parsiar el archivo para que regrese el array
        //console.log(data);
        return null;
        // funcion leer el archivo 

}


module.exports = {
    guardarDb,
    leerDB
}