// 1.given json iterate over all the for loops.
let student={
    name:"vinoth",
    Age:24,
    Department:'conputer science',
    Gender:'Male'
}
let detail=(JSON.stringify(student));
let json_object=JSON.parse(detail);
for(i=0;i<(Object.keys(json_object)).length;i++){

    console.log(json_object);
    break;

};

let users=[ ];
for(let user in (json_object)){
    users.push(json_object [user]);
}
console.log(users);

let string=[];
for (let inp of (Object.entries(json_object))){
    string.push(inp);
}
console.log(string);


let arr=Object.keys(json_object);
console.log(arr);

arr.forEach(function (n){
    console.log(n);
});

let arr1=Object.values(json_object);
console.log(arr);
arr1.forEach(function(m,i){
    console.log(i,m);
});

let arr2=Object.entries(json_object);
console.log(arr);
arr2.forEach(function(l,i){
    console.log(l,i);
});
