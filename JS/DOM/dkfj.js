console.log(2.3+3.2 === 5.5)

const obj ={
    name:"hello",
    bakd : 45
}

const stringofojb = JSON.stringify(obj)
console.log( typeof stringofojb)

const selfchanged = JSON.parse(stringofojb)
console.log(typeof selfchanged )

