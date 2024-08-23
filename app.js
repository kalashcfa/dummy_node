const file = require ('fs');
const utils = require('util')
const PATH = require('path');


const readFilePromise = utils.promisify(file.readFile);
const writeFilePromise = utils.promisify(file.writeFile);

const filePath1 = PATH.join('./content','first.txt')
const filePath2= PATH.join('./content','second.txt')

// const getFile = (path) =>
// {
//     return new Promise ((resolve , reject) =>
//     {
//         file.readFile(path , 'utf-8' , (err , res)=>
//         {
//             if(err)
//             {
//                 reject(err)
//             }
//             else
//             {
//                 resolve(res)
//             }
//         })
//     })
// }


const start =  async ()=>
    {
        try
        {
            const first = await readFilePromise(filePath1, 'utf-8');
            const seconnd = await readFilePromise(filePath2, 'utf-8') 
            console.log('file data :',first, ' \n', seconnd)
        }
        catch(err) 
        {
            console.log(err)
        }
    } 

start()