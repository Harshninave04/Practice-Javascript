const user = {
  username: "Harsh Ninave",
  email: "harsh.ninave@gmail.com",
  loggedIn: true,
  loginCount: 10,

  Getuserdetails: function () {
    console.log(`username is ${this.username}`);
    console.log(
      `How many times ${this.username} has been LoggedIn? ${this.loginCount} times ${this.username} loggedIn in the server.`
    );
  },
};

console.log(user.username);
console.log(user.Getuserdetails());
