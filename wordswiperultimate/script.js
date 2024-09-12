// script.js
document.addEventListener('DOMContentLoaded', () => {
    const lettersContainer = document.querySelector('.letters');
    const letters = Array.from(document.querySelectorAll('.letter'));
    const correctOrder = "WORDSWIPERULTIMATE".split('');

    // Create a mapping of letters to their correct indices
    const letterToIndices = correctOrder.reduce((acc, letter, index) => {
        if (!acc[letter]) acc[letter] = [];
        acc[letter].push(index);
        return acc;
    }, {});

    // Utility function to shuffle an array
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Function to animate letters to the correct order
    function animateToOrder() {
        const usedIndices = {};
        letters.forEach((letter, index) => {
            const letterValue = letter.textContent;
            const targetIndices = letterToIndices[letterValue];
            const targetIndex = targetIndices.find(i => !usedIndices[i]);
            usedIndices[targetIndex] = true;

            const targetElement = letters[targetIndex];
            const targetRect = targetElement.getBoundingClientRect();
            const currentRect = letter.getBoundingClientRect();
            const offsetX = targetRect.left - currentRect.left;
            const offsetY = targetRect.top - currentRect.top;

            letter.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    }

    // Function to reset the animation
    function resetAnimation() {
        shuffle(letters);
        letters.forEach(letter => {
            lettersContainer.appendChild(letter);
            letter.style.transform = '';
        });
        // setTimeout(animateToOrder, 5000); // Enable this to loop!
    }

    // Function to start the animation loop
    function startAnimationLoop() {
        animateToOrder();
        setInterval(resetAnimation, 10000);
    }

    // Initial setup: shuffle letters and start the loop
    shuffle(letters);
    letters.forEach(letter => {
        lettersContainer.appendChild(letter);
    });
    //startAnimationLoop(); // Enable this to loop!
	setTimeout(animateToOrder, 2000); // Remove this when looping!
});
