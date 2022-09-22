//Slider

let slider = [
     "assets/img/nature.jpg",
     "assets/img/photo-1475869719317-4d1b122d511b.jpg", 
     "assets/img/preview.jpg"
   ];
  
  let image = document.querySelector(".slider img");
  image.setAttribute("src", slider[0]);

  let index= 0;
  let next = document.querySelector(".next");

  next.addEventListener("click", function () {
      index++;

      if(index > slider.length - 1){
       index=0;
      }

      image.src= slider[index];
  });
  
  function AutoPlay(){
      index++;

      if(index > slider.length - 1){
        index = 0;
      }

      image.src= slider[index];
   };

  let prev = document.querySelector(".prev");
  
  prev.addEventListener("click", function() {
     index--;

    if(index == -1){
      index = slider.length - 1;
     }

     image.src = slider[index];
  });

  setInterval(() => {
     AutoPlay();
  }, 3000);
  


  