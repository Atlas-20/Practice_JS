function sayHi() {
  document.body.children[4].src =
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'
}


 const allimages = document.querySelector('img');




 const imageslink = [
   'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

 ]

//  allimages[0].src = imageslink[0];
//   allimages[1].src = imageslink[1];
//    allimages[2].src = imageslink[2];

// but if you want to change the images for more like 50 at a time then it will be very hectic 
// so we will do it               USING LOOP

for (let i =0; i<imageslink.length;i++){

      allimages[i].src = imageslink[i];

}

// now using forEach method to do the same thing 
allimages.forEach((images,i) => {
  images.src = images[i]
})


