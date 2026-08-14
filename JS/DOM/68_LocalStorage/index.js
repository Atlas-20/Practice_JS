const  paragraph = document.querySelector('.para');
const input = document.querySelector('.input')
const age = document.querySelector('.age-input')
const variableage =document.querySelector('.age')



// input.addEventListener('change',(e) =>{ 
//     // i used change event becaue input event give all the little changes while change
//     //change event only fires when we getout of the input field and so less output in console that just make it clear console
//     // console.log(e.target.value);// here we found that localstorage could be changed as my localStorage.myname ="akash" the it will be akash so wwhat we will do 
//     // localStorage.myname =e.target.value
//     localStorage.setItem('myname', e.target.value);
//     paragraph.innerText = localStorage.getItem('myname')
// }) 
// paragraph.innerText =localStorage.getItem('myname')

// // ----age manupulation 

// age.addEventListener('input', (e) =>{
//     // console.log(e.target.value)
//     localStorage.setItem('age',e.target.value)
//     variableage.innerText =localStorage.getItem('age')
// })
// variableage.innerText =localStorage.getItem('age')
// ---here we are deciding to make all these in a single piece 


const myData ={
    name:'',
    age:''
}
 
input.addEventListener('input', (e) =>{
    myData.name = e.target.value;
    localStorage.setItem('name',JSON.stringify(myData ))
    //  paragraph.innerText= localStorage.getItem('name')
})

age.addEventListener('input', (e) =>{
    myData.age = e.target.value;
    localStorage.setItem('name',JSON.stringify(myData ))
    //  paragraph.innerText= localStorage.getItem('name')
})