// Wrap the code in a function as instructed
function addingEventListener() {
    const input = document.getElementById('button');
    
    // Add an event listener for click event
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}

// Call the function to activate the event listener
addingEventListener();
