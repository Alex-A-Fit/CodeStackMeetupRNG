let gameList = ["Borderlands","Apex Legends","Resident Evil", "Pokemon","Metal Gear Solid"];
let actorList = ["Daisy Ridley", "Tom Cruise", "Will Smith", "Jennifer Lawrence", "Lisa Kudrow"];

let gameListBtn = document.getElementById("gameList");
let actorListBtn = document.getElementById("actorList")
let nameGen = document.getElementById("name")
let nameGenButton = document.getElementById("nameGenBtn")

let chosenList =[];


gameListBtn.addEventListener("click",GameBtnChecked);
actorListBtn.addEventListener("click", ActorBtnChecked);
nameGenButton.addEventListener("click", NameGenerator);

function GameBtnChecked(){
    if(actorListBtn.checked){
        gameListBtn.checked = true;
        actorListBtn.checked = false;
    }
    ChooseList(gameList);
    console.log(chosenList)
}

function ActorBtnChecked(){
    if(gameListBtn.checked){
        actorListBtn.checked = true;
        gameListBtn.checked = false;
    }
    ChooseList(actorList);
    console.log(chosenList)
}

function ChooseList(list){
    chosenList = list
}

function NameGenerator(){
    if(gameListBtn.checked){
        let randomNumber = Math.floor(Math.random() * gameList.length)
        nameGen.innerText = gameList[randomNumber];
    }else {
        let randomNumber = Math.floor(Math.random() * actorList.length)
        nameGen.innerText = actorList[randomNumber];
    }
}



