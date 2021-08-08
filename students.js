let createStudentList = () =>{
    let studentsList = document.querySelector(".students-table"); // მშობელი დივი რომელშიც მთლიანი სტუდენტების სია იქნება მოთავსებული
    for(let i = studentsList.children.length-1; i < students.length; i++){ // studentsList.children.length-1 - ეს ნიშნავს რომ რომელი სტუდენტებიც უკვე არის Domსიაში ისინი აღარ ჩაამატოს
        let row = document.createElement("div"); // შევქმენი ელემენტი რომელშიც ერთი სტრიქონი იქნება მოთავსებული, ანუ ერთი სტუდენტის.
        row.classList.add("row");

        let name = document.createElement("div");// ელემენტი რომელშიც ეწერება სტუდენტის სახელი
        name.classList.add("col-md-4", "students-table-cols");
        name.textContent = students[i].name;

        row.appendChild(name);

        let subjects = document.createElement("div"); //ელემენტი რომელშიც ეწერება სასურველი საგნები
        subjects.classList.add("col-md-5", "students-table-cols");
        subjects.textContent = students[i].subjects.join(", ");

        row.appendChild(subjects);

        let info = document.createElement("span"); // დამატებითი ინფორმაციის ნახვის ბათონი, კლიკის ფუნქციას ერქმევა moreSudentInfo შემდეგში გამოსაყენებლად
        info.classList.add("col-md-2", "students-table-cols", "btn-3");
        info.textContent = "დეტალურად";
        info.addEventListener("click", moreStudentInfo);

        row.appendChild(info);

        let delButton = document.createElement("span");
        delButton.classList.add("col-md-1", "students-table-cols", "btn-3");
        delButton.textContent = "X";
        delButton.style.background = "red";
        delButton.setAttribute("id", students[i].id)
        delButton.addEventListener("click", deleteStudent);
        row.appendChild(delButton);

        studentsList.appendChild(row);
    }
}

let moreStudentInfo = (event) => {//დამატებითი ინფორმაციის პოპაპი
    let modal = document.getElementById("myModal");
    
    modal.style.display = "block";

    let span = document.getElementsByClassName("close")[0];

    let fullNameDiv = document.getElementById("fullname");
    let subjectsDiv = document.getElementById("subjects");
    
    span.onclick = function () {
    modal.style.display = "none";
    };

    let id = event.path[0].nextElementSibling.getAttribute("id");

    let student = students.find((student) => student.id === id);
    fullNameDiv.textContent = "სახელი: " + student.name;
    subjectsDiv.textContent = "საგნები: " + student.subjects.join(", ");

    let info = document.querySelector("#Info");
    console.log(info);
    if(info.children.length > 3 ){
        let ul = document.querySelector(".ganrigi");
        ul.remove();
    }
    let ul = document.createElement("ul");
    ul.classList.add("ganrigi");
    Info.appendChild(ul);

    for(let id of student.groupIDs){
        let group = groups.find( group => group.id === id);
        let li = document.createElement("li");
        li.textContent = group.subject + " - " + group.dateTime + " - ოთახი: " + group.room;
        ul.appendChild(li);
    }
}

let deleteStudent = (event) => { //სტუდენტის წაშლა
    let id = event.path[0].getAttribute("id");
  
    removeStudent(id);
    let row = event.path[1];

    row.classList.add("animation");
    setTimeout(() => {
        row.remove();
    }, 1000);
    // saveData();
}

createStudentList();

function removeStudent(studentId){//სტუდენტის წაშლისას მასივიდან და ჯგუფებიდან ამოშლა აიდის
    let student = students.find(e => e.id === studentId);
     for (let i = 0; i < student.groupIDs.length; i++) {
        let group = groups.find(group => group.id === student.groupIDs[i]);
        let index = group.memberIDs.find(id => id == studentId);
        group.memberIDs.splice(group.memberIDs.indexOf(index), 1);
    }
    students.splice(students.indexOf(student), 1);
}

let createStudent = () => { //add student ღილაკზე დაჭერისას სტუდენტის შექმნის პოპაპი
    let popup = document.querySelector(".popup");
    popup.style.display = "block";
    let popUpBtn = document.querySelector("#popUpbtn");
    popUpBtn.addEventListener("click", addStudentToArray);
    
    let closeIcon = document.querySelector(".close-student");
    closeIcon.onclick = function () {
        popup.style.display = "none";
    };
}

let addStudentToArray = () => { //შექმნისას სტუდენტის ჩამატება მასივში
    let inputName = document.querySelector("#inputName").value;
    let allSubjects = document.querySelectorAll(".subjects");
    let id = "100" + Math.floor((Math.random() * 100) + (Math.random() * 100));
    let selectedSubjects = [];
    for (let i = 0; i < allSubjects.length; i++) {
        if (allSubjects[i].checked) {
            selectedSubjects.push(allSubjects[i].getAttribute("id"))
            allSubjects[i].checked = false;
        }
    }
    if (selectedSubjects.length == 0 || inputName == "") {
        console.log("error"); 
    }else{
        addStudent(inputName, id, selectedSubjects);
        document.querySelector("#inputName").value = "";
        let popup = document.querySelector(".popup");
        popup.style.display = "none";
    }
    createStudentList();
}

function addStudent(name, id, subjects) {
    let stud = new Student(name, id, subjects);
    let filter = students.filter(e => e.id == stud.id);
    console.log(stud);
    if (filter.length == 0) {
        students.push(stud);
    } else {
        console.log('სტუდენტი ამ ID-ით უკვე არსებობს');
    }
}
