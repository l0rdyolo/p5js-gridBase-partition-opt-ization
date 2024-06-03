
# p5.js | grid-based partitioning optimization

bu projeyi Bilgisayar Mühendisliğinde Özel Konular dersi için geliştirdim.



![555 particles without optimization]()


yukarıda optimize edilmemiş proje çıktısını görüyorsunuz.
bazı sınıf açıklamarından sonra optimize halinin çıktısını da aşağıda bulabilirsiniz. 

sınıf tanıtımlarında sözde kod yazılmıştır.
## sketch.js


```javascript
function setup() {
  createCanvas(canvas.w, canvas.h);
  colorMode(HSL)
  fpsDisplayer = new FPS(50,50)
  grid = new Grid(canvas.w / cellCount , canvas.w , canvas.h)
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(
      new Particle(grid)
    )
  }
}
function draw() {
    background(0);
    grid.draw();
    particles.forEach(particle => {
      particle.update();
  });
    fpsDisplayer.show();
}
```
## particle.js

bu sınıf ekrandaki her particle'ının özelliklerini, çizim ve hangi grid cell'ine üye olacağını belirlediği kodları içeriyor.

buradaki bazı değişkenler private tanımlanarak performans açısından iyileştirme yapılmak istendi.

veloctiy - position gibi değişkenler canvas genişliğine uygun şekilde random belirleniyor.

particle kendi pozisyonuna göre griddeki bulunan uygun cell'e subscribe oluyor.


```javascript
class Particle {
    constructor(grid) {
        this.#diameter
        this.#radius = this.#diameter / 2;
        this.grid
        this.pos 
        this.#vel
        this.#color
        this.#init();
    }

    #init() {
        this.#canMove = true;
        this.#subscribeToCell();
    }

    #draw() {
        //drawing shape and calculating color
    }

    #subscribeToCell() {
        //grid cell subscribe
    }

    update() {
        this.#draw();
        this.#subscribeToCell();
        if (!this.#canMove) return;
        //some movement code...
        //some collision code..
    }
}
```

  
## cell.js

cell sınıfı gridde bulunacak matris objeleri olarak düşünülebilir.

her cell'in particle kümeleri var ve bu kümelerdeki particlelar gerekli koşulları sağlıyorsa particlelar arası çizgi çizilme işlemi yapılıyor

```javascript
class Cell {
    #maxParticleDistance;
    constructor(i, j, w, h) {
        this.#maxParticleDistance;
        this.particles = new Set();
    }

    draw() {
        //drawing cell box
        //drawing connected Particles
    }

    subscribe(particle) {
        this.particles.add(particle);
    }

    unsubscribe(particle) {
        this.particles.delete(particle);
    }

    #connectParticles() {
        //calculate distance between particleA and particleB
        //if distance less then our value then draw line
    }
}
```
## grid.js

```javascript
class Grid {
    constructor(cellSize, width, height) {
        this.cellSize = cellSize;
        this.cols = Math.ceil(width / cellSize);
        this.rows = Math.ceil(height / cellSize);
        this.cells //matris tanımlamızı burada yapıyoruz

        
    }

    getCell(x, y) {
        //particle tanımlanırken tekil grid nesnesini paremetre olarak alır ve getCell fonksiyonuyla dünyadaki yerini belirler
    }


    draw(){
        //cell'lerin draw fonksiyonu çağrılır
    }
}
```
## optimized
