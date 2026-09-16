## Project: JavaScript Calculator

A web-based, interactive calculator built using **HTML, CSS, and pure JavaScript**. This project focuses on DOM manipulation, state tracking, and implementing core mathematical logic sequentially.

### Core Features
*   **Basic Math Operations:** Functions to support addition, subtraction, multiplication, and division.
*   **Dynamic Operations Engine:** A central `operate()` function that evaluates an operator alongside two input numbers.
*   **Interactive UI:** Fully functional calculator display, digit buttons, operation keys, and a `Clear` button.
*   **Dynamic Display:** Real-time visual updates as users enter numbers and operations.

### Key Logic & Technical Challenges
*   **State Management:** Accurately stores the first input number, the selected operator, and sequential entries to perform math calculations on command.
*   **Chained Operations:** Built-in logic to evaluate successive operations dynamically. For example, entering `12 + 7 - 5 * 3 =` correctly evaluates a single pair at a time to yield `42`.
*   **Immediate Evaluation:** When a second operator is pressed (e.g., `12 + 7 -`), the calculator instantly evaluates the first pair (`19`) and uses that result as the starting value for the next operation.

Link: https://adefreitas246.github.io/calculator-assignment/
