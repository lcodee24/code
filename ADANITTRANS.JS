// Get the main canvas element and set up the context
const canvas = document.getElementById('chartCanvas');
const ctx = canvas.getContext('2d');

// Define dimensions and padding
const width = canvas.width;
const height = canvas.height;
const padding = 50;

// Create a virtual off-screen canvas to hold all data points
const virtualCanvas = document.createElement('canvas');
const vCtx = virtualCanvas.getContext('2d');
virtualCanvas.width = 20000; // Virtual width for extended data
virtualCanvas.height = height;

// Initialize data points and viewport settings
let dataPoints = [];
const maxPoints = 1000; // Maximum points held in virtual canvas
let viewportStart = 0;  // Start position of the viewport on the virtual canvas
const viewportWidth = width - 2 * padding; // Width of the visible area

// Scrollbar and controls
const scrollbar = document.getElementById('scrollbar');
const positionIndicator = document.getElementById('positionIndicator');
const goStartButton = document.getElementById('goStart');
const goEndButton = document.getElementById('goEnd');

// Function to generate the next random price near the last price
function getNextPrice(lastPrice) {
    const volatility = 2; // Adjust the randomness
    const change = (Math.random() - 0.5) * volatility;
    return Math.max(0, lastPrice + change); // Ensure price doesn't drop below 0
}

// Initialize with some starting data
for (let i = 0; i < maxPoints; i++) {
    const lastPrice = dataPoints.length ? dataPoints[dataPoints.length - 1] : 100;
    dataPoints.push(getNextPrice(lastPrice));
}

// Draw grid lines on the main canvas
function drawGrid() {
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;

    for (let i = padding; i < height - padding; i += (height - 2 * padding) / 5) {
        ctx.beginPath();
        ctx.moveTo(padding, i);
        ctx.lineTo(width - padding, i);
        ctx.stroke();
    }
}

// Draw axes on the main canvas
function drawAxes() {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    // Draw X axis
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw Y axis
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.stroke();
}

// Function to plot data onto the virtual canvas
function plotData() {
    vCtx.clearRect(0, 0, virtualCanvas.width, virtualCanvas.height); // Clear the virtual canvas

    // Find max and min prices
    const prices = dataPoints;
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);

    const xScale = virtualCanvas.width / dataPoints.length;
    const yScale = (height - 2 * padding) / (maxPrice - minPrice);

    // Draw the line on the virtual canvas
    vCtx.strokeStyle = '#007bff';
    vCtx.lineWidth = 2;
    vCtx.beginPath();

    dataPoints.forEach((price, index) => {
        const x = index * xScale;
        const y = height - padding - (price - minPrice) * yScale;

        if (index === 0) {
            vCtx.moveTo(x, y);
        } else {
            vCtx.lineTo(x, y);
        }
    });
    vCtx.stroke();
}

// Function to draw the visible part of the virtual canvas onto the main canvas
function drawChart() {
    ctx.clearRect(0, 0, width, height); // Clear the main canvas
    drawGrid();
    drawAxes();

    // Draw the visible section of the virtual canvas
    ctx.drawImage(
        virtualCanvas, // Source canvas
        viewportStart, // Source x start
        0, // Source y start
        viewportWidth, // Source width (viewport width)
        height, // Source height
        padding, // Destination x on the main canvas
        0, // Destination y on the main canvas
        viewportWidth, // Destination width
        height // Destination height
    );

    updatePositionIndicator(); // Update the position indicator
}

// Function to update the position indicator text
function updatePositionIndicator() {
    const endPosition = virtualCanvas.width - viewportWidth;
    if (viewportStart <= 0) {
        positionIndicator.textContent = "Position: Start";
    } else if (viewportStart >= endPosition) {
        positionIndicator.textContent = "Position: End";
    } else {
        positionIndicator.textContent = "Position: Middle";
    }
}

// Function to update the chart with new data and scroll if needed
function updateChart() {
    const lastPrice = dataPoints[dataPoints.length - 1];
    dataPoints.push(getNextPrice(lastPrice)); // Add new price point

    // Maintain data within maxPoints limit
    if (dataPoints.length > maxPoints) {
        dataPoints.shift(); // Remove the oldest point
    }

    plotData();
    drawChart();
}

// Function to handle scrollbar movement
function handleScrollbarChange() {
    const scrollValue = parseInt(scrollbar.value, 10);
    const maxScroll = virtualCanvas.width - viewportWidth;
    viewportStart = (scrollValue / 100) * maxScroll;
    drawChart();
}

// Function to scroll to the start
function goToStart() {
    viewportStart = 0;
    scrollbar.value = 0;
    drawChart();
}

// Function to scroll to the end
function goToEnd() {
    viewportStart = virtualCanvas.width - viewportWidth;
    scrollbar.value = 100;
    drawChart();
}

// Event listeners
scrollbar.addEventListener('input', handleScrollbarChange);
goStartButton.addEventListener('click', goToStart);
goEndButton.addEventListener('click', goToEnd);

// Start the update loop
setInterval(updateChart,100); // Update every 500ms

plotData(); // Initial plot
drawChart(); // Initial draw
