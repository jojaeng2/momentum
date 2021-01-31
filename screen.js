const dynamic = document.querySelector("#dynamic");

function getTime(){
  const date = new Date();
  const day = date.getDay();
  const list = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
  const today = list[day];
  return today
}


function randomString(){
  const stringArr = ["Today is "+ getTime() ,"I'm currently learning Python","I'm currently learning JS","I'm attending PNU"]
  const selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
  const selectStringArr = selectString.split("");

  return selectStringArr
}
function reset(){
  dynamic.textContent = "";
  learning(randomString());
}


function learning(randomArr){
  if (randomArr.length > 0) {
    dynamic.textContent += randomArr.shift();
    setTimeout(function(){
      learning(randomArr);
    },80)
  } else {
    setTimeout(reset,3000);
  }
}
learning(randomString());
function blink(){
  dynamic.classList.toggle("active");
}

setInterval(blink,500);
