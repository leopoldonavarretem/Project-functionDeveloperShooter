//CANVAS VARIABLES
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

//BACKGROUND VARIABLES
const background = new Background();
let frames = 0;

//CHARACTER VARIABLES
const mainCharacter = new MainCharacter();
let currentEnemies = [];
let currentBanner = [];
let currentBullets = [];

//GAME START
window.onload = () => {
  startGame();
};

//GAME FUNCTIONS
function startGame() {
  requestId = requestAnimationFrame(updateGame);

  setTimeout(() => {
    window.location.href = "/HTML/win.html";
  }, 30000);

  addEventListener("keydown", (event) => {
    if (event.key == "w" || "d" || "s" || "a") {
      mainCharacter.action(event.key);
    }
    
    if (event.key == "p") {
      const bullet1 = new Bullet(mainCharacter.direction);
      currentBullets.push(bullet1);
    }
  });
}

function endGame() {
  window.location.href = "/HTML/lose.html";
  requestId = undefined;
  characterDeath = 1;
}

function updateGame() {
  frames++;
  ctx.clearRect(0, 0, 1200, 600);

  generateAssets();

  if (requestId) {
    requestAnimationFrame(updateGame);
  }
}

function generateAssets() {
  //GENERATES BACKGROUND AND CHARACTER
  background.draw();
  mainCharacter.draw();

  //GENERATES BULLETS
  drawBullet();

  //lEVEL ONE
  generateBanner1();
  generateWave1();

  drawBanner1();
  drawWave1();
}

function drawBullet() {
  currentBullets.forEach((currentBullet, index) => {
    if (
      currentBullet.x < -100 ||
      currentBullet.x > 1500 ||
      currentBullet.y > 800 ||
      currentBullet.y < -300
    ) {
      currentBullets.splice(index, 1);
    }
    currentBullet.draw(mainCharacter.direction);
  });
}

//GENERATE WAVE 1
function generateWave1() {
  if (!(frames === 250)) {
    return true;
  }

  const htmlEnemy1 = new HtmlEnemy(1300, 50);
  const htmlEnemy2 = new HtmlEnemy(1300, 250);
  const htmlEnemy3 = new HtmlEnemy(1300, 450);
  const htmlEnemy4 = new HtmlEnemy(1400, 150);
  const htmlEnemy5 = new HtmlEnemy(1400, 350);

  currentEnemies.push(
    htmlEnemy1,
    htmlEnemy2,
    htmlEnemy3,
    htmlEnemy4,
    htmlEnemy5
  );
}

function drawWave1() {
  currentEnemies.forEach((currentEnemy, index) => {
    if (
      currentEnemy.x < -100 ||
      currentEnemy.x > 1500 ||
      currentEnemy.y > 800 ||
      currentEnemy.y < -300
    ) {
      currentEnemies.splice(index, 1);
    }

    currentEnemy.draw();
  });
}

function generateBanner1() {
  if (!(frames === 1)) {
    return true;
  }

  const level1banner = new WaveBanner();

  currentBanner.push(level1banner);
}

function drawBanner1() {
  currentBanner.forEach((currentBanner, index) => {
    // if (
    //   currentBanner.x < -200 ||
    //   currentBanner.x > 1500 ||
    //   currentBanner.y > 800 ||
    //   currentBanner.y < -300
    // ) {
    //   currentBanner.splice(currentBanner, index);
    // }

    currentBanner.draw("level1");
  });
}
