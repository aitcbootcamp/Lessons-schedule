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
  constructor(name, id, subjects, type) {
    super(name, id, subjects);
    this.type = type;
  }

}

// date და time-ს ცალკე არანაირი აზრი არ აქვს და გავაერთიანე მაინც -_-

class Teacher extends Person{
  constructor(name, id, subjects) {
    super(name, id, subjects);
  }

}

class Group {
  constructor(id, teacherID, subject, room, dateTime, memberIDs, type) {
    this.id = id;
    this.teacherID = teacherID;
    this.subject = subject;
    this.room = room;
    this.dateTime = dateTime;
    this.memberIDs = memberIDs;
    this.type = type;
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

let nathaniel = new Student('ნათანიელ სქაი', '1', [], [],'აბიტურიენტი');
let annie = new Student('ანი ჩანი', '2', [],[], 'საატესტატო');

let group1 = new Group(1, 'მაია', 'ქართული', '203', 'ორშაბათი, 13:00', [], 'საატესტატო');
groups.push(group1);
let group2 = new Group(2, 'მაგდა', 'მათემატიკა', '204', 'ორშაბათი, 15:00', [], 'საატესტატო');
groups.push(group2);


function addStudentToGroup(student, group){
    if(group.memberIDs.includes(student.id)){
      console.log('მოსწავლე უკვე დამატებულია');
    } else if(!student.isFree(group.dateTime, groups)){
        console.log('მოსწავლე დაკავებულია მოცემულ დროს');
    } else if(group.isFull()){
      console.log('ჯგუფში ადგილები უკვე შევსებულია')
    } else {
     group.memberIDs.push(student.id);
     student.groupIDs.push(group.id);
    }
}

function deleteStudentFromGroup(student, group){
    let i = group.memberIDs.indexOf(student.id);
    group.memberIDs.splice(i,1);
    let j = student.groupIDs.indexOf(group.id);
    student.groupIDs.splice(j,1);
}

addStudentToGroup(nathaniel, group1);
addStudentToGroup(nathaniel, group2);
addStudentToGroup(annie, group1);





deleteStudentFromGroup(annie, group1);
console.log(annie.groupIDs);
console.log(nathaniel.getDateTimes(groups));
console.log(nathaniel.groupIDs);


// console.log(nathaniel.getDateTimes(groups));
// console.log(nathaniel.getChosenSubjects(groups));
















 // //მგონია ეს კლასიც გამოგვადგება, თუ არ დაგვჭირდა, წავშლით ^_^
 // class Subject {
 //   constructor(id, name, teachers = [], students = [], dateTimes) {
 //     this.id = id;
 //     this.name = name;
 //     this.teachers = teachers;
 //     this.students = students;
 //     this.dateTimes = dateTimes;
 //   }
 // }

 // groupIDs = [1 , 2];
