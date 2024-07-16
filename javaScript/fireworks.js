document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let fireworks = [];
    let won = false; // Initially set to false

    // Function to start fireworks when won becomes true
    function startFireworks() {
        if (won) {
            generateRandomFirework();
        }
    }

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
                firework.y -= 2; // Move up
                if (firework.y < canvas.height / 2) {
                    firework.exploded = true; // Explode
                }
            }

            firework.particles.forEach(particle => {
                particle.x += particle.velX;
                particle.y += particle.velY;
                particle.alpha -= 0.02; // Fade out
            });

            if (firework.exploded && firework.particles.every(p => p.alpha <= 0)) {
                fireworks.splice(index, 1); // Remove finished fireworks
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
                ctx.globalAlpha = 1; // Reset alpha
            }
        });
    }

    function animate() {
        update();
        draw();
        requestAnimationFrame(animate);
    }

    function generateRandomFirework() {
        if (won) { // Check if won
            const x = Math.random() * canvas.width; // Random X position
            const y = canvas.height - 800; // Start from the bottom
            createFirework(x, y);
        }
    }

    // Generate a firework every second if won is true
    setInterval(startFireworks, 1000);

    animate();

    // Example function to set won to true
    function onWin() {
        won = true; // Set won to true when the condition is met
    }

    // Simulate winning after 5 seconds for testing
    setTimeout(onWin, 5000);
});