let stack = [];

function pushToStack() {
    const input = document.getElementById('stackInput').value;
    if (input) {
        stack.push(input);
        document.getElementById('stackInput').value = '';
        displayStack();
    }
}

function popFromStack() {
    if (stack.length > 0) {
        stack.pop();
        displayStack();
    }
}

function displayStack() {
    const stackDisplay = document.getElementById('stackDisplay');
    stackDisplay.innerHTML = stack.join('<br>');
}