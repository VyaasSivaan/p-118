
var quick_draw_data_set = ["aircraft carrier", "airplane", "yoga", "zebra", "zigzag"];


var random_number = Math.floor(Math.random() * quick_draw_data_set.length);


console.log("Random Sketch Name:", quick_draw_data_set[random_number]);


var sketch = quick_draw_data_set[random_number];


document.getElementById("sketch_to_be_drawn").textContent = "Sketch To be Drawn: " + sketch;


var timer_counter = 0;
var timer_check = "";
var drawn_sketch = "";
var answer_holder = "";
var score = 0;

function updateCanvas() {
    background(255); 
  
    
    var random_number = Math.floor(Math.random() * quick_draw_data_set.length);
    console.log("Random Sketch Name:", quick_draw_data_set[random_number]);
  
 
    var sketch = quick_draw_data_set[random_number];
    document.getElementById("sketch_to_be_drawn").textContent = "Sketch To be Drawn: " + sketch;
  }
  
  
  function setup() {
    var canvas = createCanvas(280, 280); 
    canvas.position((windowWidth - width) / 2, 150); 
    background(255); 
  
    
    draw = function() {
      check_sketch(); 
      if (drawn_sketch === sketch) { 
        answer_holder = "set"; 
        score++; 
        document.getElementById("score").textContent = "Score: " + score;
      }
    };
  }
  
  r
  function check_sketch() {
    timer_counter++; 
    document.getElementById("timer").textContent = "Timer: " + timer_counter; 
  
    console.log("Timer Counter:", timer_counter);
  
    if (timer_counter > 400) { 
      timer_counter = 0; 
      timer_check = "completed"; 
      if (timer_check === "completed" || answer_holder === "set") {
        timer_check = ""; 
        answer_holder = ""; 
        updateCanvas(); 
      }
    }
  }
  


