import { evaluate, Expression, apply, Variables } from "./expressions";
describe("expression evaluation", () => {
    test("expression works with a literal", () => {
        const tree1: Expression = "x";
        const vars: Variables={
            x: 10
        }
        expect(evaluate(tree1, vars)).toBe(10);
    });

    test("single expression works", () => {
        const tree1: Expression = { op: "add", a: "x", b: "y" };
        const vars: Variables={
            x: 10,
            y:20
        }
        expect(evaluate(tree1, vars)).toBe(30);
    });

    test("nested expression works", () => {
        const tree1: Expression = {
            op: "add",
            a: 10,
            b: { op: "subtract", a: 100, b: "x" },
        };
        const vars: Variables={
            x: 3
        }
        expect(evaluate(tree1, vars)).toBe(107);
    });

    test("big nested expression works", () => {
        const tree1: Expression = {
            op: "add",
            a: { op: "multiply", a: { op: "divide", a: 10, b: "x" }, b: 3 },
            b: { op: "subtract", a: "z", b: "y" },
        };
        const vars: Variables={
            x: 2,
            y: 8,
            z:3
        }
        expect(evaluate(tree1, vars)).toBe(10);
    });

    test("test for tree3", () => {
        const tree3: Expression = {
            op: "multiply",
            a: { op: "add", a: 1, b: 3 },
            b: { op: "subtract", a: 7, b: { op: "subtract", a: 20, b: 18 } },
        };
        const vars: Variables={
            x: 7
        }
        expect(evaluate(tree3, vars)).toBe(20);
    });
   
});
describe("test apply ", () => {
    test ("test for simplified Obj", ()=>{
        
        expect(apply("add", 1, 5)).toBe(6)
    })
});
