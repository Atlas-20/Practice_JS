 # changing the style of more than one element at a time of onetype 

-  if we want to change the style or anythihng of all "like : , we want to change the color of each link  , 
  then instead of changing the color of each one by one we can use loop to do like 

- const alllinks = document.querySelectorAll('a')  // you have selected the elements and took them in a container 

  ## Using for Loop

-  for(let i=0; i < alllinks.length ; i++){
    alllinks[i].style.color ='hotpink';
}
 - It will change each of value itself , and that's a good way 

 ## Now using forof Loop

- for(let link of alllinks){
    link.style.color = 'green'
 }
- it will also work the same way 
- we can also put const instead of let becaue everytime it loops it cerates a new variable 
