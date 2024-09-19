// Test the Counter component

import Counter from "../components/counter";
import { fireEvent, render } from "@testing-library/react"

// teste(testname, callback function)

test("counter displays the correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />)
    const counterElement = getByTestId("count");
    expect(counterElement.textContent).toBe("0");
});

// identify a button --> getByRole
// check clicking --> fireEvent

test("count should increment by one if the increment is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0}/>)
    const incrementBtn = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toBe(1);
});

test("count should decrement by one if the decrement is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0}/>)
    const decrementBtn = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toBe(-1);
})

//discribe --> without the initial value
describe(Counter, () => {
    it("count should be reset to 0 when click the rest button", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={50}/>) 
        const restartBtn = getByRole("button", { name : "Restart" });
        expect(Number(getByTestId("count").textContent)).toEqual(50);
        fireEvent.click(restartBtn);
        expect(Number(getByTestId("count").textContent)).toEqual(0);
    })
})

describe(Counter, () => {
    it("count should be swap when click the swap button", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={50}/>) 
        const restartBtn = getByRole("button", { name : "Switch" });
        expect(Number(getByTestId("count").textContent)).toEqual(50);
        fireEvent.click(restartBtn);
        expect(Number(getByTestId("count").textContent)).toEqual(-50);
    })
})

test("hello should be display when click on the hello button", () => {
    const { getByTestId } = render(<Counter initialCount={"Hello"}/>) 
    const counterElement = getByTestId("count")
    expect(counterElement.textContent).toBe("Hello")
});




