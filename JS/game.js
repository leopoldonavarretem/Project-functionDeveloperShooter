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
  winGame();
};

//GAME FUNCTIONS
function startGame() {
  requestId = requestAnimationFrame(updateGame);

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

function winGame() {
  setTimeout(() => {
    window.location.href = "/HTML/win.html";
  }, 30000);
}

function loseGame() {
  window.location.href = "/HTML/lose.html";
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
  generateBullets();

  //lEVEL ONE
  generateBanners();
  generateEnemies();
}

function generateBanners() {
  if (frames == 100) {
    const levelOneBanner = new WaveBanner("level1");
    currentBanner.push(levelOneBanner);
  }

  if (frames == 200) {
    currentBanner.pop();
  }

  currentBanner.forEach((current) => {
    current.draw();
  });
}

function generateBullets() {
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
function generateEnemies() {
  if (frames === 200) {
    const htmlEnemy1 = new HtmlEnemy(1300, 100);
    const htmlEnemy2 = new HtmlEnemy(900, -200);
    const htmlEnemy3 = new HtmlEnemy(-200, 900);
    const htmlEnemy4 = new HtmlEnemy(-300, -300);
    const htmlEnemy5 = new HtmlEnemy(1200, 750);

    currentEnemies.push(
      htmlEnemy1,
      htmlEnemy2,
      htmlEnemy3,
      htmlEnemy4,
      htmlEnemy5
    );
  }

  currentEnemies.forEach((currentEnemy, index) => {
    currentEnemy.draw();

    if (
      currentEnemy.x < -100 ||
      currentEnemy.x > 1500 ||
      currentEnemy.y > 800 ||
      currentEnemy.y < -300
    ) {
      currentEnemies.splice(index, 1);
    }

    if (mainCharacter.collision(currentEnemy)) {
      loseGame();
    }
  });
}
