// Variables section
let firstTimeAdded = false;
let idx = 0;
const tmpDataTableTopPlayerScore = dataTableTopPlayerScore.slice();

// Functions section
function addedByItself() {
    const chatArea = document.querySelector('#chat-field');
    chatArea.innerHTML = '';
    while (idx < 17) {
        chatArea.innerHTML += `${chatArea.innerHTML ? '<br>' : ''}<span style='color: #3F74B8; padding: 0 .5rem'>${mockData[idx][0]}:</span> ${mockData[idx][1]}`;
        ++idx;
    }
    const intervalUpdatedIndex = setInterval(() => {
        chatArea.innerHTML += `${chatArea.innerHTML ? '<br>' : ''}<span style='color: #3F74B8; padding: 0 .5rem'>${mockData[idx][0]}:</span> ${mockData[idx][1]}`;
        ++idx;
        chatArea.scrollTop = chatArea.scrollHeight;
        if (idx == mockData.length) clearInterval(intervalUpdatedIndex);
    }, randomInterval() * 1000);
}

function addTopPlayerScore(gameScore) {
    const tableContainer = document.querySelector('.score-table');

    if (gameScore > dataTableTopPlayerScore.at(-1)['score'] && !firstTimeAdded) {
        dataTableTopPlayerScore.push({ 'nickName': 'anonymous', 'score': gameScore, 'title': 'Noob' });
        dataTableTopPlayerScore.sort((a, b) => b.score - a.score);
        dataTableTopPlayerScore.pop();
        firstTimeAdded = true;
    }

    if (game.ended) {
        const gamesPlayed = document.querySelector('.times-played');
        timesPlayed++;
        gamesPlayed.innerHTML = gamesPlayed.innerHTML.slice(0, 19) + timesPlayed;
        dataTableTopPlayerScore.find((v, i) => v['nickName'] == 'anonymous' && (v['nickName'] = 'anonymous' + timesPlayed, v['score'] = gameScore));
        dataTableTopPlayerScore.sort((a, b) => b.score - a.score);
        dataTableTopPlayerScore.forEach((v, i) => v['title'] = playerTitle[i]);
        firstTimeAdded = false;
    }

    if (firstTimeAdded) {
        dataTableTopPlayerScore.find((v, i) => v['nickName'] == 'anonymous' && (v['score'] = gameScore));
        dataTableTopPlayerScore.sort((a, b) => b.score - a.score);
        dataTableTopPlayerScore.forEach((v, i) => v['title'] = playerTitle[i]);
    }

    tableContainer.innerHTML = '';
    createTopPlayerScoreTable(dataTableTopPlayerScore);
}

function convertToCapital(data) {
    data = data.split(/(?=[A-Z])/);
    return data[0][0].toUpperCase() + data[0].slice(1) + data[1].toLowerCase();
}

function createFruitInfoTable(data, type) {
    const container = document.querySelector(`.${type}`);

    // Create the table element    
    const table = document.createElement('table');

    // Add a header row
    const header = table.createTHead();
    const headerRowTitle = header.insertRow(0);
    const headers = Object.keys(data[0]);
    const tbody = table.createTBody();

    table.border = '1'; // Optional: adds a basic border
    table.classList.add('info-table');

    // fill out header    
    headers.forEach((text, index) => {
        const cell = headerRowTitle.insertCell(index);
        cell.outerHTML = `<th>${firstLetterToCapital(text)}</th>`; // Use <th> for headers
    });

    // fill out rows and cells
    data.forEach(item => {
        const row = tbody.insertRow();
        Object.values(item).forEach((val, index) => {
            const cell = row.insertCell(index);
            if (index == 0) {
                cell.innerHTML = `<img src="./images/${val}.png">`;
            }
            else {
                cell.textContent = val;
            }
        });
    });
    container.appendChild(table);
}

function createTopPlayerScoreTable(data) {
    const container = document.querySelector('.score-table');

    // Create the table element    
    const table = document.createElement('table');

    // Add a header row
    const header = table.createTHead();
    const headerRowTitle = header.insertRow(0);
    const headers = Object.keys(data[0]);
    const tbody = table.createTBody();

    table.border = '1'; // Optional: adds a basic border
    table.classList.add('top-player-score-table');

    // fill out header    
    headers.forEach((text, index) => {
        const cell = headerRowTitle.insertCell(index);
        cell.outerHTML = `<th>${index ? firstLetterToCapital(text) : convertToCapital(text)}</th>`; // Use <th> for headers
    });

    // fill out rows and cells
    data.forEach(item => {
        const row = tbody.insertRow();
        Object.values(item).forEach((val, index) => {
            const cell = row.insertCell(index);
            cell.textContent = val;
            if (val == 'anonymous') row.classList.add('current-climber');
        });
    });
    container.appendChild(table);
}

function firstLetterToCapital(data) {
    return data[0].toUpperCase() + data.slice(1);
}

function sendChatText() {
    const chatArea = document.querySelector('#chat-field');
    const chatInput = document.querySelector('#chat-input-field');

    chatArea.innerHTML += `${chatArea.innerHTML ? '<br>' : ''}<span style='color: #3F74B8; padding: 0 .5rem'>anonymous:</span> ${chatInput.value}`;
    chatArea.scrollTop = chatArea.scrollHeight;
}

addedByItself();
createFruitInfoTable(dataTableSweet, 'sweet');
createFruitInfoTable(dataTableSweet2, 'sweet');
createFruitInfoTable(dataTableSour, 'sour');
createTopPlayerScoreTable(dataTableTopPlayerScore);