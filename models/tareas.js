require('colors');
const Tarea = require("./tarea");

const listados = { }

class Tareas  {
    
    _listado = {};
   
    get listadosArr (){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });  // revisar para que sirve esta funcion 

        return listado;
    }

    constructor() {
        this._listado={};
    }

    borrarTarea(id=''){ // metodo para borrar tarea 
        if (this._listado[id]){
            delete this._listado[id];
        }
        

    }
    
    // metodo para cargar las tareas 
    cargarTareasArray(tareas = []) { 

        tareas.forEach(tarea => {
            this._listado [tarea.id]=tarea;
        });

        
    }

    crearTarea(desc=''){
    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;
    }

    ListadoCompleto(){


        console.log('');

        this.listadosArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const {desc,completadoEn}= tarea;
            const estado = (completadoEn) // aqui se me hace extraño la sintaxis ?: para imorinir ¿como funciona?
                            ?'completado'.green
                            :'pendiente'.red;
            console.log (` ${idx} ${desc} :: ${estado}`);

        });
     // HACERLO UTILIZANDO EL _listado IMPORTANTE REPASAR ALGUNAS COSAS 
        
    //    console.log(this._listado);

    //    // indice - decripcion de la actividad - completada o pendiente 
    //     let indice = () => {
    //         i=1, i++
    //     };
    //     return indice();
        
    //     let estado = () => {
    //         if (completadoEn===null) {console.log ('pendiente')
    //     }else { console.log ('completada')};
    //     };
    //     return estado();

    //     const [desc,completadoEn]= this._listado;
    //     return desc      
                
    }

    ListarPendientesCompletadas (completadas = true ) {


        console.log('');
        let contador = 0;

        this.listadosArr.forEach(tarea => {
            const {desc,completadoEn}= tarea;
            const estado = (completadoEn) // aqui se me hace extraño la sintaxis ?: para imorinir ¿como funciona?
                                 ?'completado'.green
                                 :'pendiente'.red;
            if (completadas)  {
                  // listar completadas 
                if (completadoEn){
                    contador+=1; 
                    console.log (`${(contador+'.').green} ${desc} :: ${completadoEn}`);    
                }
             } else {
                if (!completadoEn) {// listar pendientes
                contador+=1; 
                console.log (` ${(contador+'.').green} ${desc} :: ${estado}`); 
                }
                
         }

    });
}

    }

module.exports=Tareas;