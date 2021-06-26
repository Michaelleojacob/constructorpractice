function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function(){
        console.log(`title:${title}, \nauthor:${author},\namount of pages:${pages},\nhave I read this book?:${haveRead}`);
    }

    return `title:${title}, \nauthor:${author},\namount of pages:${pages},\nhave I read this book?:${haveRead}`;
}

const favbook = new Book('Water for Elephants', 'Sara Gruen', 368, "yes");
const wantToRead = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");

favbook.info();
wantToRead.info();

//?

// function Student(name, grade) {
//     this.name = name
//     this.grade = grade
// }

// Student.prototype.sayName = function() {
//     console.log(this.name)
//     return this.name
// }
// Student.prototype.goToProm = function() {
//     // eh.. go to prom?
// }

// const mike = new Student("Mike", "dropout");
// // console.log(mike.sayName());
// mike.sayName();

function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
console.log(carl.grade) // 8