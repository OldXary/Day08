var sum = 0;

function addThree() {
sum += 3;
}

function addFive() {
    sum =+ 5;

}
console.log(addThree());
console.log(addFive());
module.exports = {
    addThree,
    addFive
};