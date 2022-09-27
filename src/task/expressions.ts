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
    | { op: Operator; a: Expression; b: Expression };


function evaluate(exp: Expression): number {
    if (typeof exp === 'number'){
        return exp 
    }
    else if (typeof exp.a === "number" && typeof exp.b==="number"){
        return apply({op:exp.op, a:exp.a, b:exp.b})
    }
    let numA= evaluate(exp.a)
    let numB= evaluate(exp.b)
    return apply({op:exp.op, a:numA, b:numB})
   
}
export type SimplifiedExpression=
    {op: Operator; a: number; b:number}

export function apply(exp: SimplifiedExpression): number{
    if (exp.op==="multiply"){
        return exp.a*exp.b
    }
    else if (exp.op==="add"){
        return exp.a+exp.b
    }
    else if (exp.op==="subtract"){
        return (exp.a-exp.b)
    }
    else {
        return (exp.a/exp.b)
    }
}

export { evaluate };
