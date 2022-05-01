class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 1200;
    this.height = 800;
    this.image = new Image();
    this.image.src = "/Assets/Images/game-background.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

class MainCharacter {
  constructor() {
    this.x = 560;
    this.y = 260;
    this.width = 80;
    this.height = 80;
    this.direction = "down";
    this.image = new Image();
    this.image.src = "/Assets/Images/character-standing-front.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  action(keyboard) {
    switch (keyboard) {
      case "w": // UP
        if (this.y >= 0) {
          this.y -= 20;
          this.image.src = "/Assets//Images/character-standing-back.png";
          this.direction = "up";
        }
        break;
      case "d": //RIGHT
        if (this.x <= 1120) {
          this.x += 20;
          this.image.src = "/Assets//Images/character-standing-right.png";
          this.direction = "right";
        }
        break;
      case "s": //DOWN
        if (this.y <= 510) {
          this.y += 20;
          this.image.src = "/Assets//Images/character-standing-front.png";
          this.direction = "down";
        }
        break;
      case "a": // LEFT
        if (this.x >= 0) {
          this.x -= 20;
          this.image.src = "/Assets//Images/character-standing-left.png";
          this.direction = "left";
        }
        break;
    }
  }

  collision(enemy) {
    return (
      this.x < enemy.x + enemy.width &&
      this.x + this.width > enemy.x &&
      this.y < enemy.y + enemy.height &&
      this.y + this.height > enemy.y
    );
  }
}

class WaveBanner {
  constructor() {
    this.x = 1300;
    this.y = 225;
    this.width = 250;
    this.height = 150;
    this.image = new Image();
  }

  draw(level) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    switch (level) {
      case "level1":
        this.image.src = "/Assets//Images/Banner-Horda-1.png";
        break;
      case "level2":
        this.image.src = "";
        break;
      case "level3":
        this.image.src = "";
        break;
      case "level4":
        this.image.src = "";
        break;
      case "level5":
        this.image.src = "";
    }

    this.x -= 5;
  }
}

class HtmlEnemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 100;
    this.width = 100;
    this.image = new Image();
    this.image.src = "/Assets//Images/Enemy-Html.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.x -= 5;
  }
}

class CssEnemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 100;
    this.width = 100;
    this.image = new Image();
    this.image.src = "";
  }
}

class JavascriptEnemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 100;
    this.width = 100;
    this.image = new Image();
    this.image.src = "";
  }
}

class Bullet {
  constructor(direction) {
    this.x = mainCharacter.x + 40;
    this.y = mainCharacter.y + 40;
    this.height = 30;
    this.width = 30;
    this.image = new Image();
    this.image.src = "/Assets//Images/bullet.png";
    this.direction = direction;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    switch (this.direction) {
      case "up":
        this.y -= 10;
        break;
      case "right":
        this.x += 10;
        break;
      case "down":
        this.y += 10;
        break;
      case "left":
        this.x -= 10;
        break;
    }
  }
}
