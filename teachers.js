
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
teachers[0].groupIDs.push("1","2");
let moreTeacherInfo = (event) => {
    let info = document.querySelector(".teacher-info");
    info.style.display = "block";

    let id = event.path[0].nextElementSibling.getAttribute("id");
    let teacher = teachers.find(teacher => teacher.id === id);
    info.children[1].textContent = "სახელი: " + teacher.name;
    info.children[2].textContent = "საგნები: " + teacher.subjects.join(", ");

    let list = document.querySelector(".teacher-info");
    if(list.children.length > 4 ){
        let ul = document.querySelector(".ganrigi");
        ul.remove();
    }
    let ul = document.createElement("ul");
    ul.classList.add("ganrigi");
    info.appendChild(ul);

    for(let id of teacher.groupIDs){
        let group = groups.find( group => group.id === id);
        let li = document.createElement("li");
        li.textContent = group.subject + " - " + group.dateTime + " - ოთახი: " + group.room;
        ul.appendChild(li);
    }
}

let downInfo = element => {
    let parent = element.parentElement;
    parent.style.display = "none";
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

let createTeacher = () => {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    let input = document.getElementsByClassName("inputs");
    for (let i = 0; i < input.length; i++) {
        input[i].setAttribute("required", "");
    }

    let span = document.getElementsByClassName("close")[1];

    span.onclick = function () {
        modal.style.display = "none";
    };
}  

let addTeacher = () => {
    let nameInputValue = document.getElementById("name").value;
    let surnameInputValue = document.getElementById("surname").value;
    let fullName = nameInputValue + " " + surnameInputValue;
    let id = Math.round(new Date().getTime() + Math.random() * 100);

    let checkedItemsArray = [];
    let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  
    for (let i = 0; i < checkboxes.length; i++) {
      checkedItemsArray.push(checkboxes[i].value);
    }
  
    let newTeacher = new Teacher(fullName, id, checkedItemsArray);
    teachers.push(newTeacher);
    // saveData();
    createTeacherList();
    modal.style.display = "none";
}  

function handleData() {
    let form_data = new FormData(document.querySelector("form"));
    if (!form_data.has("subjects[]")) {
      document.getElementById("chk_option_error").style.visibility = "visible";
    } else {
      document.getElementById("chk_option_error").style.visibility = "hidden";
      addTeacher();
    }
    return false;
}
