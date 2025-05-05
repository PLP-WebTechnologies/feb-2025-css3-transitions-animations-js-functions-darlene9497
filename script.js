// get references to elements
const button = document.getElementById('myButton');
const image = document.getElementById('myImage');

// check localStorage for user preference
const prefersAnimation = localStorage.getItem('prefersAnimation');

// if user prefers animation, apply the animation class
if (prefersAnimation === 'true') {
    button.classList.add('animate-bounce');
    image.classList.add('animate-grow');
}

// function to toggle animation preference
function toggleAnimation() {
    const currentPreference = localStorage.getItem('prefersAnimation');
    
    // toggle between true and false
    if (currentPreference === 'true') {
        localStorage.setItem('prefersAnimation', 'false');
        button.classList.remove('animate-bounce');
        image.classList.remove('animate-grow');
    } else {
        localStorage.setItem('prefersAnimation', 'true');
        button.classList.add('animate-bounce');
        image.classList.add('animate-grow');
    }
}

// event listener to trigger animation toggle
button.addEventListener('click', toggleAnimation);
