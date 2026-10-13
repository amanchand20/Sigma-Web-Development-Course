// Array of messages to display sequentially
const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

// Helper function to generate a random delay between min and max seconds
const getRandomDelay = (minSeconds, maxSeconds) => {
    const randomMs = Math.floor(Math.random() * (maxSeconds - minSeconds + 1) + minSeconds) * 1000;
    return new Promise(resolve => setTimeout(resolve, randomMs));
};

// Function to add a message line to the terminal DOM
const addItem = async (message) => {
    // Wait for a random delay between 1 and 7 seconds
    await getRandomDelay(1, 7);

    const terminal = document.getElementById("terminal");

    // Create new div container for the line
    const div = document.createElement("div");
    div.className = "line";

    // Inner HTML includes text plus a blinking span for dots
    div.innerHTML = `${message}<span class="blink">...</span>`;

    terminal.appendChild(div);
};

// Main async function to run the simulator sequentially
async function runSimulator() {
    for (const msg of messages) {
        await addItem(msg);
    }
}

// Start the simulator
runSimulator();