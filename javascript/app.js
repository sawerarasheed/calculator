function getNum(num){
    document.getElementById('result').value += num;
}

function clearNum(){
    document.getElementById('result').value = '';
}

function removeNumb(){
    var res = document.getElementById('result').value; 
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1)
}

function getRes(){
    var inputExp = document.getElementById('result').value;
  var ReplacedExp;
  
  switch(inputExp){
   case 'π':
     ReplacedExp=inputExp.replace('π','Math.PI');
     
  case 'sin':
     ReplacedExp=inputExp.replace('sin','Math.sin');
      
  case 'sec':
     ReplacedExp=inputExp.replace('sec','Math.sec');
          
  case 'cosec':
     ReplacedExp=inputExp.replace('cosec','Math.cosec');
     
  case 'cos':
     ReplacedExp=inputExp.replace('cos','Math.cos');
     
  case 'tan':
     ReplacedExp=inputExp.replace('tan','Math.tan');
   
   
  case 'log':
     ReplacedExp=inputExp.replace('log','Math.log');
   
  case '√':
     ReplacedExp=inputExp.replace('√','Math.radiac');
   
  case 'X':
     ReplacedExp=inputExp.replace('X','Math.E');
     
  case 'e':
     ReplacedExp=inputExp.replace('e','Math.e');
     
     break;
     
  default:
  
     break;
   
   
   
   
  }
  
    document.getElementById('result').value = eval(document.getElementById('result').value)
}
