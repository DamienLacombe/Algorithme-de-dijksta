//apikey : PbQVmq4jVFNimFEEtyxPawwUT94UcbCA

// fetch(`http://www.mapquestapi.com/directions/v2/route?key=${"PbQVmq4jVFNimFEEtyxPawwUT94UcbCA"}&from=${"5 rue winston churchill, 90000"}&to=${"9 rue carnot, 90300"}&routeType=${"pedestrian"}`)
// .then(response => response.json())
// .then(resp => console.log(resp)) 
const placeList = document.querySelector(".lieux");
const start = document.querySelectorAll(".start input");
const places = document.querySelectorAll(".place input");
const addBtn = document.querySelector(".add");
const calculBtn = document.querySelector(".calcul")


let allPlace = [];
let firstPassage = true;

function getTime(adress1, adress2 ) {
    
    return fetch(`http://www.mapquestapi.com/directions/v2/route?key=${"PbQVmq4jVFNimFEEtyxPawwUT94UcbCA"}&from=${adress1 + ", fr"}&to=${adress2 + ", fr"}`)
    .then(response => response.json())
    .then(resp => {
        
        return resp.route.time;
    }) 
} 

function addPlace(e) {
    e.preventDefault()
    let p = document.createElement("p");
    let adress = ""

    for (let i = 0; i < places.length; i++) {
        i < places.length - 1 ? (
            adress = adress + places[i].value + ", ",
            places[i].value = ""
        ) : (
            adress = adress + places[i].value,
            places[i].value = "" 
        ) 
    }

    allPlace.push([adress])
    p.textContent = adress;
    placeList.append(p)
}

calculBtn.addEventListener("click", () => {

    let startAdress = "";

    for (let i = 0; i < start.length; i++) {
        console.log(i);
        i < start.length - 1 ? (
            startAdress = startAdress + start[i].value + ", ",
            start[i].value = ""
        ) : (
            startAdress = startAdress + start[i].value,
            start[i].value = "" 
        ) 
    }

    if (firstPassage === true) {

        for (let i = 0; i < allPlace.length; i++) {
            console.log(i);
            getTime(startAdress, allPlace[i][0])
            .then(resp => allPlace[i].push(resp))
        }
        
        firstPassage = false
    } else {
        

    }
       console.log(allPlace);
   
})
console.log(allPlace);
addBtn.addEventListener("click", (e) => addPlace(e))




