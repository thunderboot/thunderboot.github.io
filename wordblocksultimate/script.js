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

// After pile animation, rearrange blocks to spell words
setTimeout(() => {
    const wordPositions = [
        // "WORD BLOCKS" positions (on one line)
        { x: -230, y: -50 }, { x: -170, y: -50 }, { x: -110, y: -50 }, { x: -50, y: -50 },  // W, O, R, D
        { x: 10, y: -50 }, { x: 70, y: -50 }, { x: 130, y: -50 }, { x: 190, y: -50 },  // B, L, O, C
        { x: 250, y: -50 }, { x: 310, y: -50 },  // K, S

        // "ULTIMATE" positions (on next line)
        { x: -230, y: 30 }, { x: -170, y: 30 }, { x: -110, y: 30 }, { x: -50, y: 30 },  // U, L, T, I
        { x: 10, y: 30 }, { x: 70, y: 30 }, { x: 130, y: 30 }, { x: 190, y: 30 }  // M, A, T, E
    ];

    blocks.forEach((block, index) => {
        const { x, y } = wordPositions[index];
        block.style.setProperty('--final-x', `${x}px`);
        block.style.setProperty('--final-y', `${y}px`);
        block.style.animation = 'moveToPosition 2s forwards';
    });
}, 1500);
