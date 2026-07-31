# M1 

- we gave  the event value in as an attribute inside the tag direclty and even 
- we call also make a function in jsfile and can be called them inside the tag as an attribute directly 

- < h1 onclick="console.log('say hiii ') "> // its a way we can call them 
- < h2 dblclick="console.log('double click') ">

- but we don't prefer this methods oftern the better one we will see later 

### Working behind the scene 

- The js simply need a function to work on event , "even when we are only giving  , console.log('hi') then 
 behind the scene the js make a function of it own and keep the console.log('hi') in it and when execute the funttion is execute but the function is not seen here 
- and that is how this whole scene is working behind the scene [ got to eventlistener ->onclick(you will see the function)]

# M2 
- suppose we can to give the event to the < h1 > then select h1 

- const h2 = document.querySelector('h1') 

- h2.onclick = say hii


# M3 [most used even in industry ]

- h1.addEventListener('event', function)

- hi.addEventListene('click', function(){
    console.log('say hii');
});
