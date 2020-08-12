// first way
var task = {};

task.title = 'My task';
task.description = 'My Description';
console.log(task.title);

// Second way
var task1 = Object.create(Object.prototype);

task1.title = 'My task';
task1.description = 'My Description';
task1.toString = function() {
    return this.title + ' ' + this.description;
}
console.log(task1.toString());

// Third way
var task2 = new Object();

task2.title = 'My task';
task2.description = 'used new Object';
task2.toString = function() {
    return this.title + ' ' + this.description;
}
console.log(task2.toString());

// Another way
var task3 = {
    title: 'My task',
    description: 'My description String'
};
task3.toString = function() {
    return this.title + ' ' + this.description;
}
console.log(task3.toString());