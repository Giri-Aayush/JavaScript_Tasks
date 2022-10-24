function sumOfSalaries(obj){
    let sum = 0;
    for(let key in obj){
        sum+=obj[key];
    }
    return sum;
}


let salaries1 = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let salaries2 = {};


alert(sumOfSalaries(salaries1));
alert(sumOfSalaries(salaries2));