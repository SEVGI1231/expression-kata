import { evaluate, Expression, SimplifiedExpression, apply } from "./expressions";
describe("expression evaluation", () => {
    test("expression works with a literal", () => {
        const tree1: Expression = 10;
        expect(evaluate(tree1)).toBe(10);
    });

    test("single expression works", () => {
        const tree1: Expression = { op: "add", a: 10, b: 20 };
        expect(evaluate(tree1)).toBe(30);
    });

    test("nested expression works", () => {
        const tree1: Expression = {
            op: "add",
            a: 10,
            b: { op: "subtract", a: 100, b: 3 },
        };
        expect(evaluate(tree1)).toBe(107);
    });

    test("big nested expression works", () => {
        const tree1: Expression = {
            op: "add",
            a: { op: "multiply", a: { op: "divide", a: 10, b: 2 }, b: 3 },
            b: { op: "subtract", a: 3, b: 8 },
        };
        expect(evaluate(tree1)).toBe(10);
    });

    test("test for tree3", () => {
        const tree3: Expression = {
            op: "multiply",
            a: { op: "add", a: 1, b: 3 },
            b: { op: "subtract", a: 7, b: { op: "subtract", a: 20, b: 18 } },
        };
        expect(evaluate(tree3)).toBe(20);
    });
   
});
describe("simple expression evaluation", () => {
    test ("test for simplified Obj", ()=>{
        const simpleTree: SimplifiedExpression={
            op: "add",
            a: 1,
            b: 5
        };
        expect(apply(simpleTree)).toBe(6)
    })
});
