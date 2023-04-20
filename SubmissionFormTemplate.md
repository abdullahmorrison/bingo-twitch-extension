This extension allows users to play a bingo game about the streamer Brittt.

The overlay uses a built-in chatbot to display the bingo board.

ChangeLog:

Chatbot Commands:

- !bingo: opens the overlay bingo board

External Links:

- View Git Repo: the link to the git repo of the extension

Allowlist explanations:

- wss://irc-ws.chat.twitch.tv:443, ws://irc-ws.chat.twitch.tv:80, irc://irc.chat.twitch.tv:6667, irc://irc.chat.twitch.tv:6697: urls the the chatbot connects to.
- https://github.com/abdullahmorrison/BingoTwitchExtension/tree/Brittt: the link to the git repo of the extension

Start the application locally:

- Enable allow invalid certificates for resources loaded from localhost in Chrome: chrome://flags/#allow-insecure-localhost
- In the terminal run npm install, then npm start

Testing the Extension:

- Click on the question mark button to view how to play the game
- Click on a tile to add a chip
- Win (bingo) by filling a row, column, or diagonal with chips
