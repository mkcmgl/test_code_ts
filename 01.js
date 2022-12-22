console.log('?');
var a;
a = 100;
var b;
var c;
var d;
var e;
e = ['1', '2', '3'];
var f;
f = [1, 2, 3];
var g;
g = [1, 2, 3];
var h;
h = [1, 2];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = { name: 'jack',
    gender: Gender.Male };
console.log(i.gender === Gender.Male);
var j;
j = { name: 'jack', age: 10 };
console.log(a);
