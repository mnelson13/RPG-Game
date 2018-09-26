$(document).ready(function() {

var characters = {
    jonSnow: {
        name: "Jon Snow",
        HP: 120,
        AP: 8,
        CAP: 10,
        src: "assets/images/jonsnow.jpg",
    },
    drogon: {
        name: "Drogon",
        HP: 150,
        AP: 7,
        CAP: 20,
        src: "assets/images/drogon.jpg",
    },
    jaime: {
        name: "Jaime Lannister",
        HP: 100,
        AP: 9,
        CAP: 5,
        src: "assets/images/Jaime.jpg"
    },
    nightKing: {
        name: "The Night King",
        HP: 180,
        AP: 6,
        CAP: 25,
        src: "assets/images/nightking.jpg",
    }

}

$("#jonHPCounter").text(characters.jonSnow.HP);
$("#drogonHPCounter").text(characters.drogon.HP);
$("#jaimeHPCounter").text(characters.jaime.HP);
$("#nightKingHPCounter").text(characters.nightKing.HP);

$(".character").on("click", function() {
    if (chosenCharacter.children.length == 0) {
        $(this).attr("class", "yourCharacter");
        $("#chosenCharacter").append(this);
        $(".character").not(this).each(function() {
            $(this).attr("class", "enemy");
            $("#enemies").append(this);
        })
    } else if (defender.children.length == 0) {
        $(this).attr("class", "defender");
        $("#defender").append(this);
    }
});

$("#attack").on("click", function() {
    

})




// function render(character, location) {
//     var newDiv = $("<div>");
//     newDiv.addClass("text-center");
//     var newImg = $("<img>");
//     newImg.attr("src", characters[character].src);
//     var name = $("<p>");
//     name.text(characters[character].name);
//     var HP = $("<p>");
//     HP.text(characters[character].HP);
//     $(location).append(newDiv);
//     newDiv.append(name);
//     newDiv.append(newImg);
//     newDiv.append(HP);
// };

// render(jonSnow, "#characterSelection");
























});