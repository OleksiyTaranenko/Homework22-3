let orel = document.getElementById('orel');
let reshka = document.getElementById('reshka');

let field = document.getElementById('field');
field.hidden = 1;


orel.addEventListener('click', function() {    
    
    field.hidden = 0;    
    
    let arr = new Array();
     
    arr[0] = innerHTML = "<img src='img/112_reverse.jpg'/>";
    arr[1] = innerHTML = "<img src='img/2b.jpg'/>";    

    let mainField = document.getElementById('field');
    let value = arr[Math.round(Math.random()*1)];

    mainField.innerHTML = value;  

    let countHeads=0; 

    
    if (value === arr[0]) {
        countHeads++;
        document.getElementById('counter').innerHTML = countHeads;  
    } else {       
        alert('Try again!');
    }


    orel.disabled = 1;
    reshka.disabled = 1;

    setTimeout(()=>{        
        field.hidden=1;
        orel.disabled = 0;
        reshka.disabled = 0;        
    }, 1000);
});


reshka.addEventListener('click', function() {
    
    field.hidden = 0;    
    
    let arr = new Array();     
     
    arr[0] = innerHTML = "<img src='img/2b.jpg'/>";
    arr[1] = innerHTML = "<img src='img/112_reverse.jpg'/>";
    

    let mainField = document.getElementById('field');
    let value2 = arr[Math.round(Math.random()*1)];


    mainField.innerHTML = value2;


    let countHeads=0;
    
    if (value2 === arr[0]) {
        countHeads++;
        document.getElementById('counter').innerHTML = countHeads;  
    } else {        
        alert('Try again!');
    }

    reshka.disabled = 1;
    orel.disabled = 1;

    setTimeout(()=>{        
        field.hidden=1;
        reshka.disabled = 0;
        orel.disabled = 0;         
    }, 1000);
});