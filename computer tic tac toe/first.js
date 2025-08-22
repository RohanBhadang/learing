
const HUMAN = 'X';
const COMP = 'O';

// Jeetne ke saare 8 patterns ka array
const winCombos = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
	[0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
	[0, 4, 8], [2, 4, 6]             // Diagonal
];

// Jeetne ki condition check karne ka simplified function.
function checkWin(board, player) {
	
	for (let combo of winCombos) {
		
		if (board[combo[0]] === player && board[combo[1]] === player && board[combo[2]] === player) {
			return true; 
		}
	}
	return false; 
}

// Minimax Algorithm:
function minimax(newBoard, player) {
	
	const availSpots = newBoard.filter(s => typeof s === 'number');


	if (checkWin(newBoard, HUMAN)) return { score: -10 };
	
	if (checkWin(newBoard, COMP)) return { score: 10 };
	
	if (availSpots.length === 0) return { score: 0 };

	
	let moves = [];

	for (let i = 0; i < availSpots.length; i++) {
		
		let move = {};
		move.index = newBoard[availSpots[i]];

		
		newBoard[availSpots[i]] = player;

		
		if (player === COMP) {
			move.score = minimax(newBoard, HUMAN).score;
		} else {
			move.score = minimax(newBoard, COMP).score;
		}

		newBoard[availSpots[i]] = move.index;
		
	
		moves.push(move);
	}

	
	let bestMove;

	if (player === COMP) {
		let bestScore = -Infinity; 
		for (let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = moves[i];
			}
		}
	} else {   // Agar  (Minimizer) ki baari hai, to sabse kam score waala move chuno.
		let bestScore = Infinity; 
		for (let i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = moves[i];
			}
		}
	}
	
	return bestMove;
}



const testBoard = ['O', 1, 'O', 'X', 'X', 5, 6, 7, 8];

console.log("Diya gaya Board:", testBoard);
console.log("Computer ki best chaal sochi jaa rahi hai...");


const bestMove = minimax(testBoard, COMP);


console.log("\nAI ka Faisla:", bestMove);
console.log("MATLAB: AI ne kaha ki index", bestMove.index, "par jaana best hai, kyunki usse", bestMove.score, "ka score mil raha hai (seedhi jeet).");