

// HTML ke saare cells ko select karke 'cells' variable mein daalege.
const cells = document.querySelectorAll('.cell');
// HTML ke message element ko select karna jahan result dikhega.
const messageElement = document.getElementById('message');

// Player ke liye constants define karna.
const HUMAN_PLAYER = 'X';
const COMPUTER_PLAYER = 'O';

// Ek 'virtual' board banayenge jo game ki state track karega.
// Yeh ek array hoga, jo logic ke liye istemal hoga.
let originalBoard;

// Jeetne ke saare 8 possible combinations.
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// GAME START & RESTART


// Game ko shuru karna.
let firstPlayer = HUMAN_PLAYER; // Default
const firstPlayerSelect = document.getElementById('firstPlayerSelect');
if (firstPlayerSelect) {
    firstPlayerSelect.addEventListener('change', function() {
        firstPlayer = this.value;
        startGame();
    });
    firstPlayer = firstPlayerSelect.value;
}
startGame();

// Game shuru ya restart karne ke liye function.
function startGame() {
    // Virtual board ko reset karna, jismein 0 se 8 tak ke numbers honge.
    originalBoard = Array.from(Array(9).keys());
    // Message area ko khaali karna.
    messageElement.textContent = '';
    // Saare visual cells ko saaf karna.
    cells.forEach(cell => {
        cell.textContent = ''; // Cell ka text hatana.
        // Cell par lage purane event listener ko hatakar naya lagana.
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick, { once: true });
    });
    // Pehli move kiski hai, uske hisaab se chalana
    if (firstPlayer === 'computer') {
        setTimeout(() => {
            // Pehli move random cell par kare
            const khali = emptySquares();
            const randomIndex = khali[Math.floor(Math.random() * khali.length)];
            turn(randomIndex, COMPUTER_PLAYER);
        }, 200);
    }
}

// Restart button ke liye function, jo seedha startGame() ko call karta hai.
function restartGame() {
    startGame();
}

// GAMEPLAY FUNCTIONS


// Jab user kisi cell par click karta hai, tab yeh function chalta hai.
function handleCellClick(e) {
    // Click kiye gaye cell ki 'id' nikalna (jo 0 se 8 tak hai).
    const cellId = e.target.id;
    // Check karna ki kya uss jagah par abhi bhi number hai (yaani, khaali hai).
    if (typeof originalBoard[cellId] === 'number') {
        // Insaan ki chaal chalna.
        turn(cellId, HUMAN_PLAYER);
        // Check karna ki insaan jeeta toh nahi, aur game draw toh nahi hua.
        if (!checkWin(originalBoard, HUMAN_PLAYER) && !checkTie()) {
            // Agar game chalu hai, to 0.5 second baad computer ki chaal chalwana.
            setTimeout(() => {
                turn(bestSpot(), COMPUTER_PLAYER);
            }, 500);
        }
    }
}

// Yeh function board par chaal chalta hai (dono ke liye).
function turn(cellId, player) {
    // Virtual board (array) mein player ka nishan ('X' ya 'O') daalna.
    originalBoard[cellId] = player;
    // Visual board (HTML) mein player ka nishan dikhana.
    document.getElementById(cellId).textContent = player;
    // Har chaal ke baad check karna ki kya yeh player jeet gaya.
    let gameWon = checkWin(originalBoard, player);
    // Agar koi jeet gaya hai, to game khatm karna.
    if (gameWon) gameOver(gameWon);
    // Jeetne ke alawa, yeh bhi check karna ki game draw toh nahi ho gaya.
    checkTie();
}


// WIN / DRAW CHECKING FUNCTIONS


// Yeh function check karta hai ki kya koi player jeeta hai.
function checkWin(board, player) {
    // Board ke un sabhi index ko dhoondhna jahan 'player' ne chaal chali hai.
    // .reduce() method se ek naya array banate hain jismein sirf player ke moves ke index hote hain.
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    // winningCombinations ke har pattern ko check karna.
    for (let [index, win] of winningCombinations.entries()) {
        // .every() check karta hai ki kya winning pattern ke saare elements player ke moves mein hain.
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            // Agar haan, to gameWon object set karna aur loop tod dena.
            gameWon = { index: index, player: player };
            break;
        }
    }
    return gameWon;
}


// Yeh function check karta hai ki game draw (tie) ho gaya hai ya nahi.
function checkTie() {
    // Agar khaali squares ki sankhya 0 hai, to matlab board bhar gaya hai.
    if (emptySquares().length === 0) {
        // Saare cells se click listener hata dena.
        cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
        // Draw ka message dikhana.
        messageElement.textContent = 'Game Draw Ho Gaya! ';
        return true;
    }
    return false;
}

// Game khatm hone par yeh function chalta hai.
function gameOver(gameWon) {
    // Saare cells se click listener hata dena.
    cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
    // Jeetne ya haarne ka message set karna.
    const message = gameWon.player === HUMAN_PLAYER ? 'Aap Jeet Gaye! 🥳' : 'Computer Jeet Gaya! 🤖';
    messageElement.textContent = message;
}


// MINIMAX ALGORITHM & HELPERS


// Yeh function virtual board par saare khaali squares dhoondh kar unka array lautata hai.
function emptySquares() {
    return originalBoard.filter(s => typeof s === 'number');
}

// Yeh function computer ke liye sabse best chaal dhoondhta hai.
function bestSpot() {
    // Minimax function ko call karke best move ka index nikalna.
    return minimax(originalBoard, COMPUTER_PLAYER).index;
}

// Minimax Algorithm: Computer ka dimaag.
function minimax(newBoard, player) {
    // Saare khaali spots ki list nikalna.
    let availSpots = emptySquares();

    // BASE CASES: Sochne ki process ko rokne ki conditions.
    // Agar insaan jeet raha hai, to score -10.
    if (checkWin(newBoard, HUMAN_PLAYER)) {
        return { score: -10 };
    } 
    // Agar computer jeet raha hai, to score +10.
    else if (checkWin(newBoard, COMPUTER_PLAYER)) {
        return { score: 10 };
    } 
    // Agar board bhar gaya hai (draw), to score 0.
    else if (availSpots.length === 0) {
        return { score: 0 };
    }

    // Har possible chaal ke liye score calculate karna.
    var moves = []; // Ek array jismein har move aur uska score store hoga.
    // Saare khaali spots par ek-ek karke loop chalana.
    for (var i = 0; i < availSpots.length; i++) {
        // 'move' object banakar usmein index store karna.
        var move = {};
        move.index = newBoard[availSpots[i]];
        // Virtual board par player ki chaal chalna (hypothetically).
        newBoard[availSpots[i]] = player;

        // Ab doosre player ke liye minimax ko call karna (recursion).
        if (player === COMPUTER_PLAYER) {
            // Agar abhi computer ne socha hai, to agla sochna insaan ke liye hoga.
            var result = minimax(newBoard, HUMAN_PLAYER);
            move.score = result.score;
        } else {
            // Agar abhi insaan ke liye socha hai, to agla sochna computer ke liye hoga.
            var result = minimax(newBoard, COMPUTER_PLAYER);
            move.score = result.score;
        }

        // Hypothetical move ko board se hatana (undo karna) taaki agli chaal ke liye board saaf ho.
        newBoard[availSpots[i]] = move.index;
        // Is move aur uske score ko 'moves' array mein daalna.
        moves.push(move);
    }

    // Saare scores aane ke baad, sabse best move chunna.
    var bestMove;
    if (player === COMPUTER_PLAYER) { // Agar computer (Maximizer) ki baari hai.
        var bestScore = -10000; // Ek bahut chhota score maan kar shuru karna.
        // Saare moves mein se woh move dhoondhna jiska score sabse zyada hai.
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else { // Agar insaan (Minimizer) ki baari hai.
        var bestScore = 10000; // Ek bahut bada score maan kar shuru karna.
        // Saare moves mein se woh move dhoondhna jiska score sabse kam hai.
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    // Sabse best move waala object lautana.
    return moves[bestMove];
}