//SPEED DEFAULT
var WALK = 3.6; //km/soat
var BICYCLE = 20.1; // km/soat
var CAR = 70; //km/soat
var PLANE = 800; //km/soat

//HTML -> JAVASCRIPT
var elForm = document.querySelector(".sidebar__form")
var elInput = document.querySelector(".sidebar__input")

var elWalk = document.querySelector(".sidebar__walk")
var elBike = document.querySelector(".sidebar__bike")
var elCar = document.querySelector(".sidebar__car")
var elPlane = document.querySelector(".sidebar__plane")



// FUNCTION HOURS,SPEED,DISTANCE
function WBCP(distance, speed) {
    var hour = Math.floor(distance / speed)
    var minut = Math.floor(((distance / speed) - hour) * 60)
    var second = Math.round(((((distance / speed) - hour) * 60)-minut) * 60);
    return `${hour} h,${minut} m,${second} s`;
}

// submit x get 
elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var inputValue = elInput.value.trim();

    if (isNaN(inputValue)) {
        return alert("Enter Number")
    }
    if (inputValue <= 0) {
        return alert("Enter plus Number")
    }
    
    elWalk.textContent = WBCP(inputValue, WALK)
    elBike.textContent = WBCP(inputValue, BICYCLE)
    elCar.textContent = WBCP(inputValue, CAR)
    elPlane.textContent = WBCP(inputValue, PLANE)
})