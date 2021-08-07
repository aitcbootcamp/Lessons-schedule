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
group3.teacherID = '2';
groups.push(group3);


let group4 = new Group(
  "group4",
  "203",
  "სამშაბათი, ხუთშაბათი, 11:20",
);
group4.subject = 'მათემატიკა';
// group4.teacherID = '2';
groups.push(group4);

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


//index.html გვერდზე ინფორმაციის გამოტანა
const domGroups = Array.from(document.querySelectorAll('.table-2-cols')).concat(Array.from(document.querySelectorAll('.table-1-cols')));
  groups.forEach(group =>{
    //დომ-ის ჯგუფს აკავშირებს მასივთან
    let g = domGroups.find(e=>e.id == group.id);
    //ფილტრავს ჯგუფის საგნის მასწავლებლების მასივს
    let subjTeachers = teachers.filter(e => e.id == group.teacherID);
    //ფილტრავს ჯგუფების სტუდენტებს
    let groupStudents = students.filter(e => e.groupIDs.includes(group.id));
    //ქმნის ul-ს ჯგუფის მონაცემების გამოსატანად ეკრანზე
    ul = document.createElement('ul');
    //თუ დამატებულია მასწ-ი, გამოაქვს მასწ-ის მონაცემები, თუ არა, addTeacher button-ი
    if(group.teacherID == ''){
      li = liForButton('AddTeacher', 'btn-1 popup-teacher');
    } else {
    //ჯგუფების მასწებს ეძებს:
    subjTeachers.forEach(subjTeacher => {
      li = createLi('teachList', subjTeacher, 'teachDelBtn');
    //მასწ-ის ინფორმაციის შემცველ li-ს სვამს სიაში
    })
    }
    //ul-ს ამატებს teacher-ის მონაცემს
    ul.append(li)
    ;
    //ჯგუფის თითოეული სტუდენტისთვის
    //ამატებს li-ებს
    groupStudents.forEach(stud => {
    li = createLi('studList', stud, 'studDelBtn');
    ul.append(li);
    })
    //თუ ჯგუფი შევსებული არაა, ამატებს addStudent button-ს
    if(groupStudents.length < 7){
      li = liForButton('AddStudent', "btn-1 btn-popup");
      ul.append(li);
    }
    // dom-ის ჯგუფს ამატებს შექმნილ ul-ს, სადაც ყვეელას მონაცემი გვაქვს ჯგუფში
    g.append(ul);

    //teacher delete button-ების ივენთი
    addDelBtnEvents(teachers, '.teachDelBtn', group);

    //student-ის delBtn
    addDelBtnEvents(students, '.studDelBtn', group);
  })

  //ჩვენი ჯავასკრიპტის პოპაპი
  popWrap = makePopWrap();

  //addStudent button-ების მასივი
  const studentButtons = document.querySelectorAll('.btn-popup');
  //addTeacher button-ების მასივი
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
      //ქმნის მასივს მასწავლებლების ვისაც შეუძლია ამ საგნის სწავლება და დაკავებული არაა მოცემულ დროს
      let teachSubj = teachers.filter(e => e.subjects.includes(group.subject) && !e.getDateTimes(groups).includes(group.dateTime));
      //ქმნის ul-ს ამ მასწავლებლების მასივის ეკრანზე გამოსატანად
      createUL(teachSubj, 'addTeacherBtn');
      //popup-ის add button-ით მასწ-ის ჩამატება

      addAddBtnEvents('.addTeacherBtn', teachers, group);
    })
  })


  //addStudent-თვის buttonclick
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
       addAddBtnEvents('.addStudBtn', students, group);
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

function liForButton(text, btnClass){
  const li = document.createElement('li');
  const tag = document.createElement("button");
  tag.setAttribute('class', btnClass);
  tag.innerText = text;
  li.appendChild(tag);
  return li;
}

function addDelBtnEvents(persons, className, group){
  const personDelBtns = document.querySelectorAll(className);
  personDelBtns.forEach(personDelBtn =>{
    personDelBtn.addEventListener('click', () => {
      let person = persons.find(e=>e.id == personDelBtn.name);
      deleteTeacherFromGroup(group, person)
      //შლის იმ li-ს სადაც დამატებული სტუდენტის მონაცემებია
      //თუმცა, თუ ლოკალსტორეჯიდან წამოიღო მონაცემები, შეიძლება აღარც დაჭირდეს, not sure
      personDelBtn.parentElement.parentElement.remove();
//      location.reload();
    })
  })
}

function addAddBtnEvents(btnClass, persons, group){
  const addPersonBtns = document.querySelectorAll(btnClass);
  addPersonBtns.forEach(addPersonBtn =>{
    addPersonBtn.addEventListener('click', () => {
      let person = persons.find(e=>e.id == addPersonBtn.id);
      addTeacherToGroup(group, person);
      //ეს შეიძლება აღარ დაჭირდეს
      addPersonBtn.parentElement.parentElement.remove();
//        location.reload();
    })
  })
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
