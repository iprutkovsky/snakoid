// Variables section
const btn = document.querySelector('#start-game');
const canvas = document.querySelector('#game-canvas');
const canvasSize = {
	'small': 320,
	'medium': 400,
	'big': 480,
};
const context = canvas.getContext('2d');
const scoreBlock = document.querySelector('.score-count');
let loop;
const config = {
	acceleration: 4,
	maxStep: 64,
	sizeCell: 16,
	step: 0,
	velocity: 2
};
// [tailLength, velocity, acceleration]
let currentSettings = {
	maxTail: 3
};
const difficulty = {
	easy: [3, 2, 4],
	normal: [5, 3, 4],
	hard: [7, 4, 3],
	insane: [9, 5, 2]
};

let intervalStarted = null;
const game = {
	ended: false,
	paused: false,
	score: 0
};
const listOfFruits = {
	banana: {
		point: 2,
		src: './images/banana.png',
		type: 'sweet'
	},
	cherry: {
		point: -2,
		src: './images/cherry.png',
		type: 'sour'
	},
	grape: {
		point: 4,
		src: './images/grape.png',
		type: 'sweet'
	},
	green_apple: {
		point: -3,
		src: './images/green_apple.png',
		type: 'sour'
	},
	lemon: {
		point: -5,
		src: './images/lemon.png',
		type: 'sour'
	},
	lime: {
		point: -4,
		src: './images/lime.png',
		type: 'sour'
	},
	mango: {
		point: 3,
		src: './images/mango.png',
		type: 'sweet'
	},
	orange: {
		point: 3,
		src: './images/orange.png',
		type: 'sweet'
	},
	peach: {
		point: 2,
		src: './images/peach.png',
		type: 'sweet'
	},
	pear: {
		point: 2,
		src: './images/pear.png',
		type: 'sweet'
	},
	plum: {
		point: 2,
		src: './images/plum.png',
		type: 'sweet'
	},
	pomegranate: {
		point: -2,
		src: './images/pomegranate.png',
		type: 'sour'
	},
	raspberry: {
		point: 1,
		src: './images/raspberry.png',
		type: 'sweet'
	},
	red_apple: {
		point: 3,
		src: './images/red_apple.png',
		type: 'sweet'
	},
	strawberry: {
		point: 2,
		src: './images/strawberry.png',
		type: 'sweet'
	},
	watermelon: {
		point: 4,
		src: './images/watermelon.png',
		type: 'sweet'
	},
	yellow_cherry: {
		point: 2,
		src: './images/yellow_cherry.png',
		type: 'sweet'
	},
	yellow_peach: {
		point: -1,
		src: './images/yellow_peach.png',
		type: 'sour'
	},
};
const keys = Object.keys(listOfFruits);
let rand = getRandomFruit();
const fruit = new Fruit({
	position: {
		x: getRandomPoint(0, canvas.width / config.sizeCell) * config.sizeCell,
		y: getRandomPoint(0, canvas.height / config.sizeCell) * config.sizeCell
	},
	imageSrc: listOfFruits[keys[rand]].src,
	point: listOfFruits[keys[rand]].point,
	type: listOfFruits[keys[rand]].type,
});
let fruitLifespan = null;
let selectedGameDifficulty = null;
const snake = new Snake({
	position: {
		x: getRandomPoint(0, canvas.width / config.sizeCell) * config.sizeCell,
		y: getRandomPoint(0, canvas.height / config.sizeCell) * config.sizeCell
	},
	step: {
		dx: config.sizeCell,
		dy: 0
	},
	tail: [],
	maxTail: 3
});
let timerDelay = 9000;

canvas.width = canvasSize['small'];
canvas.height = canvasSize['small'];

// Functions section
document.addEventListener('keydown', (e) => {
	console.log(e.key);
	switch (e.code) {
		case 'KeyW':
			snake.step.dx = 0;
			snake.step.dy = -config.sizeCell;
			break;
		case 'KeyS':
			snake.step.dx = 0;
			snake.step.dy = config.sizeCell;
			break
		case 'KeyA':
			snake.step.dx = -config.sizeCell;
			snake.step.dy = 0;
			break;
		case 'KeyD':
			snake.step.dx = config.sizeCell;
			snake.step.dy = 0;
			break;
		case 'Escape':
			cancelAnimationFrame(loop);
			btn.style.display = 'block';
			btn.innerHTML = 'Pause';
			game.paused = true;
			stopTimer();
			break;
	}
});

function beginningOfExploration() {
	const groupCanvasSize = document.querySelector('.canvas-size');
	const groupGameLevel = document.querySelector('.game-level');

	if (game.ended) {
		btn.innerHTML = 'Start';
		game.ended = false;
		groupCanvasSize.disabled = false;
		groupGameLevel.disabled = false;
		refreshGame();
	}
	else {
		if (game.paused) {
			game.paused = false;
		}
		else {
			groupCanvasSize.disabled = true;
			groupGameLevel.disabled = true;
			drawScore();
		}
		btn.style.display = 'none';
		loop = requestAnimationFrame(main);
		startFruitLifespan();
	}
}

function collisionBorder() {
	if (snake.position.x < 0) {
		snake.position.x = canvas.width - config.sizeCell;
	} else if (snake.position.x >= canvas.width) {
		snake.position.x = 0;
	}

	if (snake.position.y < 0) {
		snake.position.y = canvas.height - config.sizeCell;
	} else if (snake.position.y >= canvas.height) {
		snake.position.y = 0;
	}
}

function drawFruit() {
	let nextFruit;
	rand = getRandomFruit();

	getFruitRandomPosition();

	nextFruit = listOfFruits[keys[rand]].src;
	fruit.point = listOfFruits[keys[rand]].point;
	fruit.setFruitImage(nextFruit);
	fruit.type = listOfFruits[keys[rand]].type;
}

function drawScore() {
	scoreBlock.innerHTML = game.score;
}

function drawSnake() {
	snake.position.x += snake.step.dx;
	snake.position.y += snake.step.dy;

	collisionBorder();

	// todo border
	snake.tail.unshift({ x: snake.position.x, y: snake.position.y });

	if (snake.tail.length > snake.maxTail) {
		snake.tail.pop();
	}

	snake.tail.forEach((el, idx) => {
		const snakeColor = {
			0: '#49B54B',
			[snake.tail.length - 1]: '#9BC947',
		};

		context.fillStyle = snakeColor[idx] || '#78C048';
		context.fillRect(el.x, el.y, config.sizeCell, config.sizeCell);

		snake.update();

		if (el.x == fruit.position.x && el.y == fruit.position.y) {
			fruit.type == 'sweet' ? snake.maxTail++ : (snake.maxTail--, snake.tail.pop());			
			if (snake.maxTail < currentSettings.maxTail) {				
				explorationOver();
			}
			scoreCount();
			drawFruit();
			startFruitLifespan();
		}

		for (let i = idx + 1; i < snake.tail.length; i++) {
			if (el.x == snake.tail[i].x && el.y == snake.tail[i].y) {
				explorationOver();
			}
		}
	});
}

function explorationOver() {
	btn.style.display = 'block';
	btn.innerHTML = 'Game Over';
	game.ended = true;
	cancelAnimationFrame(loop);
	stopTimer();
}

function getFruitRandomPosition() {
	fruit.position.x = getRandomPoint(0, canvas.width / config.sizeCell) * config.sizeCell;
	fruit.position.y = getRandomPoint(0, canvas.height / config.sizeCell) * config.sizeCell;
}

function getRandomFruit() {
	return Math.floor(Math.random() * keys.length);
}

function getRandomPoint(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function refreshGame() {
	game.score = 0;
	drawScore();

	snake.position.x = getRandomPoint(0, canvas.width / config.sizeCell) * config.sizeCell;
	snake.position.y = getRandomPoint(0, canvas.height / config.sizeCell) * config.sizeCell;

	snake.tail = [];
	snake.step.dx = config.sizeCell;
	snake.step.dy = 0;

	getFruitRandomPosition();
	fruit.imageSrc = listOfFruits[keys[rand]].src;
	fruit.point = listOfFruits[keys[rand]].point;
	selectedDifficulty();
}

function scoreCount() {
	game.score += fruit.point;
	drawScore();
	if (game.score < 0) {
		explorationOver();
	}
	!(game.score % config.acceleration) && (config.maxStep -= config.velocity);
}

function selectedDifficulty() {
	selectedGameDifficulty = document.querySelector('input[name="game-level"]:checked').value;

	config.acceleration = difficulty[selectedGameDifficulty][2];
	config.velocity = difficulty[selectedGameDifficulty][1];
	currentSettings.maxTail = difficulty[selectedGameDifficulty][0];
	snake.maxTail = difficulty[selectedGameDifficulty][0];
}

function selectedSize() {
	const selectedCanvasSize = document.querySelector('input[name="canvas-size"]:checked').value;

	canvas.width = canvasSize[selectedCanvasSize];
	canvas.height = canvasSize[selectedCanvasSize];
}

function startFruitLifespan() {
	// Always clear existing timer first to avoid overlapping intervals
	if (fruitLifespan) {
		clearInterval(fruitLifespan);
		fruitLifespan = null;
	}

	// Start a new timer and store its ID
	fruitLifespan = setInterval(() => {
		drawFruit();
		console.log('Timer ticking... hurry up');
	}, timerDelay);
}

function stopTimer() {
	clearInterval(fruitLifespan);
	fruitLifespan = null;
}

function main() {
	loop = requestAnimationFrame(main);

	if (config.step++ < config.maxStep) {
		return;
	}
	config.step = 0;

	// refresh canvas after every move
	context.clearRect(0, 0, canvas.width, canvas.height);

	drawSnake();
	fruit.update();
}