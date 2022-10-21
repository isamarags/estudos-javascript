const arrayNums = [1, 2, 3, 4];

function multiplicaporDez(num) {
    return num * 10;
}

const arraySomada = arrayNums.map(multiplicaporDez)

console.log(arraySomada);