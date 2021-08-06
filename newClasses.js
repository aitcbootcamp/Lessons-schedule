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


let teacher1 = new Teacher("როდამი ლელაძე", "1", "group0", ["ქართული"]);
let teacher2 = new Teacher("ნინო ადამოვი", "2", "group3", ["ფიზიკა"]);
let teacher3 = new Teacher("მანონი რუტინული", "3", "group4", ["ქიმია"]);
let teacher4 = new Teacher("ემი რუდროვი", "4", "group1", ["ინგლისური"]);

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
group1.subject = 'მათემატიკა';
group1.memberIDs = ['1', '2', '8'];
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
//let geo =

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

let saveData = () => {
      localStorage.setItem("teachers-data",JSON.stringify(teachers));
      localStorage.setItem("students-data",JSON.stringify(students));
      localStorage.setItem("groups-data",JSON.stringify(groups));
  }

  let getData = () => {
      let teachersData = localStorage.getItem("teachers-data");
      teachers = JSON.parse(teachersData);

      let studentsData = localStorage.getItem("students-data");
      students = JSON.parse(studentsData);

      let groupsData = localStorage.getItem("groups-data");
      groups = JSON.parse(groupsData);
  }


//pop-up-ის შექმნა ჯავასკრიპტში:
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

const buttons = document.querySelectorAll('.btn-popup');

//button-ებზე poppup-ის დამატება
buttons.forEach(button => {
  button.parentElement.appendChild(popWrap);
})

const popup = document.querySelector('.popup-wrapper');

const close = document.querySelector('.popup-close');

//pop-up-ის გათიშვის ღილაკისთვის
close.addEventListener('click', ()=>{
  popup.style.display = 'none';
  location.reload();
})


buttons.forEach(button => {
   button.addEventListener('click', () =>{
     //ეძებს გრუპს, რომელიც ავირჩიეთ
     let group = groups.find(e => e.id == button.parentElement.parentElement.parentNode.id);
     popup.style.display = 'block';
     popup.style.zIndex = '1';
     //ქმნის მასივს სტუდენტების, ვისაც არჩეული აქვს ჯგუფის საგანი
     let studSubj = students.filter(e => e.subjects.includes(group.subject));
     //ქმნის ul-ს ამ სტუდენტების მასივის ეკრანზე გამოსატანად
     const ul = document.createElement('ul');
     const content = document.querySelector('.popup-content');
     content.append(ul);
     // გამოაქვს პოპაპში სტუდენტები, ვისაც უნდა საგანი და ჯერ არჩეული არ აქვთ
     for (student of studSubj){
       if (!group.memberIDs.includes(student.id)){
         const li = document.createElement('li');
         //li-ში ვქმნით div-ს რო ჩაამატოს ტექსტი და button-ი
         const tag = document.createElement("div");
         const addbtn = document.createElement('button');
         addbtn.innerText = 'Add';
  //       addbtn.setAttribute('class', 'success');
         addbtn.setAttribute('id', student.id);
         addbtn.setAttribute('class', 'addbtn');
         tag.innerText = student.name;
         tag.appendChild(addbtn);
         li.appendChild(tag);
         ul.append(li);
       }
     }
     // თითოეული სტუდენტის add-თვის pop-up-ში
     const addButtons = document.querySelectorAll('.addbtn');
     addButtons.forEach(addButton =>{
       addButton.addEventListener('click', () => {
         let student = students.find(e=>e.id == addButton.id);
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
          //შლის იმ li-ს სადაც დამატებული სტუდენტის მონაცემებია
          //თუმცა, თუ ლოკალსტორეჯიდან წამოიღო მონაცემები, შეიძლება აღარც დაჭირდეს, not sure
          addButton.parentElement.parentElement.remove();
         }
         location.reload();
       })
     })
   })
})



//dom-ში პოულობს ჯგუფებს
const domGroups = Array.from(document.querySelectorAll('.table-2-cols')).concat(Array.from(document.querySelectorAll('.table-1-cols')));
//თითოეული ჯგუფისთვის გამოაქვს მისი წევრების სახელები
  groups.forEach(group =>{
    let g = domGroups.find(e=>e.id == group.id);
    //ჯგუფის სტუდენტებს ფილტრავს
    let groupStudents = students.filter(e => e.groupIDs.includes(group.id));
    //ამატებს li-ებს
    groupStudents.forEach(stud => {
      const li = document.createElement('li');
      //li-ში ვქმნით div-ს რო ჩაამატოს ტექსტი და delete button-ი
      const tag = document.createElement("div");
      tag.setAttribute('class', 'studList');
      const delbtn = document.createElement('button');
      delbtn.innerText = 'DEL';
      delbtn.setAttribute('name', stud.id);
      delbtn.setAttribute('class', 'btn btn-dark delbtn');
      tag.innerText = stud.name;
      tag.appendChild(delbtn);
      li.appendChild(tag);
      g.children[0].insertBefore(li, g.children[0].children[2]);
      // if(group.isFull){
      //
      // }
    })
    if(groupStudents.length >= 7){
      g.children[0].children[9].children[0].remove();
    }
    //delete button-ების click event-ი
      const delButtons = document.querySelectorAll('.delbtn');
      delButtons.forEach(delButton =>{
        delButton.addEventListener('click', () => {
          let student = students.find(e=>e.id == delButton.name);
          let i = group.memberIDs.indexOf(student.id);
          group.memberIDs.splice(i,1);
          let j = student.groupIDs.indexOf(group.id);
          student.groupIDs.splice(j,1);
          //შლის იმ li-ს სადაც დამატებული სტუდენტის მონაცემებია
          //თუმცა, თუ ლოკალსტორეჯიდან წამოიღო მონაცემები, შეიძლება აღარც დაჭირდეს, not sure
          delButton.parentElement.parentElement.remove();
          location.reload();
        })
      })
    })
