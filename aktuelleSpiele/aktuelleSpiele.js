 function buildSingleGameView(gameObj)
 {
    let gameContainer = document.createElement("article");
    gameContainer.classList.add("GameContainer");
    gameContainer.classList.add("w3-center");
    gameContainer.classList.add("w3-border");
    gameContainer.classList.add("w3-round-xlarge");
    gameContainer.classList.add("w3-hover-shadow");
    gameContainer.classList.add("w3-padding-16");



    let randomString = gameObj.Name1 + "_" + gameObj.Name2 + "_" + Str_Random(10);

    gameContainer.addEventListener("click", 
      () => {
          detailsVisibility("Details_" + randomString);
   });

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

    let team1 = buildLogoContainerOfTeam(gameObj.Name1, gameObj.Logo1URL, randomID);

    let ResultAndLocationOfGame = buildGameAndLocationView(gameObj);

    let team2 = buildLogoContainerOfTeam(gameObj.Name2, gameObj.Logo2URL, randomID);

    shortInfo.appendChild(team1);
    shortInfo.appendChild(ResultAndLocationOfGame);
    shortInfo.appendChild(team2);

    return shortInfo;
 }


 function buildLogoContainerOfTeam(NameOfTeam, LogoOfTeam, randomID)
 {
   let team = document.createElement("aside");
   let teamAttributes = "team";
   team.classList.add(teamAttributes);

   let imgTeam = document.createElement("img");
   imgTeam.id = randomID;
   imgTeam.src = LogoOfTeam;
   imgTeam.alt = "Logo der Mannschaft " + NameOfTeam;

   let TeamName = document.createElement("p");
   let TeamNameAttributes = "NameOfTeam";
   TeamName.classList.add(TeamNameAttributes);
   TeamName.innerHTML = NameOfTeam;

   team.appendChild(imgTeam);
   team.appendChild(TeamName);

   return team;

 }
 
 function buildGameAndLocationView(gameObj)
 {
   let ResultAndLocationOfGame = document.createElement("article");
   let ResultAndLocationOfGameAttributes = "ResultAndLocation";
   ResultAndLocationOfGame.classList.add(ResultAndLocationOfGameAttributes);

   let dateAndTimeOfGame = document.createElement("article");

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

   return ResultAndLocationOfGame;

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
   let temp = document.getElementById(id);
   if(temp.style.display == "block")
   {
      console.log("Dieses Detail war schon geöffnet, also wird es nun geschlossen!");
      temp.style.display = "none";
      return;
   }

   var y = document.getElementsByClassName("gameDetails");

   for(let i = 0; i < y.length; i++)
   {
         console.log(y[i].style.display);
         y[i].style.display = "none";
   }

   let el = document.getElementById(id);
   el.style.display = "block";

}