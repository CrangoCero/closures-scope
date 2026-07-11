function greetings() {
  let username = "Laura";
  return function displayUserName() {
    return `Hello ${username}`;
  };
}

const greeting = greetings();
console.log(greeting);
console.log(greeting());
