var number = document.querySelector("input"), i,
    output='',
    rsult = document.querySelector(".result");

function multiplication(e){
  if(isNaN(number.value)){
  rsult.innerHTML = `<div class='head'>You know, what is number,
 right? (example: 1, 4, 6)</div>`;
  }
  else if(number.value.length==0){
    rsult.innerHTML = `<div class='head'>Oops!! I don't see anything up there, Try enter some Numbers and See the Magic!</div>`;
  }
  else{
    output='';
    let num = document.querySelector('.multiNumber');
    let numValue = num.value;
    num.oninput = function() {
     numValue = this.value;
    }
    for(i=1;i<numValue;i++){
      output += `<p class='value'>${number.value}<span>x<span>${i} = ${number.value*i}</p>`;
    }
    rsult.innerHTML = `<div class='head'>This is ${number.value}'s Multiplication Table</div> 
    ${output}`;
  }
}

number.addEventListener("keyup", multiplication);
