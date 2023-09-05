function updateTime(){
  //New York //
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("ddd DD MMM YYYY");

    let newYorkTimeElement = newYorkElement.querySelector(".time");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }

  //Paris //
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("ddd DD MMM YYYY");

    let parisTimeElement = parisElement.querySelector(".time");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
//London //
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("ddd DD MMM YYYY");

    let londonTimeElement = londonElement.querySelector(".time");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
//Tokyo//
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("ddd DD MMM YYYY");

    let tokyoTimeElement = tokyoElement.querySelector(".time");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }

}




function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
      cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector ("#cities");
    citiesElement.innerHTML = `
    <div class="city" >
    <div>
    <h2>${cityName}</h2>
<div class="date">${cityTime.format("DD MMM YYYY")}</div>
</div>
<div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
</div>
<a href="index.html"> go back to all cities </a>
`;
}


updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);





