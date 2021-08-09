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
  
  
  
  
  //ცხრილი 1
  let group0 = new Group("group0","ოთახი 1","ორშაბათი, ოთხშაბათი, პარასკევი, 11:20");
  groups.push(group0);
  let group1 = new Group("group1","ოთახი 2","ორშაბათი, ოთხშაბათი, პარასკევი, 11:20");
  groups.push(group1);
  let group2 = new Group("group2","ოთახი 3","ორშაბათი, ოთხშაბათი, პარასკევი, 11:20");
  groups.push(group2);
  let group3 = new Group("group3","ოთახი 4","ორშაბათი, ოთხშაბათი, პარასკევი, 11:20");
  groups.push(group3);
  let group4 = new Group("group4","ოთახი 5","ორშაბათი, ოთხშაბათი, პარასკევი, 11:20");
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
  groups.push(group12);
  let group13 = new Group("group13","ოთახი 2","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");
  groups.push(group13);
  let group14 = new Group("group14","ოთახი 3","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");
  groups.push(group14);
  let group15 = new Group("group15","ოთახი 4","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");
  groups.push(group15);
  let group16 = new Group("group16","ოთახი 5","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");
  groups.push(group16);
  let group17 = new Group("group17","ოთახი 6","ორშაბათი, ოთხშაბათი, პარასკევი, 14:40");
  groups.push(group17);
  
  let group18 = new Group("group18","ოთახი 1","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
  groups.push(group18);
  let group19 = new Group("group19","ოთახი 2","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
  groups.push(group19);
  let group20 = new Group("group20","ოთახი 3","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
  groups.push(group20);
  let group21 = new Group("group21","ოთახი 4","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
  groups.push(group21);
  let group22 = new Group("group22","ოთახი 5","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
  groups.push(group22);
  let group23 = new Group("group23","ოთახი 6","ორშაბათი, ოთხშაბათი, პარასკევი, 16:20");
  groups.push(group23);
  
  let group24 = new Group("group24","ოთახი 1","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
  groups.push(group24);
  let group25 = new Group("group25","ოთახი 2","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
  groups.push(group25);
  let group26 = new Group("group26","ოთახი 3","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
  groups.push(group26);
  let group27 = new Group("group27","ოთახი 4","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
  groups.push(group27);
  let group28 = new Group("group28","ოთახი 5","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
  groups.push(group28);
  let group29 = new Group("group29","ოთახი 6","ორშაბათი, ოთხშაბათი, პარასკევი, 18:00");
  groups.push(group29);
  
  let group30 = new Group("group30","ოთახი 1","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
  groups.push(group30);
  let group31 = new Group("group31","ოთახი 2","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
  groups.push(group31);
  let group32 = new Group("group32","ოთახი 3","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
  groups.push(group32);
  let group33 = new Group("group33","ოთახი 4","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
  groups.push(group33);
  let group34 = new Group("group34","ოთახი 5","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
  groups.push(group34);
  let group35 = new Group("group35","ოთახი 6","ორშაბათი, ოთხშაბათი, პარასკევი, 19:40");
  groups.push(group35);
  
  //ცხრილი 2
  
  let group36 = new Group("group36","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
  groups.push(group36);
  let group37 = new Group("group37","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
  groups.push(group37);
  let group38 = new Group("group38","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
  groups.push(group38);
  let group39 = new Group("group39","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
  groups.push(group39);
  let group40 = new Group("group40","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
  groups.push(group40);
  let group41 = new Group("group41","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 11:20");
  groups.push(group41);
  
  
  let group42 = new Group("group42","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
  groups.push(group42);
  let group43 = new Group("group43","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
  groups.push(group43);
  let group44 = new Group("group44","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
  groups.push(group44);
  let group45 = new Group("group45","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
  groups.push(group45);
  let group46 = new Group("group46","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
  groups.push(group46);
  let group47 = new Group("group47","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 13:00");
  groups.push(group47);
  
  let group48 = new Group("group48","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
  groups.push(group48);
  let group49 = new Group("group49","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
  groups.push(group49);
  let group50 = new Group("group50","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
  groups.push(group50);
  let group51 = new Group("group51","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
  groups.push(group51);
  let group52 = new Group("group52","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
  groups.push(group52);
  let group53 = new Group("group53","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 14:40");
  groups.push(group53);
  
  let group54 = new Group("group54","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
  groups.push(group54);
  let group55 = new Group("group55","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
  groups.push(group55);
  let group56 = new Group("group56","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
  groups.push(group56);
  let group57 = new Group("group57","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
  groups.push(group57);
  let group58 = new Group("group58","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
  groups.push(group58);
  let group59 = new Group("group59","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 16:20");
  groups.push(group59);
  
  let group60 = new Group("group60","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
  groups.push(group60);
  let group61 = new Group("group61","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
  groups.push(group61);
  let group62 = new Group("group62","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
  groups.push(group62);
  let group63 = new Group("group63","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
  groups.push(group63);
  let group64 = new Group("group64","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
  groups.push(group64);
  let group65 = new Group("group65","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 18:00");
  groups.push(group65);
  
  let group66 = new Group("group66","ოთახი 1","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
  groups.push(group66);
  let group67 = new Group("group67","ოთახი 2","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
  groups.push(group67);
  let group68 = new Group("group68","ოთახი 3","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
  groups.push(group68);
  let group69 = new Group("group69","ოთახი 4","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
  groups.push(group69);
  let group70 = new Group("group70","ოთახი 5","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
  groups.push(group70);
  let group71 = new Group("group71","ოთახი 6","სამშაბათი, ხუთშაბათი, შაბათი, 19:40");
  groups.push(group71);

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