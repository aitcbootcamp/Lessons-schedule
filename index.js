class Person {
  constructor(name, id, subjects=[]){
    this.name = name;
    this.id = id;
    this.groupIDs = [];
    this.subjects = subjects;
  }

  getDateTimes(groups){
    let dateTimes = [];
    for (let g of this.groupIDs){
      for (let group of groups){
        if(g == group.id){
          dateTimes.push(group.dateTime);
        }
      }
    }
    return dateTimes;
  }

  getChosenSubjects(groups){
    let chosenSubjects = [];
    for (let g of this.groupIDs){
      for(let group of groups){
        if(g == group.id && !chosenSubjects.includes(group.subject)){
          chosenSubjects.push(group.subject);
        }
      }
    }
    return chosenSubjects;
  }


  isFree(time, groups){
    if(this.getDateTimes(groups).includes(time)){
      return false;
    } else {
      return true;
    }
  }

}

class Student extends Person{
  constructor(name, id, subjects) {
    super(name, id, subjects);
  }

}

// date და time-ს ცალკე არანაირი აზრი არ აქვს და გავაერთიანე მაინც -_-

class Teacher extends Person{
  constructor(name, id, subjects) {
    super(name, id, subjects);
  }

}

class Group {
  constructor(id, room, dateTime) {
    this.id = id;
    this.teacherID = '';
    this.subject = '';
    this.room = room;
    this.dateTime = dateTime;
    this.memberIDs = [];
  }

  //დარწმუნებული არ ვარ რო ეს მეთოდი კარგი იდეაა, მარა იყოს ასე

  isFull(){
    if(this.memberIDs.length>=7){
      return true;
    } else {
      return false;
    }
  }
}


groups = [];
students = [];
teachers = [];

let nathaniel = new Student('ნათანიელ სქაი', '1', ['ქართული', 'ინგლისური', 'მათემატიკა']);
students.push(nathaniel);
let annie = new Student('ანი ჩანი', '2', ['ქართული', 'ინგლისური']);
students.push(annie);
let marMB = new Student('მარეხი ბათერფლაი', '3', ['ქართული', 'მათემატიკა', 'უნარები']);
students.push(marMB);
let ninia = new Student('ნინია იოგა', '5', ['ინგლისური', 'უნარები']);
students.push(ninia);
let heleni = new Student('ელენი გლინტვეინი', '4', ['ინგლისური', 'ქართული']);
students.push(heleni);
let khatia = new Student('ხატია კომპსონი', '5', ['მათემატიკა', 'უნარები', 'ინგლისური']);
students.push(khatia);
let sofie = new Student('სოფი სტავროგინი', '6', ['მათემატიკა', 'ქართული']);
students.push(sofie);
let berika = new Student('ბერიკა ევოლუცია', '7', ['group0', 'group1', 'group2'], ['ინგლისური', 'უნარები']);
students.push(berika);
let tornike = new Student('თორნიკე ჰაიკინგ', '8', ['მათემატიკა', 'უნარები']);
students.push(tornike);
let alexander = new Student('სანდრო პინკფლოიდ', '9', ['ინგლისური', 'უნარები', 'ქართული']);
students.push(alexander);


let teacher1 = new Teacher("როდამი ლელაძე", "1", ["ქართული", 'ინგლისური']);
teacher1.groupIDs = ['group0', 'group1'];
teachers.push(teacher1);
let teacher2 = new Teacher("ნინო ადამოვი", "2", ["ფიზიკა"]);
teachers.push(teacher2);
let teacher3 = new Teacher("მანონი რუტინული", "3", ["ქიმია"]);
teachers.push(teacher3);
let teacher4 = new Teacher("ემი რუდროვი", "4", ["ინგლისური"]);
teachers.push(teacher4);
let teacher5 = new Teacher("როდამი აღდგომელაშვილი", "5", ["ქართული"]);
teachers.push(teacher5);
let teacher6 = new Teacher("ემი ალანია", "6", ["ინგლისური"]);
teacher6.groupIDs=['group0', 'group1', 'group2'];
teachers.push(teacher6);
let teacher7 = new Teacher("ემი მოსეშვილი", "7", ["უნარები"]);
teachers.push(teacher7);

let group0 = new Group(
  "group0",
  "304",
  "ორშაბათი, ოთხშაბათი, პარასკევი, 13:20"
);
group0.subject = 'ქართული';
group0.memberIDs = ['1', '5'];
group0.teacherID = '6';
groups.push(group0);



let group1 = new Group(
  "group1",
  "666",
  "სამშაბათი, შაბათი, 16:00",
);
group1.subject = 'მათემატიკა';
group1.memberIDs = ['1', '2', '8'];
group1.teacherID = '3';
groups.push(group1);

let group2 = new Group(
  "group2",
  "186",
  "ორშაბათი, ოთხშაბათი, პარასკევი, 19:40",
);
group2.subject = 'ინგლისური';
groups.push(group2);


let group3 = new Group(
  "group3",
  "203",
  "სამშაბათი, ხუთშაბათი, 11:20",
);
group3.subject = 'უნარები';
groups.push(group3);
group3.teacherID = '2';


nathaniel.groupIDs.push('group1');
nathaniel.groupIDs.push('group2');
ninia.groupIDs.push('group0');
ninia.groupIDs.push('group1');
ninia.groupIDs.push('group2');
berika.groupIDs.push('group1');
heleni.groupIDs.push('group0');
annie.groupIDs.push('group1');
sofie.groupIDs.push('group1');
khatia.groupIDs.push('group0');
alexander.groupIDs.push('group1');
tornike.groupIDs.push('group1');


//ჩვენი ჯავასკრიპტის პოპაპი
popWrap = makePopWrap();

const studentButtons = document.querySelectorAll('.btn-popup');
const teacherButtons = document.querySelectorAll('.popup-teacher');


//student button-ებზე poppup-ის დამატება
studentButtons.forEach(button => {
  button.parentElement.appendChild(popWrap);
})

//teacher button-ებზე poppup-ის დამატება
teacherButtons.forEach(button => {
  button.parentElement.appendChild(popWrap);
});

const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

//pop-up-ის გათიშვის ღილაკისთვის
close.addEventListener('click', ()=>{
  popup.style.display = 'none';
  location.reload();
})


//addTeacher-თვის buttonclick-ი
teacherButtons.forEach(button =>{
  button.addEventListener('click', () => {
    //ეძებს გრუპს, რომელიც ავირჩიეთ
    let group = groups.find(e => e.id == button.parentElement.parentElement.parentNode.id);
    popup.style.display = 'block';
    popup.style.zIndex = '1';
    //ქმნის მასივს მასწავლებლების ვისაც შეუძლია ამ საგნის სწავლება
    let teachSubj = teachers.filter(e => e.subjects.includes(group.subject) && !e.getDateTimes(groups).includes(group.dateTime));
    //ქმნის ul-ს ამ მასწავლებლების მასივის ეკრანზე გამოსატანად
    createUL(teachSubj, 'addTeacherBtn');
    //popup-ის add-ით მასწ-ის ჩამატება
    //მასწავლებელს თუ არ სცალია, არ მოხვდება ფილტრში, ამიტომ მაგას აღარ ვამოწმებ
    const addTeacherBtns = document.querySelectorAll('.addTeacherBtn');
    addTeacherBtns.forEach(addTeacherBtn =>{
      addTeacherBtn.addEventListener('click', () => {
        let teacher = teachers.find(e=>e.id == addTeacherBtn.id);
        addTeacherToGroup(group, teacher)
        //ეს შეიძლება აღარ დაჭირდეს
        addTeacherBtn.parentElement.parentElement.remove();
//        location.reload();
      })
    })
  })
})

studentButtons.forEach(button => {
   button.addEventListener('click', () =>{
     //ეძებს გრუპს, რომელიც ავირჩიეთ
     let group = groups.find(e => e.id == button.parentElement.parentElement.parentNode.id);
     popup.style.display = 'block';
     popup.style.zIndex = '1';
     //ქმნის მასივს სტუდენტების, ვისაც არჩეული აქვს ჯგუფის საგანი, ჯერ არაა ჯგუფში დამატებული და ამ დროს სხვა საგანი არ აქვს
     let studSubj = students.filter(e => e.subjects.includes(group.subject) && !group.memberIDs.includes(e.id) && e.isFree(group.dateTime, groups));
     //ქმნის ul-ს ამ სტუდენტების მასივის ეკრანზე გამოსატანად
     createUL(studSubj, 'addStudBtn');
     // თითოეული სტუდენტის add-თვის pop-up-ში
     const addStudBtns = document.querySelectorAll('.addStudBtn');
     addStudBtns.forEach(addStudBtn =>{
       addStudBtn.addEventListener('click', () => {
         let student = students.find(e=>e.id == addStudBtn.id);
         addStudentToGroup(group, student);
          //შლის იმ li-ს სადაც დამატებული სტუდენტის მონაცემებია
          //თუმცა, თუ ლოკალსტორეჯიდან წამოიღო მონაცემები, შეიძლება აღარც დაჭირდეს, not sure
          addStudBtn.parentElement.parentElement.remove();
         location.reload();
       })
     })
   })
})



//dom-ში პოულობს ჯგუფებს
const domGroups = Array.from(document.querySelectorAll('.table-2-cols')).concat(Array.from(document.querySelectorAll('.table-1-cols')));
//თითოეული ჯგუფისთვის გამოაქვს მისი წევრების სახელები
  groups.forEach(group =>{
    //დომ-ის ჯგუფს აკავშირებს მასივთან
    let g = domGroups.find(e=>e.id == group.id);
    //ჯგუფების მასწებს ეძებს:
    let subjTeachers = teachers.filter(e => e.id == group.teacherID);
    subjTeachers.forEach(subjTeacher => {
    li = createLi('teachList', subjTeacher, 'teachDelBtn');
//    g.children[0].children[0].children[0].remove();
    //მასწ-ის ინფორმაციის შემცველ li-ს სვამს სიაში
    g.children[0].insertBefore(li, g.children[0].children[0]);
    })

    //ჯგუფის სტუდენტებს ფილტრავს
    let groupStudents = students.filter(e => e.groupIDs.includes(group.id));
    //ამატებს li-ებს
    groupStudents.forEach(stud => {
    li = createLi('studList', stud, 'studDelBtn');
    g.children[0].insertBefore(li, g.children[0].children[2]);
    })
    // ეს addbutton-ის გაქრობაა, ჩემი უმთავრესი გამოწვევა, რომელსაც მოგვიანებით მივხედავ
    // if(groupStudents.length >= 7){
    //   g.children[0].children[9].children[0].remove();
    // }
    //teacher delete button-ების click event-ი
    const teachDelBtns = document.querySelectorAll('.teachDelBtn');
    teachDelBtns.forEach(teachDelBtn =>{
      teachDelBtn.addEventListener('click', () => {
        let teacher = teachers.find(e=>e.id == teachDelBtn.name);
        deleteTeacherFromGroup(group, teacher)
        //შლის იმ li-ს სადაც დამატებული სტუდენტის მონაცემებია
        //თუმცა, თუ ლოკალსტორეჯიდან წამოიღო მონაცემები, შეიძლება აღარც დაჭირდეს, not sure
        teachDelBtn.parentElement.parentElement.remove();
  //      location.reload();
      })
    })

    //student-ის delBtn
    const studDelBtns = document.querySelectorAll('.studDelBtn');
    studDelBtns.forEach(studDelBtn =>{
      studDelBtn.addEventListener('click', () => {
         let student = students.find(e=>e.id == studDelBtn.name);
         console.log(student);
         deleteStudentFromGroup(group, student);
         //შლის იმ li-ს სადაც დამატებული სტუდენტის მონაცემებია
         //თუმცა, თუ ლოკალსტორეჯიდან წამოიღო მონაცემები, შეიძლება აღარც დაჭირდეს, not sure
         studDelBtn.parentElement.parentElement.remove();
         location.reload();
      })
    })
  })

function createLi(classAttr, person, delBtn){
  const li = document.createElement('li');
  const tag = document.createElement("div");
  tag.setAttribute('class', classAttr);
  const delbtn = document.createElement('button');
  delbtn.innerText = 'DEL';
  delbtn.setAttribute('name', person.id);
  delbtn.setAttribute('class', 'btn btn-dark');
  delbtn.classList.add(delBtn)
  tag.innerText = person.name;
  tag.appendChild(delbtn);
  li.appendChild(tag);
  return li;
}

function createUL(persons, addBtnClass){
  const ul = document.createElement('ul');
  const content = document.querySelector('.popup-content');
  content.append(ul);
  // გამოაქვს პოპაპში გამოიტანს პერსონის მონაცემებს (იმედია)
  for (person of persons){
    const li = document.createElement('li');
    //li-ში ვქმნით div-ს რო ჩაამატოს ტექსტი და button-ი
    const tag = document.createElement("div");
    const addbtn = document.createElement('button');
    addbtn.innerText = 'Add';
    addbtn.setAttribute('id', person.id);
    addbtn.setAttribute('class', addBtnClass);
    tag.innerText = person.name;
    tag.appendChild(addbtn);
    li.appendChild(tag);
    ul.append(li);
  }
}

function deleteStudentFromGroup(group, student){
  let i = group.memberIDs.indexOf(student.id);
  group.memberIDs.splice(i,1);
  let j = student.groupIDs.indexOf(group.id);
  student.groupIDs.splice(j,1);
}

function deleteTeacherFromGroup(group, teacher){
  delete group.teacherID;
  let j = teacher.groupIDs.indexOf(group.id);
  teacher.groupIDs.splice(j,1);
}

function addStudentToGroup(group, student){
    if(group.memberIDs.includes(student.id)){
      alert('მოსწავლე უკვე დამატებულია');
    } else if(!student.isFree(group.dateTime, groups)){
        alert('მოსწავლე დაკავებულია მოცემულ დროს');
    } else if(group.isFull()){
      alert('ჯგუფში ადგილები უკვე შევსებულია');
    } else {
     group.memberIDs.push(student.id);
     student.groupIDs.push(group.id);
     console.log('მოსწავლე წარმატებით დაემატა');
   }
}

function addTeacherToGroup(group, teacher){
  if(group.teacherID == ""){
    group.teacherID = teacher.id;
    teacher.groupIDs.push(group.id);
  }
}

function makePopWrap(){
  const popWrap = document.createElement('div');
  popWrap.setAttribute('class', 'popup-wrapper');
  const pop = document.createElement('div');
  pop.setAttribute('class', 'popup');
  //close ღილაკისთვის
  const popClose = document.createElement('div');
  popClose.setAttribute('class', 'popup-close');
  popClose.innerText = 'x';
  //კონტენტი
  const cont = document.createElement('div');
  cont.setAttribute('class','popup-content');
  pop.appendChild(popClose);
  pop.appendChild(cont);
  popWrap.appendChild(pop);
  return popWrap;
}


//ნიკას localStorage-ი

// let saveData = () => {
//       localStorage.setItem("teachers-data",JSON.stringify(teachers));
//       localStorage.setItem("students-data",JSON.stringify(students));
//       localStorage.setItem("groups-data",JSON.stringify(groups));
//   }
//
//   let getData = () => {
//       let teachersData = localStorage.getItem("teachers-data");
//       teachers = JSON.parse(teachersData);
//
//       let studentsData = localStorage.getItem("students-data");
//       students = JSON.parse(studentsData);
//
//       let groupsData = localStorage.getItem("groups-data");
//       groups = JSON.parse(groupsData);
//   }
