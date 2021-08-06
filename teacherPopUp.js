// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

//Get the button Which adds Teacher
let modalAddButton = document.getElementById("modalButton");

//getting input elements

let nameField = document.getElementById("name");
let surnameField = document.getElementById("surname");
let subjectsField = document.getElementById("subject");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  // attach event listener to the inputs
  let input = document.getElementsByClassName("inputs");
  for (var i = 0; i < input.length; i++) {
    input[i].setAttribute("required", "");
  }
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//create an empty teachers' array
let teachers = [];

//creating  a teacher class
class Teacher {
  constructor(fullName, id, subjects) {
    this.name = fullName;
    this.id = id;
    this.subjects = subjects;
  }
}

/*adding teacher to the array when manager clicks the button*/

let addTeacher = () => {
  //get values from inputs
  let nameInputValue = document.getElementById("name").value;
  let surnameInputValue = document.getElementById("surname").value;
  let fullName = nameInputValue + " " + surnameInputValue;
  let subjectInputValue = document.getElementById("subject").value;
  let id = Math.round(new Date().getTime() + Math.random() * 100);

  //create teacher object
  let newTeacher = new Teacher(fullName, id, subjectInputValue);

  // pusshing new teacher object to the teachers's array
  teachers.push(newTeacher);

  /*removing teachers*/
  //   let removeTeacher = (getClickedElementID) => {
  //     let teacher = teachers.find(
  //       (teacher) => teacher.id === getClickedElementID
  //     );
  //     for (let i = 0; i < groups.length; i++) {
  //       if (groups[i].newTeacherID === newTeacher.ID) {
  //         groups[i].newTeacherID = null;
  //       } else {
  //         continue;
  //       }
  //     }
  //   };
  //   teachers.splice(teachers.indexOf(newTeacher), 1);
  //   removeTeacher();
};

/* when clicking on the add button */

let preventRefreshing = (event) => {
  event.preventDefault();
};

//getting the form
let form = document.getElementById("modalForm");

//attach event listener to the form
form.addEventListener("submit", preventRefreshing, true);

//add teacher and close the modal
let clickedAddButton = () => {
  addTeacher();
  //close the modal after add button is clicked
  modal.style.display = "none";
};
