
setInterval(function(){
    let color1 = 'rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+ ')';
    var colorf = document.getElementById('nameflesh');
    colorf.style.color = color1;
},100);
// var audiof = new Audio('background.mp3');

function musicf()
{
    audiof.pause();
    audiof.play();
    location.reload();
     
    
}

addEventListener('load',()=>{
    
    audiof.play();
})
var playerwon;
var canvasf9 = document.getElementById('canvasf1');
var ctx1 = canvasf9.getContext('2d');
canvasf9.width = 200;
canvasf9.height = 200;

var canvasf8 = document.getElementById('canvasf2');
var ctx2 = canvasf8.getContext('2d');
canvasf8.width = 200;
canvasf8.height = 200;

var canvasf7 = document.getElementById('canvasf3');
var ctx3 = canvasf7.getContext('2d');
canvasf7.width = 200;
canvasf7.height = 200;

var canvasf6 = document.getElementById('canvasf4');
var ctx4 = canvasf6.getContext('2d');
canvasf6.width = 200;
canvasf6.height = 200;

var canvasf5 = document.getElementById('canvasf5');
var ctx5 = canvasf5.getContext('2d');
canvasf5.width = 200;
canvasf5.height = 200;

var canvasf4 = document.getElementById('canvasf6');
var ctx6 = canvasf4.getContext('2d');
canvasf4.width = 200;
canvasf4.height = 200;

var canvasf3 = document.getElementById('canvasf7');
var ctx7 = canvasf3.getContext('2d');
canvasf3.width = 200;
canvasf3.height = 200;

var canvasf2 = document.getElementById('canvasf8');
var ctx8 = canvasf2.getContext('2d');
canvasf2.width = 200;
canvasf2.height = 200;

var canvasf1 = document.getElementById('canvasf9');
var ctx9 = canvasf1.getContext('2d');
canvasf1.width = 200;
canvasf1.height = 200;


// Making Array
var arr = [9,10,11,12,13,14,15,16,17];


function Ischeck(num)
{
    switch(num)
    {
        case 1:
            if((arr[1-1] == arr[2-1] && arr[2-1] == arr[3-1]) || (arr[4-1] == arr[7-1] && arr[7-1] == arr[1-1]) || (arr[1-1] == arr[5-1] &&  arr[5-1] == arr[9-1]))
            {
                return 1;
            }
            else
            {
                return 0;
            }
        case 2:
            if((arr[2-1] == arr[5-1]&&arr[5-1] == arr[8-1]) || (arr[1-1] == arr[2-1]&&arr[2-1] == arr[3-1]))
            {
                return 1;
            }
            else
            {
                return 0;
            }
        case 3:
            if((arr[1-1] == arr[2-1]&&arr[2-1] == arr[3-1]) || (arr[3-1] == arr[6-1]&&arr[6-1] == arr[9-1]) || (arr[3-1] == arr[5-1]&&arr[5-1] == arr[7-1]))
            {
                return 1;
            }
            else
            {
                return 0;
            }
        case 4:
            if((arr[4-1] == arr[5-1] && arr[5-1] == arr[6-1])||(arr[1-1] == arr[5-1]&&arr[5-1] == arr[9-1]))    
            {
                return 1;
            }
            else
            {
                return 0;
            }
        case 5:
            if((arr[5-1]==arr[4-1]&&arr[4-1]==arr[6-1] ) || (arr[1-1]==arr[5-1]&&arr[5-1]==arr[7-1]) || (arr[2-1]==arr[5-1]&&arr[5-1]==arr[8-1]) || (arr[3-1] == arr[5-1]&&arr[5-1] == arr[7-1-1] ))
            {
                return 1;
            }
            else
            {
                return 0;
            }
        case 6:
            if((arr[4-1] == arr[5-1]&&arr[5-1] == arr[6-1])||(arr[3-1] == arr[6-1]&&arr[6-1] == arr[9-1]))  
            {
                return 1;
            }
            else
            {
                return 0;
            }
        case 7:
            if((arr[1-1] == arr[4-1]&&arr[4-1] == arr[7-1]) || (arr[7-1] == arr[8-1]&&arr[8-1] == arr[9-1]) || (arr[3-1] == arr[5-1]&&arr[5-1] == arr[7-1]))
            {
                return 1;
            }
            else
            {
                return 0;
            }
        case 8:
            if((arr[7-1] == arr[8-1]&&arr[8-1] == arr[9-1])||(arr[2-1] == arr[5-1]&&arr[5-1] == arr[8-1]))  
            {
                return 1;
            }
            else
            {
                return 0;
            }
        case 9:
            if((arr[3-1] == arr[6-1] && arr[6-1] == arr[9-1]) || (arr[1-1] == arr[5-1] &&arr[5-1] == arr[9-1]) || (arr[8-1] == arr[9-1] && arr[9-1]== arr[7-1]))
            {
                return 1;
            }
            else
            {
                return 0;
            }

    }
}


var count = 0;

let isnum1 = false;
function fun1()
{
    ascheck()
    if(isnum1 == false)
    {
        var em = document.getElementById('num1');
    if(count%2 == 0)
    {
    
    em.innerHTML = '&#9898';
    arr.splice(0,1,1);
    }
    else
    {
        em.innerHTML = '&#10060';
        arr.splice(0,1,2);
    }
   
    
    
    count++;
    if(Ischeck(1))
    {
        count = 9;
        ascheck()
    }
}
else
{
    window.alert('This box has Ocuupied');
}
    isnum1 = true;
}

let isnum2 = false;
function fun2()
{
    ascheck()
    if(isnum2 == false)
    {
        var em = document.getElementById('num2');
    if(count%2 == 0)
    {
    
    em.innerHTML = '&#9898';
    arr.splice(1,1,1);
    }
    else
    {
        em.innerHTML = '&#10060';
        arr.splice(1,1,2);
    }
    count++;
    if(Ischeck(2))
    {
        count = 9;
        ascheck()
    }
}
else
{
    window.alert('This box has Ocuupied');
}
    isnum2 = true;
}

let isnum3 = false;
function fun3()
{
    ascheck()
    if(isnum3 == false)
    {
        var em = document.getElementById('num3');
    if(count%2 == 0)
    {
    
    em.innerHTML = '&#9898';
    arr.splice(2,1,1);
    }
    else
    {
        
        em.innerHTML = '&#10060';
        arr.splice(2,1,2);
    }
    count++;
    if(Ischeck(3))
    {
        count = 9;
        ascheck()
    }
    }
    else
    {
    window.alert('This box has Ocuupied');
    }
    isnum3 = true;
}

let isnum4 = false;
function fun4()
{
    ascheck()
    if(isnum4 == false)
    {
        var em = document.getElementById('num4');
    if(count%2 == 0)
    {
    
    em.innerHTML = '&#9898';
    arr.splice(3,1,1);
    }
    else
    {
       
        em.innerHTML = '&#10060';
        arr.splice(3,1,2);
    }
    count++;
    if(Ischeck(4))
    {
        count = 9;
        ascheck()
    }
}
else
{
    window.alert('This box has Ocuupied');
}
    isnum4 = true;
}

let isnum5 = false;
function fun5()
{
    ascheck()
    if(isnum5 == false)
    {var em = document.getElementById('num5');
    if(count%2 == 0)
    {
    
    em.innerHTML = '&#9898';
    arr.splice(4,1,1);
    }
    else
    {
       
        em.innerHTML = '&#10060';
        arr.splice(4,1,2);
    }
    count++;
    if(Ischeck(5))
    {
        count = 9;
        ascheck()
    }
}
else
{
    window.alert('This box has Ocuupied');
}
    isnum5 = true;
}

let isnum6 = false;
function fun6()
{
    ascheck()
    if(isnum6 == false)
    {var em = document.getElementById('num6');
    if(count%2 == 0)
    {
    
    em.innerHTML = '&#9898';
    arr.splice(5,1,1);
    }
    else
    {
       
        em.innerHTML = '&#10060';
        arr.splice(5,1,2);
    }
    count++;
    if(Ischeck(6))
    {
        count = 9;
        ascheck()
    }
}
else
{
    window.alert('This box has Ocuupied');
}
    isnum6 = true;
}

let isnum7 = false;
function fun7()
{
    ascheck()
    if(isnum7 == false)
    {var em = document.getElementById('num7');
    if(count%2 == 0)
    {
    
    em.innerHTML = '&#9898';
    arr.splice(6,1,1);
    }
    else
    {
       
        em.innerHTML = '&#10060';
        arr.splice(6,1,2);
    }
    count++;
    if(Ischeck(7))
    {
        count = 9;
        ascheck()
    }
}
else
{
    window.alert('This box has Ocuupied');
}
    isnum7 = true;
}


let isnum8 = false;
function fun8()
{
    ascheck()
    if(isnum8 == false)
    {var em = document.getElementById('num8');
    if(count%2 == 0)
    {
    
    em.innerHTML = '&#9898';
    arr.splice(7,1,1);
    }
    else
    {
       
        em.innerHTML = '&#10060';
        arr.splice(7,1,2);
    }
    count++;
    if(Ischeck(8))
    {
        count = 9;
        ascheck()
    }
}
else
{
    window.alert('This box has Ocuupied');
}
    isnum8 = true;
}

let isnum9 = false;
function fun9()
{
    ascheck()
    if(isnum9 == false)
    {var em = document.getElementById('num9');
    if(count%2 == 0)
    {
    
    em.innerHTML = '&#9898';
    arr.splice(8,1,1);
    }
    else
    {
        
        em.innerHTML = '&#10060';
        arr.splice(8,1,2);
    }
    count++;
    if(Ischeck(9))
    {
        count = 9;
        ascheck()
    }
}
else
{
    window.alert('This box has Ocuupied');
}
    isnum9 = true;
}

function ascheck()
{
if(count > 8)
{
    window.alert('Player Won!');
    location.reload();
}
}







