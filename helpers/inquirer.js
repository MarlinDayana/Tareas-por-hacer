const inquirer = require ('inquirer');

require('colors');

const preguntas = [
     
    {
        type : 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.red} Crear Tarea`
            },

            {
                value: '2',
                name: `${'2.'.red} Listar Tareas`
            },

            {
                value: '3',
                name: `${'3.'.red} Listar Tareas Completadas`
            },

            {
                value: '4',
                name: `${'4.'.red} Listar Tareas Pendientes`
            },

            {
                value: '5',
                name: `${'5.'.red} Completar Tarea(s)`
            },

            {
                value: '6',
                name: `${'6.'.red} Borrar Tareas`
            },

            {
                value: '0',
                name: `${'0.'.red} Salir`
            }
        
        ]
    }


];



const InquirerMenu= async () => {

    console.clear();
    console.log('======================'.green);
    console.log(' Seleccione una opción');
    console.log('======================\n'.green);


    const {opcion} =  await inquirer.prompt(preguntas);

    return (opcion);

   
}

const pausa = async ()=>{
    const question = [

       {
           type: 'input', 
           name: 'enter',
           message: `presione ${'enter'.green} para continuar`
        }

    ];

    await inquirer.prompt(question);
    
}

const leerInput = async (message) => {
    const question = [
    {
        type: 'input', 
        name: 'desc',
        message,
        validate(value){
            if (value.length===0){
                return 'Por favor ingrese una descripcion de la neuva tarea';
            }
            return true;
        }
    }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;

}


    const listadoTareasBorrar = async (tareas = [])=>{ // its dont working this function

        const choices = tareas.map((tarea, i) =>{

            const idx = `${i+1}`.green;
            
            return { 
                value: tarea.id, 
                name: `${idx} ${tarea.desc}`
            }
        });
        //console.log(choices)

        choices.unshift({
            value:'0',
            name: '0.'.green + 'cancelar'
        });

        const pregunta=[
            {
                type: 'list',
                name: 'id',
                message: 'Borrar',
                choices
            }
        ]
    
        const {id} =  await inquirer.prompt(pregunta);
        return id;

        

               

    }
    

    const confirmar = async (message)=>{

        const question =[
            {
                type: 'confirm', 
                name: 'ok',
                message
            }
        ];
        
    const {ok} =  await inquirer.prompt(question);
    return ok;
    }

    const MostrarListadoChecklist = async (tareas = [])=>{ // its dont working this function

        const choices = tareas.map((tarea, i) =>{

            const idx = `${i+1}`.green;
            
            return { 
                value: tarea.id, 
                name: `${idx} ${tarea.desc}`,
                checked: (tarea.completadoEn) ?true : false
            }
        });
        //console.log(choices)

        const pregunta=[
            {
                type: 'checkbox',
                name: 'ids',
                message: 'Selecciones',
                choices
            }
        ]
    
        const {ids} =  await inquirer.prompt(pregunta);
        return ids;

        

               

    }



module.exports ={
    InquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    MostrarListadoChecklist
} 

