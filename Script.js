function checkAge(age) {
    if (age < 18) return "Denied";
    return "Allowed";
}

console.log(checkAge(20)); // Allowed
console.log(checkAge(16)); // Denied