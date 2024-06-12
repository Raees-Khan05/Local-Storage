




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
var subject = document.getElementById("subject");
var note = document.getElementById("note");

function loginUser() {
  if (!email.value || !password.value) {
    return alert("Please add email and password.");
  }
  localStorage.setItem("currentUser", email.value);
  checkIsUserLogin();
}

function checkIsUserLogin() {
  var currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    login_container.style.display = "none";
    home_container.style.display = "block";
    user_email.innerText = currentUser;
    displayUserNotes();
  } else {
    login_container.style.display = "block";
    home_container.style.display = "none";
  }
}


checkIsUserLogin();

function logout() {
  localStorage.removeItem("currentUser");
  checkIsUserLogin();
}

function submitNote() {
  var currentUser = localStorage.getItem("currentUser");

  var obj = {
    subject: subject.value,
    note: note.value,
  };

  saveValueToLocalStorage(currentUser, obj);
  subject.value = "";
  note.value = "";
}

function saveValueToLocalStorage(email, obj) {
  var userNotes = localStorage.getItem(email);

  if (userNotes) {
    userNotes = JSON.parse(userNotes);
    userNotes.push(obj);
    localStorage.setItem(email, JSON.stringify(userNotes));
  } else {
    userNotes = [obj];
    localStorage.setItem(email, JSON.stringify(userNotes));
  }

  displayUserNotes();
}

function displayUserNotes() {
  var currentUser = localStorage.getItem("currentUser");
  var userNotes = localStorage.getItem(currentUser);
  var list = document.getElementById("list");

  if (userNotes) {
    list.innerHTML = "";
    userNotes = JSON.parse(userNotes);
    userNotes.forEach(function (data, ind) {
      var liElement = `<li class="border rounded p-2 my-2">
        <p><b>Subject:</b> ${data.subject}</p>
        <p>${data.note}</p>
      </li>`;
      list.innerHTML += liElement;
    });
  } else {
    list.innerHTML = "<p>Notes will appear here.</p>";
  }
}



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
  