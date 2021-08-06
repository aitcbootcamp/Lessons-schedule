class Person {
    constructor(name, id, subjects = []) {
        this.name = name;
        this.id = id;
        this.groupIDs = [];
        this.subjects = subjects;
    }

    getDateTimes(groups) {
        let dateTimes = [];
        for (let g of this.groupIDs) {
            for (let group of groups) {
                if (g == group.id) {
                    dateTimes.push(group.dateTime);
                }
            }
        }
        return dateTimes;
    }

    getChosenSubjects(groups) {
        let chosenSubjects = [];
        for (let g of this.groupIDs) {
            for (let group of groups) {
                if (g == group.id && !chosenSubjects.includes(group.subject)) {
                    chosenSubjects.push(group.subject);
                }
            }
        }
        return chosenSubjects;
    }


    isFree(time, groups) {
        if (this.getDateTimes(groups).includes(time)) {
            return false;
        } else {
            return true;
        }
    }

}

class Student extends Person {
    constructor(name, id, subjects) {
        super(name, id, subjects);
    }

}

// date და time-ს ცალკე არანაირი აზრი არ აქვს და გავაერთიანე მაინც -_-

class Teacher extends Person {
    constructor(name, id, subjects) {
        super(name, id, subjects);
    }

}

class Group {
    constructor(id, teacherID, subject, room, dateTime, memberIDs) {
        this.id = id;
        this.teacherID = teacherID;
        this.subject = subject;
        this.room = room;
        this.dateTime = dateTime;
        this.memberIDs = memberIDs;
    }

    //დარწმუნებული არ ვარ რო ეს მეთოდი კარგი იდეაა, მარა იყოს ასე

    isFull() {
        if (this.memberIDs.length >= 7) {
            return true;
        } else {
            return false;
        }
    }
}


let groups = [];
let students = [];
let teachers = [];

let nathaniel = new Student('ნათანიელ სქაი', '1', [], [], 'აბიტურიენტი');
let annie = new Student('ანი ჩანი', '2', [], [], 'საატესტატო');

let group1 = new Group(1, 'მაია', 'ქართული', '203', 'ორშაბათი, 13:00', [], 'საატესტატო');
groups.push(group1);
let group2 = new Group(2, 'მაგდა', 'მათემატიკა', '204', 'ორშაბათი, 15:00', [], 'საატესტატო');
groups.push(group2);



function removeStudent(studentID) {
    let student = students.find(e => e.id == studentID);
    for (let i = 0; i < student.groupIDs; i++) {
        let group = groups.find(group => group.id === student.groupIDs[i]);
        let studentId = group.memberIDs.find(id => id == student.id);
        group.memberIDs.splice(group.memberIDs.indexOf(studentId), 1);
    }
    students.splice(students.indexOf(student), 1);
}




function addStudent(id, name, group) {
    let stud = new Student(id, name, group);
    let filter = students.filter(e => e.id == stud.id);
    if (filter.length() == 0) {
        students.push(stud);
    } else {
        console.log('სტუდენტი ამ ID-ით უკვე არსებობს');
    }
}

let filterBySubject = subject => {
    return students.filter(student => student.getSubjects().includes(subject));
};

getFilteredTeachersBySubject = subject => {
    return teachers.filter(teacher => teacher.getSubjects().includes(subject));
};
//ამას მოდიფიკაცია შეიძლება დაჭირდეს
addTeacherToGroup = (teachID, groupID) => {
    let teacher = teachers.find(e => e.id == teachID);
    let group = groups.find((e = e.id == groupID));
    if (group.teacherID == undefined || group.teacherID == null) {
        group.teacherID = teacherID;
    } else {
        alert('აგი რა არის სიმონ');
    }
};



//



let popup = document.querySelector(".popup")

let openBtn = document.querySelector(".btn-2")

let popUpBtn = document.querySelector("#popUpbtn")

let closeIcon = document.querySelector(".close")

openBtn.onclick = function () {
    popup.style.display = "block";
};




closeIcon.onclick = function () {
    popup.style.display = "none";
    popUpBtn.disabled = false
};




function addStudent(name, id, subjects) {
    let stud = new Student(name, id, subjects);

    let filter = students.filter(e => e.id == stud.id);
    if (filter.length == 0) {
        students.push(stud);
    } else {
        console.log('სტუდენტი ამ ID-ით უკვე არსებობს');
    }
    console.log(students);
}




let saveData = () => {
    localStorage.setItem("teachers-data", JSON.stringify(teachers));
    localStorage.setItem("students-data", JSON.stringify(students));
    localStorage.setItem("groups-data", JSON.stringify(groups));
}

let getData = () => {
    let teachersData = localStorage.getItem("teachers-data");
    teachers = JSON.parse(teachersData);

    let studentsData = localStorage.getItem("students-data");
    students = JSON.parse(studentsData);

    let groupsData = localStorage.getItem("groups-data");
    groups = JSON.parse(groupsData);
}

getData()


let inputNameGlobal = document.querySelector("#inputName").value;
let allSubjectsGlobal = document.querySelectorAll(".subjects");



let addStudentToArray = () => {
    console.log(students);
    let inputName = document.querySelector("#inputName").value;
    let allSubjects = document.querySelectorAll(".subjects");
    let id = "100" + Math.floor((Math.random() * 100) + (Math.random() * 100));
    let selectedSubjects = []

    for (let i = 0; i < allSubjects.length; i++) {
        if (allSubjects[i].checked) {
            selectedSubjects.push(allSubjects[i].getAttribute("id"))
        }
    }

    if (selectedSubjects.length == 0 || inputName == "") {
        popUpBtn.disabled = true

        console.log("სტუდენტი ვერ დაემატა, შეავსეთ სტუდენტის სახელი და სასურველი საგნების ჩამონათვალი")
    }
    else {
        addStudent(inputName, id, selectedSubjects);
        popUpBtn.disabled = false

    }


    saveData();
}

popUpBtn.addEventListener("click", addStudentToArray);


console.log(students)




