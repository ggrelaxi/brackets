module.exports = function check(str, bracketsConfig) {
    const opened = [];
    const closed = [];

    bracketsConfig.forEach((item) => {
        const [open, close] = item;
        opened.push(open);
        closed.push(close);
    });

    if (str.length <= 1) return true;
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let currentBracket = str[i];
        if (opened.includes(currentBracket) && !closed.includes(currentBracket)) {
            stack.push(currentBracket);
        } else if (opened.includes(currentBracket) && closed.includes(currentBracket)) {
            if (stack[stack.length - 1] !== currentBracket) {
                stack.push(currentBracket);
            } else {
                stack.pop();
            }
        } else {
            let current = stack.pop();
            if (!current) return false;

            if (opened.indexOf(current) !== closed.indexOf(currentBracket)) return false;
        }
    }
    return stack.length === 0;
};
