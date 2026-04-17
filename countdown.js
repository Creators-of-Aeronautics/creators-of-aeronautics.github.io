const releaseDate = 1776520800000;

function preload() {
    particlePreload();
}

function setup() {
    particleSetup();
}

function draw() {
    updateTime();
    particleDraw();
    discDraw();
}

const countdown = document.getElementById('countdown');
function updateTime() {
    const timeLeft = releaseDate - Date.now();
    const clamped = Math.max(timeLeft, 0);
    
    if (clamped == 0) {
        window.location.href = '/';
    }

    const seconds = (Math.floor(clamped / 1000) % 60);
    const minutes = (Math.floor(clamped / 60000) % 60);
    const hours = (Math.floor(clamped / 3600000) % 24);
    const days = (Math.floor(clamped / 86400000));

    let timeString = "";
    if(days > 0) timeString += days + ":";
    timeString += `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    countdown.innerHTML = timeString;
}


class Disc {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.element = document.createElement("img");
        this.element.src = `./resources/images/discs/${floor(random(1, 13))}.png`;
        this.element.className = "disc";
        const self = this;
        this.element.onclick = function () {
            self.elementClicked()
        };
        this.updateElement();
        document.body.appendChild(this.element);
    }

    elementClicked() {
        if (this.isCs()) return;
        this.element.src = "./resources/images/cs.png";
        spawnParticles(this.x + discSize() / 2, this.y + discSize() / 2);
        let clicked = localStorage.getItem("discs_clicked");
        if(key == null) {
            clicked = 0;
        }
        clicked++;
        localStorage.setItem("discs_clicked", clicked);
    }

    updateElement() {
        if (this.element == null) return;
        if (this.isCs()) {
            this.ay = -0.0005;
        } else {
            this.ax = 0.00001;
            this.ay = Math.sin(millis() / 1000) * 0.00001;
        }

        const vDecay = 0.98;
        this.vx += this.ax;
        this.vy += this.ay;
        this.x += this.vx * windowWidth;
        this.y += this.vy * windowHeight;
        this.vx *= vDecay;
        this.vy *= vDecay;
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";

        if (this.y < -discSize() || this.x > windowWidth) {
            this.remove();
        }
    }

    remove() {
        document.body.removeChild(this.element);
        this.element = null;
    }

    isCs() {
        return this.element != null && this.element.src.endsWith('cs.png');
    }
}

let disc;
let spawnDelayMin = 8000;
let spawnDelayMax = 15000;
let timer = spawnDelayMin / 4;

function discDraw() {
    if (disc != null) {
        disc.updateElement();
        if (disc.element == null) {
            disc = null
        }
    } else {
        if (timer <= 0) {
            disc = spawnDisc();
            timer = random(spawnDelayMin, spawnDelayMax);
        }
        timer--;
    }
}

function spawnDisc() {
    const disc = new Disc(-discSize(), windowHeight / 3 + random(-windowHeight / 4, windowHeight / 4));
    disc.vx = 0.005;
    disc.vy = 0.005;
    return disc;
}

function discSize() {
    const s = window.innerWidth > window.innerHeight ? 0.05 : 0.15;
    return window.innerWidth * s;
}


class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        const dir = random(-PI, PI);
        const speed = random(0.3, 0.7);
        this.vx = cos(dir) * speed;
        this.vy = sin(dir) * speed * 0.8;

        this.image = particleImages[Math.floor(random(1, 8))];
        this.width = this.image.width;
        this.height = this.image.height;
        this.life = random(150, 200);
        this.lifeStart = this.life;
        this.tint = random(200, 255);
    }
}

let canvas = document.createElement("canvas");
let particleImages = [];
let particles = [];

function particlePreload() {
    for(let i = 0; i < 8; i++) {
        particleImages.push(loadImage(`./resources/images/dust/${i+1}.png`));
    }
}

function particleSetup() {
    createCanvas(canvasSize(), canvasSize(), canvas);
    canvas.id = "particle-canvas";
    document.body.appendChild(canvas);
    
    angleMode(RADIANS);
    noSmooth();
}

function particleDraw() {
    clear();

    push()
    translate(width / 2, height / 2);
    scale(width * 0.018);
    for(const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.97;
        particle.vy *= 0.97;

        const life = particle.life / particle.lifeStart;
        tint(particle.tint, life * 255)
        image(particle.image, particle.x - particle.width / 2, particle.y - particle.height / 2);

        particle.life -= 1;
    }
    pop()
    particles = particles.filter(v => v.life >= 0);
}

function windowResized() {
    resizeCanvas(canvasSize(), canvasSize());
}

function canvasSize() {
    const s = window.innerWidth > window.innerHeight ? 0.2 : 0.6;
    return window.innerWidth * s;
}

function spawnParticles(x, y) {
    particles = []
    canvas.style.left = (x - width / 2) + "px"
    canvas.style.top = (y - height / 2) + "px"
    for (let i = 0; i < 15; i++) {
        particles.push(new Particle(0, 0));
    }
    const sound = new Audio(`./resources/sounds/${floor(random(1,4))}.mp3`);
    sound.play();
}