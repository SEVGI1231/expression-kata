export type Operator = "add" | "subtract" | "divide" | "multiply";
/*
high level pseudo 
execute result = a op b 
return result
DETAILED PSEUDO
if type of exp == number 
return number 
if else type of exp.a and exp.b === number 
execute answer= (a translateOpIntoCode(op) b) 
return answer 
if else type of exp.a === expression 

HELPER FUNC translateOpIntoCode(op): string{
    if op === "subract"
        return - 
    if else op=== "add"
        return +
    if else op === "multiply"
        return *
    else return /
}
*/

export type Expression =
    | number
    | string
    | { op: Operator; a: Expression; b: Expression };

export type Variables= {[key:string]:number}

// function evaluate(exp: Expression): number {
//     if (typeof exp === 'number'){
//         return exp 
//     }
//     let numA= evaluate(exp.a)
//     let numB= evaluate(exp.b)
//     return apply(exp.op, numA, numB)  
// }

function evaluate(exp: Expression, vars:Variables):number{
    if (typeof exp === 'number'){
        return exp 
    }
    if (typeof exp === "string"){
        return vars[exp]
    }
    let numA= evaluate(exp.a, vars)
    let numB= evaluate(exp.b, vars)
    return apply(exp.op, numA, numB) 
}

export function apply(op:Operator, a:number, b:number): number{
    if (op==="multiply"){
        return a*b
    }
    else if (op==="add"){
        return a+b
    }
    else if (op==="subtract"){
        return (a-b)
    }
    else {
        return (a/b)
    }
}


export { evaluate };
