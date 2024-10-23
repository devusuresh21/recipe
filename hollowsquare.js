


let size = 5;

for(let i = 0;i < size; i++){
    let line = '';

    for(let j = 0; j < size; j++){
        if(i === 0 || i === size - 1|| j === 0 || j === size - 1){
            line += '*';

        }else{
            line += ' ';
        }
        if(j < size-1){
            line += '  ';
        }
    }
    console.log(line);
    
    
}