
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Getting Modal Divs
var fullNameDiv = document.getElementById("fullname");
var groupDiv = document.getElementById("group");
var subjectsDiv = document.getElementById("subjects");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
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


//getting id of the clicked element
let gettingId = ()=> {
  document.addEventListener('click', function(e) {
  alert( e.target.id );
}, false)};

//find student's object using  id
let getTeacherInfo = (gettingId) => {
  let teacher = teachers.find((teacher) => teacher.id === gettingId);
  fullNameDiv.textContent = teacher.name + " " + teacher.surname;
  groupDiv.textContent = teacher.group;
  subjectsDiv.textContent = teacher.subjects;
};




