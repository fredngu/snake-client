const IP = '192.168.2.72';
const PORT = 50541;
const EXIT_GAME = '\u0003';
const NAME = 'FDN';
const MOVEMENT = {
  MOVE_UP_KEY: 'w',
  MOVE_DOWN_KEY: 's',
  MOVE_LEFT_KEY: 'a',
  MOVE_RIGHT_KEY: 'd'
};
const TAUNT = {
  'z': "Say: SSSsssee you later!",
  'x': "Say: Go learn python instead!",
  'c': "Say: You're hissstory",
  'v': "Say: 🐍🐍🐍",
  'b': "Say: This anaconda don't"
};

module.exports = {
  IP,
  PORT,
  NAME,
  EXIT_GAME,
  MOVEMENT,
  TAUNT
};