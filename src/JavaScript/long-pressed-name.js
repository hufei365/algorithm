/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let len = name.length, tlen = typed.length;
    if (tlen === 0 && len === 0) return true;
    if (tlen === 0 || len === 0) return false;

    let flag = true;
    let i = 0, j = 0;
    while (i < len && j < tlen) {
        if (name[i] === typed[j]) {
            if (++i === len) {
                i--, j++, flag = true;
            } else if (++j === tlen) {
                flag = false;
            } else {
                flag = true;
            }
        } else if (typed[j] === name[i - 1]) {
            j++;
            flag = false;
        } else {
            flag = false;
            break;
        }
    }
    return flag;
};
const test = [
    "vtkgn",
    "vttkgnn",
    "pyplrz",
    "ppyypllr",
    "alex",
    "aaleex",
    "",
    "",
    "abc",
    "",
    "",
    "pyplrz",
    "ppyypllr",
    "aab",
    "saeed",
    "ssaaedd",
    "leelee",
    "lleeelee"
];

const result = [
    true,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    true
];
for (let i = 0; i < test.length - 1; i += 2) {
    console.log(result[Math.floor(i / 2)] === isLongPressedName(test[i], test[i + 1]))
}


