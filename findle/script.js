// JavaScript to create floating circles
function createCircle() {
    const body = document.body;
    const circle = document.createElement('div');
    circle.classList.add('circle');

    const size = Math.random() * 50 + 50; // Circle size between 50px and 100px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    // Random start position
    circle.style.left = `${Math.random() * 100}vw`;
    circle.style.top = `${Math.random() * 100}vh`;

    // Random background color from the icon's pastel palette
    const colors = ['rgba(184, 164, 212, 0.3)', 'rgba(212, 184, 200, 0.3)', 'rgba(240, 168, 150, 0.3)', 'rgba(164, 212, 228, 0.3)'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.background = randomColor;

    body.appendChild(circle);

    // Circle moves and then fades out
    setTimeout(() => {
        circle.remove();
    }, 20000); // Each circle stays on the screen for 20 seconds
}

// Continuously create circles
setInterval(createCircle, 1000); // Creates a circle every second


// Grab all the blocks
const blocks = document.querySelectorAll('.block');

// Create random positions and rotations for the blocks (pile effect)
blocks.forEach(block => {
    const randomX = Math.random() * 400 - 200;  // Random x position
    const randomY = Math.random() * 200 - 100;  // Random y position
    const randomRotation = Math.random() * 360 - 180;  // Random rotation angle

    block.style.setProperty('--random-x', `${randomX}px`);
    block.style.setProperty('--random-y', `${randomY}px`);
    block.style.setProperty('--random-rotation', `${randomRotation}deg`);
    block.style.opacity = 1;

    block.style.animation = 'pileAnimation 1s forwards';
});

// After pile animation, rearrange blocks to spell the name
setTimeout(() => {
    const wordPositions = [
        // "FINDLE!" positions (centered on one line)
        { x: -180, y: -10 }, { x: -120, y: -10 }, { x: -60, y: -10 }, { x: 0, y: -10 },  // F, I, N, D
        { x: 60, y: -10 }, { x: 120, y: -10 }, { x: 180, y: -10 }  // L, E, !
    ];

    blocks.forEach((block, index) => {
        const { x, y } = wordPositions[index];
        block.style.setProperty('--final-x', `${x}px`);
        block.style.setProperty('--final-y', `${y}px`);
        block.style.animation = 'moveToPosition 2s forwards';
    });
}, 1500);
