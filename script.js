function checkAge(age) {
  if (age < 18) {
    throw new Error("Underage!");
  }
  return "Allowed";
}

try {
  checkAge(15);
} catch (e) {
  console.error(e.message);
}
