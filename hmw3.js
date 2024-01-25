let question = prompt("who's there?");
if (question == "Admin") {
  let password = prompt("Please Enter the password");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (question === "" || question === null) {
  alert("Canceled");
} else {
  alert("I dont know you");
}
