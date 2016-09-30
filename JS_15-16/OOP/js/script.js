'use strict';

function Human(params) {
    this.name = params.name;
    this.age = params.age;
    this.gender = params.gender;
    this.height = params.height;
    this.weight = params.weight;
}

function Worker(params) {
    Human.apply(this, arguments);
    this.job = params.job;
    this.salary = params.salary;
}

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.work = function() {
    console.log(this.name + ' works in ' + this.job + ' and earns ' + this.salary + '$ per month');
}

function Student(params) {
    Human.apply(this, arguments);
    this.university = params.university;
    this.grant = params.grant;
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.watchSeries = function() {
    console.log(this.name + ' studies in ' + this.university + ' and spends time watching favorite series');
}

var worker1 = new Worker({
    name: 'Erik',
    age: 45,
    gender: 'male',
    height: 185,
    weight: 80,
    job: 'JP Morgan Chase',
    salary: 2000
});

var worker2 = new Worker({
    name: 'Helen',
    age: 31,
    gender: 'female',
    height: 172,
    weight: 58,
    job: 'DRS Technologies',
    salary: 1750
});

var student1 = new Student({
    name: 'Stive',
    age: 21,
    gender: 'male',
    height: 189,
    weight: 85,
    university: 'Technical University of Madrid',
    grant: 700
});

var student2 = new Student({
    name: 'Sophi',
    age: 23,
    gender: 'female',
    height: 164,
    weight: 60,
    university: 'University of Glasgow',
    grant: 500
});

console.log(worker1);
worker1.work();

console.log(worker2);
worker2.work();

console.log(student1);
student1.watchSeries();

console.log(student2);
student2.watchSeries();