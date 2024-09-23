// function generateTree(length: number){
//     for(let i = 1; i < length; i++){
//         console.log('.'.repeat(i))
//     }
// }

// generateTree(25);

function generateTriangle(length:  number){
    let line = ''
    for(let i = 1; i < length; i++){
        line += '.'
        console.log(line)
    }
}

generateTriangle(25)