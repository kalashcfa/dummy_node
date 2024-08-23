const fs = require('fs');
const path = require('path');

const filepath = path.join('./content' ,'bidtext.txt')
for(let i = 0 ;i<100000 ; i++)
{
    fs.writeFileSync(
        filepath,
        `hello World ${i} \n `,
        {flag : 'a'}
    )
}