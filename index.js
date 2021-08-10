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
subjects = ['ქართული', 'მათემატიკა', 'უნარები', 'ინგლისური', ];

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
let teacher2 = new Teacher("ნინო ადამოვი", "2", ["ფიზიკა", 'მათემატიკა']);
teacher2.groupIDs = ['group3'];
teachers.push(teacher2);
let teacher3 = new Teacher("მანონი რუტინული", "3", ["ქიმია"]);
teachers.push(teacher3);
let teacher4 = new Teacher("ემი რუდროვი", "4", ["ინგლისური", 'მათემატიკა']);
teachers.push(teacher4);
let teacher5 = new Teacher("როდამი აღდგომელაშვილი", "5", ["ქართული"]);
teachers.push(teacher5);
let teacher6 = new Teacher("ემი ალანია", "6", ["ინგლისური"]);
teacher6.groupIDs=['group0', 'group1', 'group2'];
teachers.push(teacher6);
let teacher7 = new Teacher("ემი მოსეშვილი", "7", ["უნარები", 'მათემატიკა']);
teachers.push(teacher7);

let group0 = new Group(
  "group0",
  "304",
  "ორშაბათი, ოთხშაბათი, პარასკევი, 13:20"
);
group0.subject = 'ქართული';
group0.memberIDs = ['1', '5'];
groups.push(group0);



let group1 = new Group(
  "group1",
  "666",
  "სამშაბათი, შაბათი, 16:00",
);
// group1.subject = 'მათემატიკა';
group1.memberIDs = ['1', '2', '8'];
group1.teacherID = '3';
groups.push(group1);

let group2 = new Group(
  "group2",
  "186",
  "ორშაბათი, ოთხშაბათი, პარასკევი, 19:40",
);
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
group4.teacherID = '2';
groups.push(group4);


let group5 = new Group("group5","ოთახი 6","ორშაბათი, ოთხშაბათი, პარასკევი, 11:20");
groups.push(group5);
let group6 = new Group("group6","ოთახი 1","ორშაბათი, ოთხშაბათი, პარასკევი, 13:00");
groups.push(group6);
let group7 = new Group("group7","ოთახი 2","ორშაბათი, ოთხშაბათი, პარასკევი, 13:00");
groups.push(group7);
let group8 = new Group("group8","ოთახი 3","ორშაბათი, ოთხშაბათი, პარასკევი, 13:00");
groups.push(group8);
let group9 = new Group("group9","ოთახი 4","ორშაბათი, ოთხშაბათი, პარასკევი, 13:00");
groups.push(group9);
let group10 = new Group("group10","ოთახი 5","ორშაბათი, ოთხშაბათი, პარასკევი, 13:00");
groups.push(group10);
let group11 = new Group("group11","ოთახი 6","ორშაბათი, ოთხშაბათი, პარასკევი, 13:00");
groups.push(group11);

let group12 = new Group("group12","ოთახი 1","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");
let group13 = new Group("group13","ოთახი 2","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");
let group14 = new Group("group14","ოთახი 3","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");
let group15 = new Group("group15","ოთახი 4","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");
let group16 = new Group("group16","ოთახი 5","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");
let group17 = new Group("group17","ოთახი 6","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");

let group18 = new Group("group18","ოთახი 1","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
let group19 = new Group("group19","ოთახი 2","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
let group20 = new Group("group20","ოთახი 3","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
let group21 = new Group("group21","ოთახი 4","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
let group22 = new Group("group22","ოთახი 5","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
let group23 = new Group("group23","ოთახი 6","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");

let group24 = new Group("group24","ოთახი 1","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
let group25 = new Group("group25","ოთახი 2","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
let group26 = new Group("group26","ოთახი 3","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
let group27 = new Group("group27","ოთახი 4","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
let group28 = new Group("group28","ოთახი 5","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
let group29 = new Group("group29","ოთახი 6","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");

let group30 = new Group("group30","ოთახი 1","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
let group31 = new Group("group31","ოთახი 2","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
let group32 = new Group("group32","ოთახი 3","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
let group33 = new Group("group33","ოთახი 4","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
let group34 = new Group("group34","ოთახი 5","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
let group35 = new Group("group35","ოთახი 6","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");

//ცხრილი 2

let group36 = new Group("group36","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
let group37 = new Group("group37","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
let group38 = new Group("group38","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
let group39 = new Group("group39","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
let group40 = new Group("group40","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
let group41 = new Group("group41","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");


let group42 = new Group("group42","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
let group43 = new Group("group43","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
let group44 = new Group("group44","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
let group45 = new Group("group45","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
let group46 = new Group("group46","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
let group47 = new Group("group47","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");

let group48 = new Group("group48","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
let group49 = new Group("group49","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
let group50 = new Group("group50","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
let group51 = new Group("group51","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
let group52 = new Group("group52","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
let group53 = new Group("group53","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");

let group54 = new Group("group54","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
let group55 = new Group("group55","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
let group56 = new Group("group56","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
let group57 = new Group("group57","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
let group58 = new Group("group58","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
let group59 = new Group("group59","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");

let group60 = new Group("group60","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
let group61 = new Group("group61","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
let group62 = new Group("group62","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
let group63 = new Group("group63","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
let group64 = new Group("group64","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
let group65 = new Group("group65","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");

let group66 = new Group("group66","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
let group67 = new Group("group67","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
let group68 = new Group("group68","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
let group69 = new Group("group69","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
let group70 = new Group("group70","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
let group71 = new Group("group71","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");

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



let popWrap = {};

let studentButtons = {};

let teacherButtons = {};

let popup = {};

let close = {};

makeDom();

function makeDom(){

  const domGroups = Array.from(document.querySelectorAll('.table-1-cols')).concat(Array.from(document.querySelectorAll('.table-2-cols')));
//    domGroups.forEach(group => console.log(group))
    groups.forEach(group =>{
      //დომ-ის ჯგუფს აკავშირებს მასივთან
      let g = domGroups.find(e=>e.id == group.id);
      g.removeChild(g.childNodes[0]);
      //ფილტრავს ჯგუფის საგნის მასწავლებლების მასივს
      //იდეაში, ელემენტებს შლის რო მეორე გამოძახებისას იპოვოს მარა მიფუჭებს რაღაცებს, სო, ნოთ შუა
      let teacher = teachers.find(e => e.id == group.teacherID);
//      g.removeChild(g.childNodes[0]);
      //ფილტრავს ჯგუფების სტუდენტებს
      let groupStudents = students.filter(e => e.groupIDs.includes(group.id));
      //ქმნის ul-ს ჯგუფის მონაცემების გამოსატანად ეკრანზე
      let ul = document.createElement('ul');
      //ul-ს ამატებს teacher-ის მონაცემს
      if(group.subject != ''){
        li = createLiForSubject('subjList', group, 'subjDelBtn');
        //subject delete button-ების ივენთი
        ul.append(li);
      } else {
        li = liForAddSubjectButton(group);
        ul.append(li);
      }
      //თუ დამატებულია მასწ-ი, გამოაქვს მასწ-ის მონაცემები, თუ არა, addTeacher button-ი
      if(group.teacherID != ''){
        li = createLiForTeacher('teachList', teacher, 'teachDelBtn', group);
           //მასწ-ის ინფორმაციის შემცველ li-ს სვამს სიაში
        ul.append(li);
      } else {
        li = liForAddTeacherButton(group);
        ul.append(li);
      }

      //ჯგუფის თითოეული სტუდენტისთვის
      //ამატებს li-ებს
      groupStudents.forEach(stud => {
      li = createLiForStudent('studList', stud, 'studDelBtn', group);
      //student-ის delBtn
      ul.append(li);
      })
      //თუ ჯგუფი შევსებული არაა, ამატებს addStudent button-ს
      if(groupStudents.length < 7){
        li = liForAddStudentButton(group);
//        li.appendChild(popWrap);
//        li.appendChild(popup);
        ul.append(li);
      }
      // dom-ის ჯგუფს ამატებს შექმნილ ul-ს, სადაც ყვეელას მონაცემი გვაქვს ჯგუფში
      g.append(ul);
    })

    popEvents();
}


function popEvents(){

  popWrap = makePopWrap();

  studentButtons = document.querySelectorAll('.btn-popup');

  teacherButtons = document.querySelectorAll('.popup-teacher');

  //student button-ებზე poppup-ის დამატება
  studentButtons.forEach(button => {
    button.parentElement.appendChild(popWrap);
  })

  //teacher button-ებზე poppup-ის დამატება
  teacherButtons.forEach(button => {
    button.parentElement.appendChild(popWrap);
  });

  popup = document.querySelector('.popup-wrapper');

  close = document.querySelector('.popup-close');

  close.addEventListener('click', ()=>{
    popup.style.display = 'none';
    makeDom();
//    location.reload();
  })
}


function createLiForSubject(classAttr, group, delBtn){
  let li = document.createElement('li');
  const tag = document.createElement("div");
  tag.setAttribute('class', classAttr);
  const delbtn = document.createElement('button');
  delbtn.innerText = 'DEL';
  delbtn.setAttribute('name', group.id);
  delbtn.setAttribute('class', 'btn btn-dark');
  delbtn.classList.add(delBtn);
  delbtn.addEventListener('click', () => {
    let msg = confirm('საგნის წაშლა');
      if(msg == true){
        deleteSubjectFromGroup(group);
        li.remove();
        li = liForAddSubjectButton(group);
        makeDom();
      } else {
        console.log('bla');
      }
  });
  tag.innerText = group.subject;
  tag.appendChild(delbtn);
  li.appendChild(tag);
  return li;
}

function createLiForTeacher(classAttr, teacher, delBtnClass, group){
  let li = document.createElement('li');
  const tag = document.createElement("div");
  tag.setAttribute('class', classAttr);
  const delbtn = document.createElement('button');
  delbtn.innerText = 'DEL';
  delbtn.setAttribute('name', teacher.id);
  delbtn.setAttribute('class', 'btn btn-dark');
  delbtn.classList.add(delBtnClass);
  delbtn.addEventListener('click', () => {
    let msg = confirm('მასწავლებლის წაშლა');
      if(msg == true){
        deleteTeacherFromGroup(group, teacher);
        delbtn.parentElement.parentElement.remove();
        li = liForAddTeacherButton(group)
        makeDom();
      } else {
        console.log('bla');
      }
  });
  tag.innerText = teacher.name;
  tag.appendChild(delbtn);
  li.appendChild(tag);
  return li;
}

function createLiForStudent(classAttr, student, delBtnClass, group){
  let li = document.createElement('li');
  const tag = document.createElement("div");
  tag.setAttribute('class', classAttr);
  const delbtn = document.createElement('button');
  delbtn.innerText = 'DEL';
  delbtn.setAttribute('name', student.id);
  delbtn.setAttribute('class', 'btn btn-dark');
  delbtn.classList.add(delBtnClass);
  delbtn.addEventListener('click', () => {
    let msg = confirm('მოსწავლის წაშლა');
      if(msg == true){
        deleteStudentFromGroup(group, student);
        delbtn.parentElement.parentElement.remove();
        li = liForAddStudentButton(group)
        makeDom();
      } else {
        console.log('bla');
      }
  });
  tag.innerText = student.name;
  tag.appendChild(delbtn);
  li.appendChild(tag);
  return li;
}

function createLiForTeacherAdd(teacher, addBtnClass, group){
  // პოპაპში გამოიტანს პერსონის მონაცემებს (იმედია)
    const li = document.createElement('li');
    //li-ში ვქმნით div-ს რო ჩაამატოს ტექსტი და button-ი
    const tag = document.createElement("div");
    const addbtn = document.createElement('button');
    addbtn.innerText = 'Add';
    addbtn.setAttribute('id', teacher.id);
    addbtn.setAttribute('class', addBtnClass);
    addbtn.addEventListener('click', () => {
      addTeacherToGroup(group, teacher);
      popup.style.display = 'none';
      makeDom();
  //    popEvents();
    })
    tag.innerText = teacher.name;
    tag.appendChild(addbtn);
    li.appendChild(tag);
    return li;
}

function createLiForStudentAdd(student, addBtnClass, group){
  // პოპაპში გამოიტანს პერსონის მონაცემებს (უფლის წყალობით)
    const li = document.createElement('li');
    //li-ში ვქმნით div-ს რო ჩაამატოს ტექსტი და button-ი
    const tag = document.createElement("div");
    const addbtn = document.createElement('button');
    addbtn.innerText = 'Add';
    addbtn.setAttribute('id', student.id);
    addbtn.setAttribute('class', addBtnClass);
    addbtn.addEventListener('click', () => {
      addStudentToGroup(group, student);
      makeDom();
//      popEvents();
      popup.style.display = 'none';
    })
    tag.innerText = student.name;
    tag.appendChild(addbtn);
    li.appendChild(tag);
    return li;
}


function createULForSubject(subjects, addBtnClass, group){
  const ul = document.createElement('ul');
  const content = document.querySelector('.popup-content');
  content.append(ul);
  // გამოაქვს პოპაპში გამოიტანს პერსონის მონაცემებს (იმედია)
  for (subject of subjects){
    const li = document.createElement('li');
    //li-ში ვქმნით div-ს რო ჩაამატოს ტექსტი და button-ი
    const tag = document.createElement("div");
    const addbtn = document.createElement('button');
    addbtn.innerText = 'Add';
    addbtn.setAttribute('name', subject);
    addbtn.setAttribute('class', addBtnClass);
    tag.innerText = subject;
    addbtn.addEventListener('click', () => {
      addSubjectToGroup(group, addbtn.name);
      makeDom();
      popup.style.display = 'none';
    })
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

function deleteSubjectFromGroup(group){
      group.subject = '';
}

function deleteTeacherFromGroup(group, teacher){
  group.teacherID = '';
  let j = teacher.groupIDs.indexOf(group.id);
  teacher.groupIDs.splice(j,1);
}

function addTeacherToGroup(group, teacher){
  if(group.teacherID == ""){
    group.teacherID = teacher.id;
    teacher.groupIDs.push(group.id);
  }
}

function addSubjectToGroup(group, subject){
  if(subject != ''){
    group.subject = subject;
  }
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


function liForAddTeacherButton(group){
  const li = document.createElement('li');
  const addbtn = document.createElement("button");
  addbtn.setAttribute('class', 'btn-1 popup-teacher');
  addbtn.innerText = 'AddTeacher';
  addbtn.addEventListener('click', () =>{
    if(group.subject == ''){
      alert('საგანი არ გაქვთ არჩეული');
    } else {
      popup.style.display = 'block';
      popup.style.zIndex = '1';
      let ul = document.createElement('ul');
      //ქმნის მასივს მასწავლებლების ვისაც შეუძლია ამ საგნის სწავლება და დაკავებული არაა მოცემულ დროს
      let subjTeachers = teachers.filter(e => e.subjects.includes(group.subject) && !e.getDateTimes(groups).includes(group.dateTime));
      //ქმნის ul-ს ამ მასწავლებლების მასივის ეკრანზე გამოსატანად
      subjTeachers.forEach(teacher => {
        let li = createLiForTeacherAdd(teacher, 'addTeacherBtn', group);
        ul.append(li);
      })
      const content = document.querySelector('.popup-content');
      content.append(ul);
    }
  })
  li.appendChild(addbtn);
  return li;
}

function liForAddStudentButton(group){
  const li = document.createElement('li');
  const addbtn = document.createElement("button");
  addbtn.setAttribute('class', 'btn-1 btn-popup');
  addbtn.innerText = 'AddStudent';
  addbtn.addEventListener('click', () =>{
    if(group.subject == ''){
      alert('საგანი არ გაქვთ არჩეული');
    } else {
    //ეძებს გრუპს, რომელიც ავირჩიეთ
      popup.style.display = 'block';
      popup.style.zIndex = '1';
      //ქმნის მასივს სტუდენტების, ვისაც არჩეული აქვს ჯგუფის საგანი, ჯერ არაა ჯგუფში დამატებული და ამ დროს სხვა საგანი არ აქვს
      let studSubj = students.filter(e => e.subjects.includes(group.subject) && !group.memberIDs.includes(e.id) && e.isFree(group.dateTime, groups));
      //ქმნის ul-ს ამ სტუდენტების მასივის ეკრანზე გამოსატანად
      let ul = document.createElement('ul');
      studSubj.forEach(student => {
        let li = createLiForStudentAdd(student, 'addStudBtn', group);
        ul.append(li);
      })
      const content = document.querySelector('.popup-content');
      content.append(ul);
    }
    // თითოეული სტუდენტის add-თვის pop-up-ში
  })
  li.appendChild(addbtn);
  return li;
}

function liForAddSubjectButton(group){
  const li = document.createElement('li');
  const addbtn = document.createElement("button");
  addbtn.setAttribute('class', 'btn-1 popup-subject');
  addbtn.innerText = 'AddSubject';
  addbtn.addEventListener('click', () => {
    //ეძებს გრუპს, რომელიც ავირჩიეთ
    popup.style.display = 'block';
    popup.style.zIndex = '1';
    //საგნების ჩამონათვალს აკეთებს
    createULForSubject(subjects, 'addSubjectBtn', group);
  })
  li.appendChild(addbtn);
  return li;
}
