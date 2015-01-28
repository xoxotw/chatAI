function qName(){
  document.getElementById('bubble').innerHTML = "Hi!" +
  "<br>" + "&nbspMy name is " +
   obj3.name;
}

function qAge(){
  document.getElementById('bubble').innerHTML = "Hi!" +
  "<br>" + "&nbspI am " +
   obj3.age + " years old.";
}

function qType(){
  document.getElementById('bubble').innerHTML = "Hi!" +
  "<br>" + "&nbspI am a " +
   obj3.type;
}

function qFun(){
  document.getElementById('bubble').innerHTML = "Hi!" +
  "<br>" + "&nbspI love to  " +
   obj3.funx;
}

function qRandom(){
	var chatObjs = new Array();
	chatObjs[0] = obj1;
	chatObjs[1] = obj2;
	chatObjs[2] = obj3;
	var randomIndex = Math.round(Math.random() * 2);
	document.getElementById('bubble').innerHTML = chatObjs[randomIndex];
  document.getElementById('picture').src = chatObjs[randomIndex].photo;
}

var notHappy = false;

function askQ(){
  var findme = document.getElementById('askBox').value.toLowerCase();
  
  var dontUnderstand = new Array();
  dontUnderstand[0] = "Excuse me, What did You say ?";
  dontUnderstand[1] = "Sorry, I cant understand You now. ^_^";
  dontUnderstand[2] = "Sorry!, I got to go now... CU !";
  dontUnderstand[3] = "ohh... Can you repeat that one more time ?";
  var randomIndex = Math.round(Math.random() * 3);
  document.getElementById('bubble').innerHTML = dontUnderstand[randomIndex];
    
  if(findme.match(/\bbg gray\b/)){
    document.bgColor="#C1BEC2";
  }
  if(findme.match(/\bbg pink\b/)){
    document.bgColor="#F777D9";
  } 
  if(findme.match(/\bbg blue\b/)){
    document.bgColor="#85E0F2";
  }  

  if(findme.match(/(age|old)/)){
    document.getElementById('bubble').innerHTML = "ohh,, I am " +
            obj1.age + " years old, How old are You ?";

  }
  else if(!isNaN(findme)){
              document.getElementById('bubble').innerHTML = "ohh.. that's kinda old !";
  }

  if(findme.match(/(color)/) && notHappy == true){
    document.getElementById('bubble').innerHTML = "My favourite color " +
            " is Neon Pink, really ^_^";
  } 
  else if(findme.match(/(color)/) && notHappy == false){
    document.getElementById('bubble').innerHTML = "My favourite color " +
            " is Purple, What is Yours?";
  }
  else if(findme.match(/(not|happy|dont|answer)/)){
    document.getElementById('bubble').innerHTML = "ohh,... I'll keep that in mind";
    notHappy = true;
  }
  else if(findme.match(/(pink|purple|green)/)){
              document.getElementById('bubble').innerHTML = "well...that's cute !!";
  }
  
  if(findme.match(/(hi|hello)/)){
    document.getElementById('bubble').innerHTML = "Hi there, nice to meet You !";       
  }
  
}