let world = [];
let buffer = 2;
const chunkWidth = 36;
const viewportWidth = window.innerWidth;
const terrainTypes = [
  {
    symbol: "[ → ]",
    left: 0,
    right: 0,
  },
  {
    symbol: "[ / ]",
    left: 0,
    right: 1,
  },
  {
    symbol: "[ ⁻ ]",
    left: 1,
    right: 1,
  },
  {
    symbol: "[ \\ ]",
    left: 1,
    right: 0,
  },
];
const terrainContainer = document.querySelector('#terrain');
const chunksVisible = Math.ceil(viewportWidth / chunkWidth);

function buildWorld(world, chunksVisible, terrainTypes) {
  world.push(terrainTypes[Math.floor(Math.random() * terrainTypes.length)]);
  let i = 0;
  while (world.length < (chunksVisible + (buffer * 2))) {
    for (let x = 0; i <= world.length; i++) {
      if (terrainTypes[x].left === world[i].right {
        world.push(terrainTypes[x]);
      }
    }
    i++;

    // world.push(terrainTypes[Math.floor(Math.random() * terrainTypes.length)]);
  }
  terrainContainer.append(
    world.map(chunk => chunk.symbol).join('')
  );
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    console.log('Right Arrow Pressed');
  }
  if (event.key === 'ArrowLeft') {
    console.log('Left Arrow Pressed');
  }
});

window.addEventListener('resize', () => buildWorld(world, chunksVisible, terrainTypes));

buildWorld(world, chunksVisible, terrainTypes);
