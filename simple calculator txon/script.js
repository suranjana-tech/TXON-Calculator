let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    } else if(e.target.innerHTML=='%'){
        string=parseFloat((document.getElementById('input').value)*(1/100));
        document.querySelector('input').value=string;
        console.log(string);
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

let buttonZero=document.getElementById('zero');
buttonZero.addEventListener('click',(o)=>{
    string=string+o.target.innerHTML;
    console.log(string)
    document.querySelector('input').value=string;
})

let buttonDivide=document.getElementById('divide');
buttonDivide.addEventListener('click',(d)=>{
    string=string+d.target.innerHTML;
    document.querySelector('input').value=string;
})