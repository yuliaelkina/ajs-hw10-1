const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
    }
  ]	
};
const keys = {id, name, description= 'не доступно', icon};
function destructuringSpecials(obj, keys) {
  const result = [];
  obj.special.forEach(element => {
    console.log(element);
  });
};

destructuringSpecials(character, keys);