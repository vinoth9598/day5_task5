// 1.giben json iterate over all the for loops.
let student={
    name:"vinoth",
    Age:24,
    Department:'conputer science',
    Gender:'Male'
}
let detail=(JSON.stringify(student));

for(i=0;i<student.length;i++){

    console.log(student.name);
    console.log(student.Age);
    console.log(student.Department);
    console.log(student.Gender);

};

let users=[];
for(let user in detail){
    users+=(detail[user]);
}
console.log(users);

let string=[];
for (let inp of detail){
    string+=(inp);
}
console.log(string);

let scores={
    mark1:80,
    mark2:89,
    mark3:90,
    mark4:85
};
let js=JSON.stringify(scores);
console.log(js);

let arr=Object.entries(scores);
console.log(arr);

arr.forEach(function (n){
    console.log(n);
});

arr.forEach(function(m,i){
    console.log(i,m);
});

arr.forEach(function(l,i){
    console.log(l,i);
});