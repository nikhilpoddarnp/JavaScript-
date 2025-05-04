// 1.

const promiseOne = new Promise(function (resolve, reject) {
  //it is not nessary to store the promise in a variable
  //Do an async task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// 2.

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

// 3.

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Rakesh", email: "rakesh@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  //user catch the object para of resolve
  console.log(user);
});

// 4.  then catch finally

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // here we get two output one for true and one for false
    if (!error) {
      resolve({ username: "Rakesh", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolve or rejected"));

//.5  async await  try catch

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // here we get two output one for true and one for false
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();


// 6.


// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/nikhilpoddarnp");
//     const data = await response.json(); // here we use await to get the data quickely
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();

fetch("https://api.github.com/users/nikhilpoddarnp")
.then((response) => {
  return response.json()
})
.then((data) =>{
  console.log(data);
  
})
.catch((error) => console.log(error))