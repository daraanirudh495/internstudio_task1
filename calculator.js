let historyList = []; // Array to store calculation history

// Function to append a value to the result
function appendValue(value) {
    const result = document.getElementById("result");
    if (result.value === "0" || result.value === "Error") {
        result.value = value;
    } else {
        result.value += value;
    }
}

// Function to calculate the result and update history
function calculateResult() {
    const result = document.getElementById("result");
    const history = document.getElementById("history");
    try {
        const expression = result.value; // Current expression
        const calculatedValue = eval(expression); // Calculate the result

        // Update the display
        result.value = calculatedValue;

        // Add each calculation to history, formatted line by line
        historyList.push(`${expression} = ${calculatedValue}`);
        history.value = historyList.join("\n"); // Add new lines between entries
    } catch {
        result.value = "Error";
    }
}

// Function to clear the result and history
function clearResult() {
    document.getElementById("result").value = "0";
    historyList = []; // Clear history
    document.getElementById("history").value = ""; // Clear the textarea
}
