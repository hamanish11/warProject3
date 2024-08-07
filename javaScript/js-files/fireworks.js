
export function startFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let fireworks = [];

    function createFirework(x, y) {
        const firework = {
            x: x,
            y: y,
            size: Math.random() * 5 + 5,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            particles: [],
            exploded: false,
        };

        for (let i = 0; i < 100; i++) {
            firework.particles.push(createParticle(firework.x, firework.y, firework.color));
        }
        fireworks.push(firework);
    }

    function createParticle(x, y, color) {
        return {
            x: x,
            y: y,
            color: color,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 4 + 1,
            angle: Math.random() * Math.PI * 2,
            velX: Math.cos(Math.random() * Math.PI * 2) * Math.random() * 4 + 1,
            velY: Math.sin(Math.random() * Math.PI * 2) * Math.random() * 4 + 1,
            alpha: 1,
        };
    }

    function update() {
        fireworks.forEach((firework, index) => {
            if (!firework.exploded) {
                firework.y -= 2; 
                if (firework.y < canvas.height / 2) {
                    firework.exploded = true; 
                }
            }

            firework.particles.forEach(particle => {
                particle.x += particle.velX;
                particle.y += particle.velY;
                particle.alpha -= 0.02; 
            });

            if (firework.exploded && firework.particles.every(p => p.alpha <= 0)) {
                fireworks.splice(index, 1); 
            }
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fireworks.forEach(firework => {
            if (!firework.exploded) {
                ctx.fillStyle = firework.color;
                ctx.beginPath();
                ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
                ctx.fill();
            } else {
                firework.particles.forEach(particle => {
                    ctx.globalAlpha = particle.alpha;
                    ctx.fillStyle = particle.color;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                });
                ctx.globalAlpha = 1; 
            }
        });
    }

    function animate() {
        update();
        draw();
        requestAnimationFrame(animate);
    }

    function generateRandomFirework() {
            const x = Math.random() * canvas.width; 
            const y = canvas.height - 800; 
            createFirework(x, y);
        
    }

    setInterval(() => generateRandomFirework(), 100);
    animate();
}