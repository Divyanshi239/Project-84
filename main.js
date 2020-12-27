canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

car1_width= 120;
car1_height= 70;
car1_image= "https://lh3.googleusercontent.com/proxy/nM4e48UgJXC6jMlnQ9WZXmmCAbK-IylXnlBJvc43mgU0t3ed8IiQYQdJK5kNmnMDUy1Xm4POzU5sQ1XRlNmhLkYxwJRKlFKgATrH0Xy6_fIbi67EX_XzHp9PKUgrcHmCfpW8p6-ZxknxqZqHHxJOpxyGXJ7B6GgtL54iXa0WYWPtlChxBmB9iDznUuLLVZDHfuoBcw";
car1_x= 10;
car1_y= 10;

car2_width= 120;
car2_height= 70;
car2_image= "https://i.postimg.cc/YqdnnNX1/car1.png";
car2_x= 10;
car2_y= 100;

background_image= "https://i.pinimg.com/originals/df/b1/99/dfb19993bbbabfbd110610e4dc821b65.png";

function add() {
  background_imgTag= new Image();
  background_imgTag.onload= uploadBackground;
  background_imgTag.src=background_image;
  
  car1_imgTag= new Image();
  car1_imgTag.onload= uploadcar1;
  car1_imgTag.src= car1_image;
  
  car2_imgTag= new Image();
  car2_imgTag.onload= uploadcar2;
  car2_imgTag.src= car2_image;
  
  function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
  }
  
  function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
  }
  
  function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
  }
  window.addEventListener("keydown", my_keydown);
}

function my_keydown(e) {
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38') {
        car1_up();
        console.log("Up Arrow Key Pressed For Car 1");
    }
    if (keyPressed=='40') {
        car1_down();
        console.log("Down Arrow Key Pressed For Car 1");
    }
    if (keyPressed=='37') {
        car1_left();
        console.log("Left Arrow Key Pressed For Car 1");
    }
    if (keyPressed=='39') {
        car1_right();
        console.log("Right Arrow Key Pressed For Car 1");
    }
    if (keyPressed=='87') {
        car2_up();
        console.log("Up Arrow Key Pressed For Car 2");
    }
    if (keyPressed=='65') {
        car2_left();
        console.log("Left Arrow Key Pressed For Car 2");
    }
    if (keyPressed=='83') {
        car2_down();
        console.log("Down Arrow Key Pressed For Car 2");
    }
    if (keyPressed=='68') {
        car2_right();
        console.log("Right Arrow Key Pressed For Car 2");
    }
}

