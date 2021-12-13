require('colors');

const { guardarDb, leerDB } = require('./helpers/guardarArchivo');
const {InquirerMenu,
       pausa,
       leerInput,
       listadoTareasBorrar,
       confirmar,
       MostrarListadoChecklist

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
                tareas.ListadoCompleto();
            break;

            case '3':
                  tareas.ListarPendientesCompletadas(true);
            break;

            case '4':
                  tareas.ListarPendientesCompletadas(false);
            break;

            case '5':
                  const ids = await  MostrarListadoChecklist(tareas.listadosArr);
                  tareas.toggleCompletadas(ids);
            break;

            case '6':
              const id = await listadoTareasBorrar(tareas.listadosArr);
              if (id !== '0'){
                  const ok = await confirmar('¿Está seguro?');
                  if (ok) {
                      tareas.borrarTarea(id);
                      console.log('tarea borrada');
                }

              }
              

              //console.log({ok});   
            break;

           }

           guardarDb(tareas.listadosArr);




             await pausa();
  
          } while( options !== '0');

   


};



main();


// https://github.com/Klerith/node-console-app-todo/releases/tag/v0.5.0 - Aqui codigo principal en git - Revisar