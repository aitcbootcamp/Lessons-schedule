
let createTeacherList = () => {
    getData();
    let teachersList = document.querySelector(".teachers-table"); 

    for(let i = teachersList.children.length-1; i < teachers.length; i++){ 
        let row = document.createElement("div"); 
        row.classList.add("row");

        let name = document.createElement("div");
        name.classList.add("col-md-4", "teachers-table-cols");
        name.textContent = teachers[i].name;

        row.appendChild(name);

        let subjects = document.createElement("div");
        subjects.classList.add("col-md-4", "teachers-table-cols");
        subjects.textContent = teachers[i].subjects.join(", ");

        row.appendChild(subjects);

        let info = document.createElement("apan");
        info.classList.add("col-md-3", "teachers-table-cols", "btn-3");
        info.textContent = "დეტალურად";
        info.addEventListener("click", moreTeacherInfo);

        row.appendChild(info);

        let delButton = document.createElement("span");
        delButton.classList.add("col-md-1", "teachers-table-cols", "btn-3");
        delButton.textContent = "X";
        delButton.style.background = "red";
        delButton.setAttribute("id", teachers[i].id)
        delButton.addEventListener("click", deleteTeacher);
        row.appendChild(delButton);

        teachersList.appendChild(row);
    }
}

let moreTeacherInfo = () => {
    //ამ ფუნქციის აღწერის გარეშე აგდებს ერორს
}

let deleteTeacher = (event) => {
    let id = event.path[0].getAttribute("id");
  
    removeTeacher(id);
    let row = event.path[1];

    row.classList.add("animation");
    setTimeout(() => {
        row.remove();
    }, 1000);
    // saveData();
}

createTeacherList();

function removeTeacher(getClickedElementID) {
    let teacher = teachers.find((teacher) => teacher.id === getClickedElementID);
    for (let i = 0; i < groups.length; i++) {
      if (groups[i].teacherID === teacher.ID) {
        groups[i].teacherID = null;
      }
    }
    teachers.splice(teachers.indexOf(teacher), 1);
  }

