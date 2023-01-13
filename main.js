let array = [];

for(let i = 0; i < Infinity; i++) {
    let command = prompt('Введите (команда, текст)');
    let a = command.split(', ');
    if(a[0] == 'add') {
        array.push(a[1]);
    } if(a[0] == 'del') {
        for(let key in array) {
            array[key] == a[1] ? array.splice(key, 1) : '';
        }
    } if(command == 'stop') {
        break;
    }
    console.log(array);
}