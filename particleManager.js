class ParticleManager {
    #numberOfParticles;
    #maxParticleDistance;

    constructor(particleCount, particleDistance) {
        this.particles = [];
        this.#numberOfParticles = particleCount;
        this.#maxParticleDistance = particleDistance;
        this.#init();
   }

    #init() {
        this.particles = [];
        for (let i = 0; i < this.#numberOfParticles; i++) {
            this.particles.push(new Particle());
        }
    }

    

    draw() {
        this.#connectParticles();
        this.particles.forEach(particle => particle.update());
    }
    #connectParticles() {
        for (let a = 0; a < this.particles.length; a++) {
            for (let b = a; b < this.particles.length; b++) {
                const _a = this.particles[a]
                const _b = this.particles[b]
                const dx = _a.pos.x - _b.pos.x
                const dy = _a.pos.y - _b.pos.y
                const distance = Math.hypot(dx,dy)
                if(distance<this.#maxParticleDistance){
                    push();
                    const alpha = 1 - (distance/this.#maxParticleDistance)
                    stroke(255,255,255,alpha)
                    strokeWeight(2)
                    line(_a.pos.x , _a.pos.y , _b.pos.x , _b.pos.y)
                    pop();
                }
            }
        }
    }

}