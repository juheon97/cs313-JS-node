function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function getCpuChoice() {
    var num = getRandomInt(0,2);

    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "card";
        default:
            return "apple";

    }
}
function getWinner(player, cpu, username) {
    if (player == cpu){
        winner = "tie"
    }
    else if ((player == 'rock' && cpu == "card") || (player == "card" && cpu == "apple")
    || (player == "apple" && cpu == "rock"))
    winner = username;
    else {
        winner = "cpu"
    }
    return winner;
}

function playGame(req, res){
    var player = req.query.player_choice;
    var username = req.query.username;
    
    var cpu = getCpuChoice();
    var winner = getWinner(player, cpu, username);
}
module.exports= {playGame: playGmae};