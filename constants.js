const IP = 'localhost';
const PORT = 50541;
const EXIT_GAME = '\u0003';
const NAME = 'FN';
const MOVEMENT = {
  MOVE_UP_KEY: 'w',
  MOVE_DOWN_KEY: 's',
  MOVE_LEFT_KEY: 'a',
  MOVE_RIGHT_KEY: 'd'
};
const TAUNT = {
  'z': "Say: SSSsssee you later!",
  'x': "Say: Go learn python!",
  'c': "Say: You're hissstory.",
  'v': "Say: ???",
};

module.exports = {
  IP,
  PORT,
  NAME,
  EXIT_GAME,
  MOVEMENT,
  TAUNT
};