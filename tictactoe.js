// First: Let's teach the user how to play the game 
// We click on an empty box to indicate X and double click to iindcate O 


// first let's set the reset button

let clearBtn = document.querySelector('#reset');

// Now we want to clear all the squares 
// so we grab all the squares 
let squares = document.querySelectorAll("td");

// To clear all the squares 
function resetAll(){
    for (let i=0; i<squares.length; i++){
        squares[i].textContent = "";
    }
}

clearBtn.addEventListener('click', resetAll())



function forXAndO(){
    if(this.textContent===''){
        this.textContent = "X";
    }else if (this.textContent ==='X'){
        this.textContent = 'O';
    }else{
        this.textContent = '';
    }
};

for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', forXAndO);
   
}