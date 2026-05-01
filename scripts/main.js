// Variables section
let canvas = document.querySelector('#game-canvas');
let context = canvas.getContext('2d');
let scoreBlock = document.querySelector('.score-count');
let loop;

canvas.width = 320;
canvas.height = 320;

const config = {
	step: 0,
	maxStep: 64,
	sizeCell: 16,
	enter: true
};

const listOfFruits = {
	banana: {
		point: 3,
		src: './images/banana.png'
	},
	cherry: {
		point: 2,
		src: './images/cherry.png'
	},
	grape: {
		point: 5,
		src: './images/grape.png'
	},
	green_apple: {
		point: 1,
		src: './images/green_apple.png'
	},
	lemon: {
		point: 3,
		src: './images/lemon.png'
	},
	lime: {
		point: 2,
		src: './images/lime.png'
	},
	mango: {
		point: 1,
		src: './images/mango.png'
	},
	orange: {
		point: 2,
		src: './images/orange.png'
	},
	peach: {
		point: 1,
		src: './images/peach.png'
	},
	pear: {
		point: 2,
		src: './images/pear.png'
	},
	plum: {
		point: 1,
		src: './images/plum.png'
	},
	pomegranate: {
		point: 2,
		src: './images/pomegranate.png'
	},
	raspberry: {
		point: 1,
		src: './images/raspberry.png'
	},
	red_apple: {
		point: 1,
		src: './images/red_apple.png'
	},
	strawberry: {
		point: 1,
		src: './images/strawberry.png'
	},
	watermelon: {
		point: 3,
		src: './images/watermelon.png'
	},
	yellow_cherry: {
		point: 3,
		src: './images/yellow_cherry.png'
	},
	yellow_peach: {
		point: 1,
		src: './images/yellow_peach.png'
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
	point: listOfFruits[keys[rand]].point
});

const game = {
	score: 0
};

const snake = new Snake({
	position: {
		x: getRandomPoint(0, canvas.width / config.sizeCell) * config.sizeCell,
		y: getRandomPoint(0, canvas.height / config.sizeCell) * config.sizeCell
	},
	// imageSrc: './images/Caterpillar/head.png',
	step: {
		dx: config.sizeCell,
		dy: 0
	},
	tail: [],
	maxTail: 3
});

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
			config.enter = false;
			break;
		case 'Enter':
			if (!config.enter) {
				loop = requestAnimationFrame(main);
				config.enter = true;
			}
			break;
	}
});

// Functions section
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
			// 0: '#ff0055ff', //'#161618'
			0: '#49B54B',
			[snake.tail.length - 1]: '#9BC947',
		};

		context.fillStyle = snakeColor[idx] || '#78C048';
		context.fillRect(el.x, el.y, config.sizeCell, config.sizeCell);

		snake.update();

		if (el.x == fruit.position.x && el.y == fruit.position.y) {
			let nextFruit;
			rand = getRandomFruit();
			snake.maxTail++;
			scoreCount();
			fruitRandomPosition();

			nextFruit = listOfFruits[keys[rand]].src;
			fruit.point = listOfFruits[keys[rand]].point;
			fruit.setFruitImage(nextFruit);
		}

		for (let i = idx + 1; i < snake.tail.length; i++) {
			if (el.x == snake.tail[i].x && el.y == snake.tail[i].y) {
				refreshGame();
			}
		}
	});
}

function fruitRandomPosition() {
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
	snake.maxTail = 3;
	snake.step.dx = config.sizeCell;
	snake.step.dy = 0;

	fruitRandomPosition();
	fruit.imageSrc = listOfFruits[keys[rand]].src;
	fruit.point = listOfFruits[keys[rand]].point;
}

function scoreCount() {
	game.score += fruit.point;
	drawScore();
	!(game.score % 4) && (config.maxStep -= 2);
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

loop = requestAnimationFrame(main);
drawScore();