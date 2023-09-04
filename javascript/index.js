function updateTime(){
  //Los Angeles //
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("ddd DD MMM YYYY");

  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small]"
  );

  //Paris //
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("ddd DD MMM YYYY");

  let parisTimeElement = parisElement.querySelector(".time");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small]");
}

updateTime();
setInterval(updateTime, 1000);





