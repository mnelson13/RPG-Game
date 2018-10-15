$(document).ready(function start() {

var characters = {
    jonSnow: {
        name: "Jon Snow",
        HP: 120,
        AP: 9,
        CAP: 15,
        src: "assets/images/jonsnow.jpg",
    },
    drogon: {
        name: "Drogon",
        HP: 150,
        AP: 8,
        CAP: 20,
        src: "assets/images/drogon.jpg",
    },
    jaime: {
        name: "Jaime Lannister",
        HP: 100,
        AP: 15,
        CAP: 5,
        src: "assets/images/Jaime.jpg"
    },
    theNightKing: {
        name: "The Night King",
        HP: 180,
        AP: 7,
        CAP: 18,
        src: "assets/images/nightking.jpg",
    }

}

let playerHealth = 0;
let playerAttack = 0;
let playerChar;
let defenderChar;
let defenderAttack = 0;
let defenderHealth = 0;

//renders characters
function render(character, location) {
    var charDiv = $("<div>");
    charDiv.addClass("character");
    charDiv.attr("id", character);
    charDiv.attr("data-HP", characters[character].HP);
    charDiv.attr("data-AP", characters[character].AP);
    charDiv.attr("data-CAP", characters[character].CAP);

    var imgDiv = $("<img>");
    imgDiv.attr("src", characters[character].src);
    imgDiv.attr("class", "img-fluid charImage")

    var name = $("<p>");
    name.text(characters[character].name);

    var HP = $("<p>");
    HP.attr("id", character +"HP");
    HP.text(characters[character].HP);

    charDiv.append(name);
    charDiv.append(imgDiv);
    charDiv.append(HP);
    $(location).append(charDiv);
};

//to select your character, move them to "Your Character" area and move all others to "enemies" area
$(document.body).on("click", ".character", function() {
    if (chosenCharacter.children.length == 0) {
        $(this).attr("class", "yourCharacter");
        $("#chosenCharacter").append(this);
        playerChar = $(".yourCharacter").attr("id");
        playerAttack = characters[playerChar].AP;
        playerHealth = characters[playerChar].HP;
        
        $(".character").not(this).each(function() {
            $(this).attr("class", "enemy");
            $("#enemies").append(this);
        })
    } 
});

//to select your defender and move them to "defender" area
$(document.body).on("click", ".enemy", function(){
    if (defender.children.length == 0) {
        $("#fightText").empty();
        $(this).attr("class", "defender");
        $("#defender").append(this);
        defenderChar = $(".defender").attr("id");
        defenderAttack = characters[defenderChar].CAP;
        defenderHealth = characters[defenderChar].HP;

    };
})

//attack function
$("#attack").on("click", function() {
    if (chosenCharacter.children.length == 1 && defender.children.length == 1) {
        playerHealth -= defenderAttack;
        defenderHealth -= playerAttack;
        
        //when both player and defender are still alive
        if (playerHealth > 0 && defenderHealth > 0) {
            $("#fightText").text("You attacked " + characters[defenderChar].name + " for " + playerAttack + " damage.\n"
            + characters[defenderChar].name + " attacked you back for " + defenderAttack + " damage.");
            $("#" + playerChar + "HP").text(playerHealth);
            $("#" + defenderChar + "HP").text(defenderHealth);
            playerAttack += characters[playerChar].AP

        //when player defeats current defender and there are still enemies left
        } else if (playerHealth > 0 && defenderHealth <= 0 && enemies.children.length > 0) {
            playerHealth += defenderAttack;
            $("#" + playerChar + "HP").text(playerHealth);
            $("#" + defenderChar + "HP").text(defenderHealth);
            $("#defender").empty();
            $("#fightText").text("You have defeated " + characters[defenderChar].name + ". You can choose to fight another enemy.")
        
        //when defender defeats player
        } else if (playerHealth <= 0) {
            $("#" + playerChar + "HP").text(playerHealth);
            $("#" + defenderChar + "HP").text(defenderHealth);
            $("#fightText").text("You have been defeated! Game over!");
            $("#fightText").append("<button id='reset'>Restart</button>");
        
        //when player defeats current defender and there are no other enemies left
        } else if (playerHealth > 0 && defenderHealth <= 0 && enemies.children.length === 0) {
            $("#" + playerChar + "HP").text(playerHealth);
            $("#" + defenderChar + "HP").text(defenderHealth);
            $("#fightText").text("You won!! Game over!!")
            $("#fightText").append("<button id='reset'>Restart</button>");
            
        }
    }
});

//resets page when button is clicked
$(document.body).on("click", "#reset", function(){
    location.reload();
});

//renders characters on page load
render("jonSnow", "#characterSelection");
render("drogon", "#characterSelection");
render("jaime", "#characterSelection");
render("theNightKing", "#characterSelection");
























});