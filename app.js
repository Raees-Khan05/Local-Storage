




// practice of the class



// let key = prompt("enter the key you want to add in local storage")
// let value = prompt("enter the value you want to add in local storage")

// localStorage.setItem(key , value)

// alert(`the key is ${key} and the value is ${value}`)  


// localStorage.setItem("email" , "raeesawan00@gmail.com")

// var email = localStorage.getItem("email")
// var todos = localStorage.getItem("todos")
// todos = JSON.parse(todos)
// console.log("todos==>" , todos);

// console.log(email);


// var todos = ["fajar Namaz" , "Tilaawat" , "Sojana" , "Nashta" , "Class"]
// localStorage.setItem('todos' , JSON.stringify(todos))


// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var login_container = document.getElementById("login_container");
// var home_container = document.getElementById("home_container");

// function loginUser() {
//     if(!email || !password)
//         return; alert("please add email and password");
//     localStorage.setItem("email" , email.value);   
// }


// function checkUserLogin() {
//     var email = localStorage.getItem('email');
//     if(email){
//         login_container.style.display = 'none'
//         home_container.style.display = 'block'
//     }else{
        
//         login_container.style.display = 'block'
//         home_container.style.display = 'none'
//     }
// }

// checkUserLogin();



var email = document.getElementById("email");
var password = document.getElementById("password");
var user_email = document.getElementById("user_email");
var login_container = document.getElementById("login_container");
var home_container = document.getElementById("home_container");
var note = document.getElementById("note");

function loginUser() {
  if (!email.value || !password.value)
    return alert("Please add email and password.");
  localStorage.setItem("email", email.value);
  checkIsUserLogin();
}

function checkIsUserLogin() {
  var email = localStorage.getItem("email");
  if (email) {
    login_container.style.display = "none";
    home_container.style.display = "block";
    user_email.innerText = email;
    displayUserNotes();
  } else {
    login_container.style.display = "block";
    home_container.style.display = "none";
  }
}

checkIsUserLogin();

function logout() {
  localStorage.removeItem("email");
  checkIsUserLogin();
}

function submitNote() {
  var email = localStorage.getItem("email");

  var obj = {
    email: email,
    note: note.value,
  };

  saveValueToLocalStorage(obj);
  note.value = "";
}

function saveValueToLocalStorage(obj) {
  var notes = localStorage.getItem("notes");
  console.log("notes from local storage=>", notes);

  if (notes) {
    notes = JSON.parse(notes);
    notes.push(obj);
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    notes = [obj];
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  displayUserNotes();
}

function displayUserNotes() {
  var notes = localStorage.getItem("notes");
  var list = document.getElementById("list");
  var currentUserEmail = localStorage.getItem("email");

  if (notes) {
    list.innerHTML = "";
    notes = JSON.parse(notes);
    console.log(notes);
    notes.forEach(function (data, ind) {
      console.log("data=>", data);
      if (data.email === currentUserEmail) {
        var liElement = ` <li class="border rounded p-2 my-2">
        <p class = "font-medium">${data.note}</p> 
            <p>${data.email}</p>
          </li>`;
        list.innerHTML += liElement;
      }
    });
  }
}

displayUserNotes();



// function submitNote() {
//     var email = localStorage.getItem("email");
//     var topic = document.getElementById("topic").value; 
  
//     var obj = {
//       email: email,
//       note: note.value,
//       topic: topic 
//     };
  
//     saveValueToLocalStorage(obj);
//     note.value = "";
//     document.getElementById("topic").value = ""; 
//   }

  

//   function displayUserNotes() {
//     var notes = localStorage.getItem("notes");
//     var list = document.getElementById("list");
//     var currentUserEmail = localStorage.getItem("email");
  
//     if (notes) {
//       list.innerHTML = "";
//       notes = JSON.parse(notes);
//       notes.forEach(function (data) {
//         if (data.email === currentUserEmail) {
//           var liElement = `<li class="border rounded p-2 my-2">
//             <p class="font-medium">${data.topic}</p> 
//             <p>${data.note}</p>
//             <p class="text-sm">${data.email}</p>
//           </li>`;
//           list.innerHTML += liElement;
//         }
//       });
//     }
//   }
  