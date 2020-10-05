var total = 0;
const argslice = process.argv.slice(2);
argslice.forEach((value) => {
    value = Number(value);
    total = total + value;
})
console.log(total)