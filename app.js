require('colors');

const { guardarDb, leerDB } = require('./helpers/guardarArchivo');
const {InquirerMenu,
       pausa,
       leerInput
} = require('./helpers/inquirer'); // desestructuracion 
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async () => {
    
    
        let options = '';

        const tareas= new Tareas();
        const tareasDB = leerDB();

        if (tareasDB) {   // cargar las tareas
         tareas.cargarTareasArray(tareasDB);

        } 
       

        do{
    
           options = await InquirerMenu();
            
           switch (options){
            case'1':
            //crear opcion 
            const desc = await leerInput('Descripcion:')
            tareas.crearTarea(desc);

            break; 

            case'2':
                console.log(tareas.listadosArr);
            break;

           }

          // guardarDb(tareas.listadosArr);




             await pausa();
  
          } while( options !== '0');

   


};



main();