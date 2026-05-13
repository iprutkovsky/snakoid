const dataTableSour = [
    { fruit: 'cherry', score: -2 },
    { fruit: 'green_apple', score: -3 },
    { fruit: 'lemon', score: -5 },
    { fruit: 'lime', score: -4 },
    { fruit: 'pomegranate', score: -2 },
    { fruit: 'yellow_peach', score: -1 },
];

const dataTableSweet = [
    { fruit: 'banana', score: 2 },
    { fruit: 'grape', score: 4 },
    { fruit: 'mango', score: 3 },
    { fruit: 'orange', score: 3 },
    { fruit: 'peach', score: 2 },
    { fruit: 'pear', score: 2 }
];

const dataTableSweet2 = [
    { fruit: 'plum', score: 2 },
    { fruit: 'raspberry', score: 1 },
    { fruit: 'red_apple', score: 3 },
    { fruit: 'strawberry', score: 2 },
    { fruit: 'watermelon', score: 4 },
    { fruit: 'yellow_cherry', score: 2 }
];

let idx = 0;

const mockData = [
    ['Echo', '👍 🙏'],
    ['Zenith', 'Pretty good, just working.'],
    ['Orion', 'Quick question, does anyone know... Just chilling.'],
    ['Hunter', 'How do you deal with screen keyboard?'],
    ['Hunter', "I'm good, you?"],
    ['Shadow', 'Busy day today.'],
    ['Spark', 'Just chilling.'],
    ['Stinger', 'Not much, same old, same old.'],
    ['Blaze', '😂 Going well, thanks! 👀'],
    ['Orion', 'Did you hear about new game on Gamescom? Not much, same old, same old.'],
    ['Hunter', '🎉 Busy day today.'],
    ['Rogue', "I think I know, what's up?"],
    ['Hunter', '🔥'],
    ['Shadow', 'Busy day today.'],
    ['Rogue', "I'm good, you? Yeah, it's crazy right?"],
    ['Viper', 'Nothing exciting here.'],
    ['Spark', 'What are your plans for the weekend?'],
    ['Maverick', 'What are your plans for the weekend? Going well, thanks!'],
    ['Spark', 'Nothing exciting here.'],
    ['Hunter', 'How do you deal with screen keyboard?'],
    ['Zenith', 'Pretty good, just working.'],
    ['Echo', "Hey everyone, how's it going?"],
    ['Ghost', 'Did you hear about new game on Gamescom?'],
    ['Stinger', 'Not much, same old, same old.'],
    ['Rogue', "Yeah, it's crazy right?"],
    ['Zenith', "I think I know, what's up?"],
    ['Stinger', 'Going well, thanks!'],
    ['Hunter', 'Busy day today.'],
    ['Rogue', "I'm good, you? Busy day today."],
    ['Echo', 'Just chilling.'],
    ['Blaze', "I think I know, what's up?"],
    ['Viper', 'Any recommendations for a good book/movie?'],
    ['Spark', 'Pretty good, just working. Not much, same old, same old.'],
    ['Stinger', 'Tell me more!'],
    ['Rogue', "What's up?"],
    ['Thunder', 'Anyone online?'],
    ['Moonbeam', 'What are your thoughts?'],
    ['Specter', 'Feeling good.'],
    ['Specter', 'Laughing out loud.'],
    ['Dragon', 'Need some help with this.'],
    ['Nomad', 'Sounds good.'],
    ['Phoenix', 'Totally agree.'],
    ['Phoenix', 'Not sure about that.'],
    ['Titan', 'Hello world!'],
    ['Zenith', 'Any recommendations?'],
    ['Byte', "How's it going?"],
    ['Thunder', 'Laughing out loud.'],
    ['Zenith', "That's hilarious!"],
    ['Sapphire', 'Let me know.'],
    ['Pixel', 'Makes sense.'],
    ['Byte', 'Just checking in.'],
    ['Gizmo', 'What are your thoughts?'],
    ['Pixel', "That's interesting!"],
    ['Galaxy', 'Gotta go now.'],
    ['Specter', 'Hey everyone!'],
    ['Blaze', 'Let me know.'],
    ['Nomad', 'Totally agree.'],
    ['Gizmo', 'Busy at work.'],
    ['Zenith', "What's up?"],
    ['Shadow', 'Busy at work.'],
    ['Spark', 'What are your thoughts?'],
    ['Moonbeam', 'Totally agree.'],
    ['Phoenix', 'Not sure about that.'],
    ['Astro', 'See you later!'],
    ['Nova', 'Chilling out.'],
    ['Comet', 'Bye for now.'],
    ['Spark', 'Long time no see!'],
    ['Thunder', "That's interesting!"],
    ["ControllerKing", "Hey everyone! 👍"],
    ["LevelUpLiz", "Cant believe I lost that match 🎮"],
    ["PixelPusher", "Hey everyone! 😂"],
    ["LevelUpLiz", "GGs everyone! 🎮"],
    ["ProKiller", "Finally beat that boss in Apex Legends! 🤔"],
    ["LevelUpLiz", "Just got a new high score in League of Legends! 😭"],
    ["LevelUpLiz", "Whos online? Lets squad up! 🏆"],
    ["PixelPusher", "Just got a new high score in Cyberpunk 2077! 🤔"],
    ["Player1", "Just rage quit Apex Legends 🥳"],
    ["PixelPusher", "This new update for Among Us is wild! 🔥"],
    ["PixelPusher", "Anyone else having trouble with Elden Ring servers? 🤔"],
    ["LevelUpLiz", "Whats up? ❌"],
    ["ProKiller", "Finally beat that boss in Call of Duty! 🥳"],
    ["GamerGirl", "Hey everyone! 🏆"],
    ["LevelUpLiz", "Hey everyone! 🤔"],
    ["ControllerKing", "Hey everyone! 🎉"],
    ["LevelUpLiz", "Hey everyone! 🎉"],
    ["GamerGirl", "Whats up? 💯"],
    ["LevelUpLiz", "Finally beat that boss in Valorant! 😴"],
    ["PixelPusher", "Thinking about buying Among Us, is it good? 😭"],
    ['Echo', "What's your favorite [hobby/food]? 🎉"],
    ['Shadow', "Yeah, it's crazy right? I think I know, what's up?"],
    ['Ghost', '👀'],
    ['Echo', 'Pretty good, just working.'],
    ['Stinger', 'Not much, same old, same old.'],
    ['Nova', 'Anyone seen the latest news?'],
    ['Echo', "Just checking in, what's new?"],
    ['Zenith', "I'm good, you?"],
    ['Stinger', "Hey everyone, how's it going?"],
    ['Stinger', 'Just chilling. Tell me more!'],
    ['Maverick', 'Pretty good, just working.'],
    ['Echo', "What's your favorite [hobby/food]?"],
    ['Ghost', 'Did you hear about new game on Gamescom?'],
    ['Blaze', "Yeah, it's crazy right?"],
    ['Rogue', '👍'],
    ['Orion', 'Not much, same old, same old.'],
    ['Maverick', 'Busy day today.'],
    ['Viper', "What's your favorite [hobby/food]?"],
    ['Orion', 'What are your plans for the weekend?'],
    ['Nova', "I think I know, what's up? 🤔"],
    ['Comet', 'Nothing exciting here.'],
    ['Stinger', 'Just chilling.'],
    ['Rogue', "Hey everyone, how's it going?"],
    ['Shadow', "Yeah, it's crazy right?"],
    ['Maverick', 'Tell me more!'],
    ['Stinger', 'Tell me more! 🔥'],
    ['Orion', 'Nothing exciting here.'],
    ['Spark', "Yeah, it's crazy right? I think I know, what's up?"],
    ['Rogue', "Not much, same old, same old. I think I know, what's up?"],
    ['Nova', "Nothing exciting here. Yeah, it's crazy right?"],
    ['Zenith', 'Tell me more!'],
    ['Ghost', 'Just chilling.'],
    ['Spark', 'What are your plans for the weekend?'],
    ['Echo', 'Did you hear about new game on Gamescom?'],
    ['Rogue', 'Did you hear about new game on Gamescom?'],
    ['Shadow', 'Busy day today. Just chilling.'],
    ['Maverick', "💯 I'm good, you?"],
    ['Shadow', 'Nothing exciting here.'],
    ['Ghost', "I'm good, you?"],
    ['Comet', 'Going well, thanks! Going well, thanks!'],
    ['Phoenix', 'Did you hear about new game on Gamescom? 🙏'],
    ['Orion', 'Not much, same old, same old.'],
    ['Echo', 'Just chilling. 🎉'],
    ['Zenith', 'What are your plans for the weekend?'],
    ['Viper', 'Quick question, does anyone know...'],
    ['Zenith', 'Good morning! Anyone up for a chat? Pretty good, just working.'],
    ['Stinger', 'Not much, same old, same old.'],
    ['Echo', 'Not much, same old, same old. Not much, same old, same old.'],
    ['Maverick', "Yeah, it's crazy right?"],
    ['Hunter', 'What are your plans for the weekend? Not much, same old, same old.'],
    ['Nova', "I'm good, you? I think I know, what's up?"],
    ['Maverick', '🙌 😊'],
    ['Echo', 'What are your plans for the weekend? 😊'],
    ['Nova', 'Tell me more! Just chilling.'],
    ['Nova', 'Anyone seen the latest news? Nothing exciting here. 🔥'],
    ['Ghost', '😂'],
    ['Orion', 'Just chilling.'],
    ['Shadow', "I think I know, what's up? Tell me more!"],
    ['Zenith', 'Pretty good, just working.'],
    ['Shadow', 'Pretty good, just working. 💯'],
    ['Viper', '👀'],
    ['Hunter', "Just checking in, what's new? Nothing exciting here."],
    ['Echo', 'What are your plans for the weekend?'],
    ['Rogue', 'Anyone seen the latest news?'],
    ['Ghost', 'Not much, same old, same old.'],
    ['Viper', "I'm good, you?"],
    ["GamerGirl", "Lagging so hard in Minecraft right now ✅"],
    ["NoobMaster69", "Cant believe I lost that match ✅"],
    ["GamerGirl", "Anyone else having trouble with Baldurs Gate 3 servers? 💯"],
    ["ControllerKing", "Good morning gamers! 🤯"],
    ["NoobMaster69", "Anyone free? 🤯"],
    ["NoobMaster69", "Anyone wanna play League of Legends tonight? 🤯"],
    ["LevelUpLiz", "Hey everyone! 🥳"],
    ["ProKiller", "Need more players for Elden Ring! 🔥"],
    ["ControllerKing", "This new update for Cyberpunk 2077 is wild! 🥳"],
    ["LevelUpLiz", "This new update for League of Legends is wild! 😴"],
    ["ProKiller", "Just got a new high score in League of Legends! 👍"],
    ["GamerGirl", "Anyone free? 🥳"],
    ["LevelUpLiz", "Lagging so hard in Baldurs Gate 3 right now 🥳"],
    ["ControllerKing", "Whats everyone playing this weekend? 🎉"],
    ["LevelUpLiz", "Thinking about buying Apex Legends, is it good? 🤔"],
    ["ControllerKing", "Just rage quit Apex Legends 😂"],
    ["GamerGirl", "Whats up? 😂"],
    ["LevelUpLiz", "Need more players for Fortnite! 👀"],
    ["LevelUpLiz", "Good morning gamers! ✅"],
    ["ControllerKing", "Just rage quit Apex Legends 🔥"],
    ["PixelPusher", "Good morning gamers! 🤯"],
    ["ControllerKing", "Whats up? ✅"],
    ["ProKiller", "Anyone wanna play Apex Legends tonight? 🎉"],
    ["NoobMaster69", "Whos online? Lets squad up! 💯"],
    ["LevelUpLiz", "Anyone else having trouble with Elden Ring servers? 🔥"],
    ["ProKiller", "Anyone else having trouble with Minecraft servers? ❌"],
    ["LevelUpLiz", "Anyone free? 🥳"],
    ["Player1", "Finally beat that boss in Baldurs Gate 3! 🥳"],
    ["NoobMaster69", "Whats everyone playing this weekend? 🚀"],
    ["ControllerKing", "Hey everyone! 🚀"],
    ["ControllerKing", "Good morning gamers! 💯"],
    ["Player1", "Cant believe I lost that match 🤔"],
    ["GamerGirl", "Finally beat that boss in Call of Duty! 👀"],
    ["LevelUpLiz", "Lagging so hard in Among Us right now ✅"],
    ["NoobMaster69", "Whats up? 🎉"],
    ["GamerGirl", "Loving the new skins in Cyberpunk 2077! 💯"],
    ["LevelUpLiz", "Anyone else having trouble with Elden Ring servers? 🤩"],
    ["ProKiller", "Just got a new high score in Cyberpunk 2077! 🔥"],
    ["LevelUpLiz", "Lagging so hard in Elden Ring right now 🏆"],
    ["GamerGirl", "Good morning gamers! 🎉"],
    ["PixelPusher", "Finally beat that boss in Minecraft! 😴"],
    ["LevelUpLiz", "Whats everyone playing this weekend? 👀"],
    ["PixelPusher", "Lagging so hard in Baldurs Gate 3 right now 👍"],
    ["PixelPusher", "Thinking about buying Call of Duty, is it good? 🤯"],
    ["Player1", "Thinking about buying Baldurs Gate 3, is it good? 🤯"],
    ["NoobMaster69", "Anyone else having trouble with Cyberpunk 2077 servers? ❌"],
    ['Pixel', "That's hilarious!"],
    ['Dragon', 'Anyone online?'],
    ['Echo', 'What are your thoughts?'],
    ['Crimson', 'Just checking in.'],
    ['Cosmo', "How's it going?"],
    ['Gizmo', "How's it going?"],
    ['Thunder', "What's up?"],
    ['Blaze', 'See you later!'],
    ['Pixel', 'What are your thoughts?'],
    ['Thunder', 'Hey everyone!'],
    ['Moonbeam', 'Long time no see!'],
    ['Shadow', 'Chilling out.'],
    ['Shadow', 'Bye for now.'],
    ['Comet', 'Good morning!'],
    ['Ghost', "That's hilarious!"],
    ['Moonbeam', 'Long time no see!'],
    ['Blaze', 'Totally agree.'],
    ['Blaze', 'What are your thoughts?'],
    ['Viper', 'Hey everyone!'],
    ['Pixel', "I'll be right back."],
    ['Nova', 'Hey everyone!'],
    ['Galaxy', 'Thinking about...'],
    ['Wanderer', 'Feeling good.'],
    ['Specter', 'Good point.'],
    ['Galaxy', 'Good morning!'],
    ['Galaxy', "I'll be right back."],
    ['Nomad', 'Busy at work.'],
    ['Gizmo', 'Any recommendations?'],
    ['Specter', 'Having a great day.'],
    ['Titan', 'Laughing out loud.'],
    ["LevelUpLiz", "Anyone wanna play Elden Ring tonight? 🤔"],
    ["Player1", "This new update for League of Legends is wild! 🎉"],
    ["ProKiller", "My favorite game ever! ✅"],
    ["ControllerKing", "Need more players for Call of Duty! 🎉"],
    ["ControllerKing", "Anyone free? ✅"],
    ["Player1", "Lagging so hard in Cyberpunk 2077 right now ✨"],
    ["NoobMaster69", "Whos online? Lets squad up! 👍"],
    ["GamerGirl", "This new update for Elden Ring is wild! 🤔"],
    ["ProKiller", "Just got a new high score in League of Legends! 🎮"],
    ["ProKiller", "Anyone else having trouble with Fortnite servers? 👾"],
    ["PixelPusher", "Anyone free? 💯"],
    ["ProKiller", "Loving the new skins in Baldurs Gate 3! 🏆"],
    ["LevelUpLiz", "Thinking about buying Elden Ring, is it good? 😴"],
    ["NoobMaster69", "Good morning gamers! ✨"],
    ["PixelPusher", "Anyone else having trouble with League of Legends servers? 🤯"],
    ["Player1", "Whats up? 👾"],
    ["LevelUpLiz", "Cant believe I lost that match 👾"],
    ["NoobMaster69", "Lagging so hard in Fortnite right now ❌"],
    ["ControllerKing", "GGs everyone! 🥳"],
    ["NoobMaster69", "Anyone free? 🚀"],
    ["Player1", "GGs everyone! 🏆"],
    ["NoobMaster69", "GGs everyone! 💯"],
    ["ProKiller", "Thinking about buying Fortnite, is it good? 🔥"],
    ["NoobMaster69", "Hey everyone! 🎉"],
    ["Player1", "Hey everyone! 👀"],
    ["GamerGirl", "My favorite game ever! 😂"],
    ["NoobMaster69", "This new update for Minecraft is wild! 😂"],
    ["NoobMaster69", "Need more players for Fortnite! 🤔"],
    ["Player1", "Whats up? ✅"],
    ["NoobMaster69", "Finally beat that boss in Fortnite! 😂"],
    ["ControllerKing", "Hey everyone! ✨"],
    ["NoobMaster69", "This new update for Apex Legends is wild! 🏆"],
    ["PixelPusher", "Thinking about buying League of Legends, is it good? 👀"]
    ['Spark', 'Makes sense.'],
    ['Wanderer', 'Sounds good.'],
    ['Shadow', 'Totally agree.'],
    ['Shadow', 'Hey everyone!'],
    ['Titan', 'Awesome!'],
    ['Viper', 'Gotta go now.'],
    ['Rogue', "That's hilarious!"],
    ['Comet', "What's up?"],
    ['Cosmo', 'What are your thoughts?'],
    ['Spark', 'Gotta go now.'],
    ['Pixel', 'Awesome!'],
    ['Shadow', 'Gotta go now.'],
    ['Zenith', 'Totally agree.'],
    ['Nomad', 'Just checking in.'],
    ['Blaze', 'Feeling good.'],
    ['Hunter', "What's up?"],
    ['Blaze', 'Need some help with this.'],
    ['Byte', 'What are your thoughts?'],
    ['Ghost', 'Good morning!'],
    ['Nova', 'Not sure about that.'],
    ['Moonbeam', 'Not sure about that.'],
    ['Specter', 'Bye for now.'],
    ['Titan', 'Bye for now.'],
    ['Cosmo', 'See you later!'],
    ['Comet', 'Makes sense.'],
    ['Echo', "That's hilarious!"],
    ['Nomad', "I'll be right back."],
    ['Echo', 'Feeling good.'],
    ['Oracle', 'Thinking about...'],
    ['Specter', 'Chilling out.'],
    ['Nomad', 'Having a great day.'],
    ['Nomad', 'See you later!'],
    ['Wanderer', 'Makes sense.'],
    ['Dragon', 'Makes sense.'],
    ['Sapphire', "I'll be right back."],
    ['Nova', 'Any recommendations?'],
    ['Blaze', 'Bye for now.'],
    ['Spark', "That's hilarious!"],
    ['Spark', "How's it going?"],
    ['Galaxy', 'Good point.'],
    ['Thunder', 'Long time no see!'],
    ['Crimson', "What's up?"]
];

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

function createTable(data, type) {
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
        cell.outerHTML = `<th>${text}</th>`; // Use <th> for headers
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

function sendChatText() {
    const chatArea = document.querySelector('#chat-field');
    const chatInput = document.querySelector('#chat-input-field');

    chatArea.innerHTML += `${chatArea.innerHTML ? '<br>' : ''}<span style='color: #3F74B8; padding: 0 .5rem'>anonymous:</span> ${chatInput.value}`;
    chatArea.scrollTop = chatArea.scrollHeight;
}

addedByItself();
createTable(dataTableSweet, 'sweet');
createTable(dataTableSweet2, 'sweet');
createTable(dataTableSour, 'sour');