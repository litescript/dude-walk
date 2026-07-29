let world = [];
let buffer = 2;
const chunkWidth = 36;
const viewportWidth = window.innerWidth;
const terrainContainer = document.querySelector('#terrain');
const chunksVisible = Math.ceil(viewportWidth / chunkWidth);

const terrainTypes = [
  {
    symbol: '[ _ ]',
    left: 0,
    right: 0,
  },
  {
    symbol: '[ / ]',
    left: 0,
    right: 1,
  },
  {
    symbol: '[ ⁻ ]',
    left: 1,
    right: 1,
  },
  {
    symbol: '[ \\ ]',
    left: 1,
    right: 0,
  },
];

function buildWorld(world, chunksVisible, terrainTypes) {
  world.push(terrainTypes[Math.floor(Math.random() * terrainTypes.length)]);
  let i = 0;
  while (world.length < chunksVisible + (buffer * 2)) {
    let matches = [];
    for (let x = 0; x < terrainTypes.length; x++) {
      if (terrainTypes[x].left === world[i].right) {
        matches.push(terrainTypes[x]);
      }
    }
    world.push(matches[Math.floor(Math.random() * matches.length)]);
    i++;
  }

  terrainContainer.append(
    world.map(chunk => chunk.symbol).join('')
  );
}

document.addEventListener('keydown', (event) => {
  if (event.repeat && event.key === 'ArrowRight') {
    console.log('The right arrow is being held down!');
  } else if (event.repeat && event.key === 'ArrowLeft') {
    console.log('The left arrow is being held down!');
  } else if (event.key === 'ArrowLeft') {
    console.log('Left Arrow Pressed Once.');
  } else if (event.key === 'ArrowRight') {
    console.log('Right Arrow Pressed Once.');
  }
});

window.addEventListener('resize', () => buildWorld(world, chunksVisible, terrainTypes));

buildWorld(world, chunksVisible, terrainTypes);

