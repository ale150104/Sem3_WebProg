 function buildSingleGameView(gameObj)
 {
    let gameContainer = document.createElement("article");
    // let gameContainerAttributes = ["GameContainer", "w3-center",  "w3-border",  "w3-round-xlarge",  "w3-hover-shadow",  "w3-padding-16"];
    gameContainer.classList.add("GameContainer");
    gameContainer.classList.add("w3-center");
    gameContainer.classList.add("w3-border");
    gameContainer.classList.add("w3-round-xlarge");
    gameContainer.classList.add("w3-hover-shadow");
    gameContainer.classList.add("w3-padding-16");
    gameContainer.addEventListener("click", 
        (event) => {
            console.log("Ein Spiel wurde angeklickt, hier das Event:");
            detailsVisibility("Details_" + event.target.id);

    });


    let randomString = gameObj.Name1 + "_" + gameObj.Name2 + "_" + Str_Random(10);

    let shortInfo = buildShortInfoView(gameObj, randomString);

    let gameDetails = buildGameDetails(gameObj, randomString);

    gameContainer.appendChild(shortInfo);

    gameContainer.appendChild(gameDetails);

    return gameContainer;

 }




 function buildShortInfoView(gameObj, randomID)
 {
    
    let shortInfo = document.createElement("article");
    shortInfoAttribute = "ShortInfo";
    shortInfo.classList.add(shortInfoAttribute);

    //-----------------------------------

    let team1 = document.createElement("aside");
    let team1Attributes = "team1";
    team1.classList.add(team1Attributes);

    let imgTeam1 = document.createElement("img");
    imgTeam1.id = randomID;
    imgTeam1.src = gameObj.Logo1URL;
    imgTeam1.alt = "Logo der Mannschaft " + gameObj.Name1;

    let NameOfTeam1 = document.createElement("p");
    let NameOfTeam1Attributes = "NameOfTeam";
    NameOfTeam1.classList.add(NameOfTeam1Attributes);
    NameOfTeam1.innerHTML = gameObj.Name1;

    team1.appendChild(imgTeam1);
    team1.appendChild(NameOfTeam1);


    //------------------------

    let ResultAndLocationOfGame = document.createElement("article");
    let ResultAndLocationOfGameAttributes = "ResultAndLocation";
    ResultAndLocationOfGame.classList.add(ResultAndLocationOfGameAttributes);

    let dateAndTimeOfGame = document.createElement("article");
    // let dateAndTimeOfGameAttributes = ["dateAndTime" , "w3-hide-small"];

    dateAndTimeOfGame.classList.add("dateAndTime");
    dateAndTimeOfGame.classList.add("w3-hide-small");
    dateAndTimeOfGame.innerHTML = gameObj.DateOfGame;

    let resultOfGame = document.createElement("article");
    let resultOfGameAttributes = "result";
    resultOfGame.classList.add(resultOfGameAttributes);

    let locationOfGame = document.createElement("article");
    locationOfGame.classList.add("gameLocation");
    locationOfGame.classList.add("w3-hide-small");
    locationOfGame.innerHTML = gameObj.LocationOfGame;

    ResultAndLocationOfGame.appendChild(dateAndTimeOfGame);
    ResultAndLocationOfGame.appendChild(resultOfGame);
    ResultAndLocationOfGame.appendChild(locationOfGame);

    let goalsTeam1 = document.createElement("button");
    goalsTeam1.innerHTML = gameObj.Goals1;

    let span = document.createElement("span");
    span.innerHTML = ":";

    let goalsTeam2 = document.createElement("button");
    goalsTeam2.innerHTML = gameObj.Goals2;

    resultOfGame.appendChild(goalsTeam1);
    resultOfGame.appendChild(span);
    resultOfGame.appendChild(goalsTeam2);


    //------------------------

    
    let team2 = document.createElement("aside");
    let team2Attributes = "team2";
    team2.classList.add(team2Attributes);

    let imgTeam2 = document.createElement("img");
    imgTeam2.id = randomID;
    imgTeam2.src = gameObj.Logo2URL;
    imgTeam2.alt = "Logo der Mannschaft " + gameObj.Name2;

    let NameOfTeam2 = document.createElement("p");
    let NameOfTeam2Attributes = "NameOfTeam";
    NameOfTeam2.classList.add(NameOfTeam2Attributes);
    NameOfTeam2.innerHTML = gameObj.Name2;

    team2.appendChild(imgTeam2);
    team2.appendChild(NameOfTeam2);


    //--------------------------

    shortInfo.appendChild(team1);
    shortInfo.appendChild(ResultAndLocationOfGame);
    shortInfo.appendChild(team2);

    return shortInfo;
 }


 function buildGameDetails(gameObj, randomID)
 {
    let gameDetails = document.createElement("article");
    gameDetails.classList.add("gameDetails");
    gameDetails.classList.add("w3-animate-opacity");
    gameDetails.id = "Details_" + randomID;

    let hr = document.createElement("hr");
    gameDetails.appendChild(hr);

    let detailedInfos = document.createElement("section");
    detailedInfos.classList.add("detailedInfos");

    let team1 = detailsOfATeam(gameObj.Name1, gameObj.Players1, gameObj.Reserve1);

    let team2 = detailsOfATeam(gameObj.Name2, gameObj.Players2, gameObj.Reserve2);

    let moreInfos = moreInfosForGame(gameObj.additionalInfo);

    detailedInfos.appendChild(team1);
    detailedInfos.appendChild(team2);
    detailedInfos.appendChild(moreInfos);
    gameDetails.appendChild(detailedInfos);
    return gameDetails;

 }


 function moreInfosForGame(url)
 {
    let container = document.createElement("article");
    container.classList.add("mySlides");
    container.classList.add("w3-animate-right");

    let link = document.createElement("a");
    link.target = "_blank";
    link.href = url;
    link.innerHTML = "Für Mehr Infos zu diesem Spiel, Klicken sie Hier";

    container.appendChild(link);
    return container;
 }



 function detailsOfATeam(teamName, startingPlayers, ReservePlayers)
  {
    let InfoTeam = document.createElement("article");
    InfoTeam.classList.add("mySlides");
    InfoTeam.classList.add("w3-animate-right");

    let title = document.createElement("h5");
    title.innerHTML = "Aufstellung " + teamName;

    InfoTeam.appendChild(title);

    let startingEleven = document.createElement("section");
    startingEleven.classList.add("Player-Informations");

    //------------------------

    appendPlayers(startingPlayers, startingEleven);
    
    //-----------------------

    let horizontalRule = document.createElement("hr");
    horizontalRule.style.opacity = 0;

    startingEleven.appendChild(horizontalRule);

    let titleBank = document.createElement("h5");
    titleBank.innerHTML = "Bank " + teamName;

    startingEleven.appendChild(titleBank);

    appendPlayers(ReservePlayers, startingEleven);

    InfoTeam.appendChild(startingEleven);

    return InfoTeam;
  }

 function appendPlayers(players, HtmlElement)
 {
    console.log("Die Spieler:");
    for(let i = 0; i < players.length; i++)
    {
        let playerCard = document.createElement("article");
        playerCard.classList.add("w3-border-top");
        playerCard.classList.add("w3-border-bottom");

        let imgOfPlayer = document.createElement("img");
        imgOfPlayer.alt = "Bild des Spielers " + players[i].Name;
        imgOfPlayer.src = players[i].URLImage;

        let nameOfPlayer = document.createElement("span");
        nameOfPlayer.classList.add("Player-Name");
        nameOfPlayer.innerHTML = players[i].Name;

        playerCard.appendChild(imgOfPlayer);
        playerCard.appendChild(nameOfPlayer);
        HtmlElement.appendChild(playerCard);
    }

 }



 function Str_Random(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    // Loop to generate characters for the specified length
    for (let i = 0; i < length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }
    return result;
}

function detailsVisibility(id)
{
   let el = document.getElementById(id);
   if(el.style.display == "none")
    {
       el.style.display = "block";
       return;
   }

   el.style.display = "none";

}