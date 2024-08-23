// const file = require ('fs');
// const utils = require('util')
// const PATH = require('path');


// const readFilePromise = utils.promisify(file.readFile);

// const filePath1 = PATH.join('./content','first.txt')
// const filePath2= PATH.join('./content','second.txt')

// // const getFile = (path) =>
// // {
// //     return new Promise ((resolve , reject) =>
// //     {
// //         file.readFile(path , 'utf-8' , (err , res)=>
// //         {
// //             if(err)
// //             {
// //                 reject(err)
// //             }
// //             else
// //             {
// //                 resolve(res)
// //             }
// //         })
// //     })
// // }


// const start =  async ()=>
//     {
//         try
//         {
//             const first = await readFilePromise(filePath1, 'utf-8');
//             const seconnd = await readFilePromise(filePath2, 'utf-8') 
//             console.log('file data :',first, ' \n', seconnd)
//         }
//         catch(err) 
//         {
//             console.log(err)
//         }
//     } 
// start()

const eventEmitter = require('events');

const customEvent = new eventEmitter();

customEvent.on('response',(name , id)=>
    {
        console.log('data recevied' ,name , id)
    })
    
customEvent.on('response',()=>
        {
            let a = 100;
            let b = 20 ; 
            console.log('data :' , a*b)
        })
        
customEvent.emit('response' , 'john' , 34)
