/*ეს არის კოდი :D*/
//კოდი დაწყებულია და რომ დამთავრდება, დავწერ

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

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
  let id = Math.round(new Date().getTime() + Math.random() * 100);

  //get checkbox values
  var checkedItemsArray = [];
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    checkedItemsArray.push(checkboxes[i].value);
  }

  //create new teacher object

  let newTeacher = new Teacher(fullName, id, checkedItemsArray);

  // pushing new teacher object to the teachers's array
  teachers.push(newTeacher);

  //close modal after submitting
  modal.style.display = "none";
};

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

/* check if there is any missing checkbox and depending on it, add teacher on the teacher's array*/
function handleData() {
  var form_data = new FormData(document.querySelector("form"));
  if (!form_data.has("subjects[]")) {
    document.getElementById("chk_option_error").style.visibility = "visible";
  } else {
    document.getElementById("chk_option_error").style.visibility = "hidden";
    addTeacher();
  }
  return false;
}

/*კოდი დასრულდა*/
