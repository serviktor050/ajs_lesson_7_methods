import Character from '../js/class/Character.js';

test('Успешно', () => {
  const character = new Character('Igor', 50);
  const expected = {
    name: 'Igor',
    level: 2,
    health: 100,
    attack: 30,
    defence: 30,
  };

  character.levelUp();

  expect(character).toEqual(expected);
});

test('Погиб', () => {
  const сharacter = new Character('Igor', 0);
  const received = () => сharacter.levelUp();

  expect(received).toThrow();
});
