

interface DosNumerosFunc{
    (num1:number, num2:number): number
}

let sumar:DosNumerosFunc;

sumar = function(a:number, b:number):number{
    return a + b;
}


let restar:DosNumerosFunc;

restar = function(a:number, b:number):number{
    return a - b;
}



