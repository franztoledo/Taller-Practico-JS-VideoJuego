/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': '💣',
    'I': '🎁',
    'PLAYER': '💀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
  };
  
  const maps = [];
  maps.push(`
    IXXXXXXXXXXX
    -XXXXXXXXXXX
    -XXXXXXXXXXX
    -XXXXXXXXXXX
    -XXXXXXXXXXX
    -XXXXXXXXXXX
    -XXXXXXXXXXX
    -XXXXXXXXXXX
    -XXXXXXXXXXX
    -XXXXXXXXXXX
    -XXXXXXXXXXX
    OXXXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXXXX
    X--XXXXXXXXX
    XX----XXXXXX
    X--XX-XXXXXX
    X-XXX--XXXXX
    X-XXXX-XXXXX
    XX--XX--XXXX
    XX--XXX-XXXX
    XXXX---IXXXX
    XXXXXXXXXXXX
    XXXXXXXXXXXX
    XXXXXXXXXXXX
    `);
  maps.push(`
    I-----XXXXXX
    XXXXX-XXXXXX
    XX----XXXXXX
    XX-XXXXXXXXX
    XX-----XXXXX
    XXXXXX-XXXXX
    XX-----XXXXX
    XX-XXXXXXXXX
    XX-----OXXXX
    XXXXXXXXXXXX
    XXXXXXXXXXXX
    XXXXXXXXXXXX
  `);