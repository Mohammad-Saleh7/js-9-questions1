//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
//!  Answer:
function moreThanSix(char) {
    const sixChar =char.filter(el => el.length > 6)
    return sixChar.every(el => el.length < 10)
    
}
console.log(moreThanSix(array));
