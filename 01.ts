console.log('?')

var a:number
a=100
let b:{name :string, age?:number}

let c:{name :string,[ age:number]:any}

let d:(a:number,b:number) => number



let e:string[]
e=['1','2','3']
let f:number[]
f=[1,2,3]


let g:Array<number>
g=[1,2,3]

let h:[number,number]
h=[1,2]


enum Gender { Male, Female }

let i:{name:string, gender:Gender}

i={name:'jack',
 gender:Gender.Male}

console.log(i.gender===Gender.Male)

let j:{name:string}&{age:number}
j={name:'jack',age:10}


//类型别名
type myType= 1|2|3|4|5|6|7|8|9|10|11|12

let k: myType
k=2


console.log(a)