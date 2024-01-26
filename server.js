console.clear();

// Simple text-based loading animation
const loadingAnimation = ['|', '/', '-', '\\'];
let i = 0;

const interval = setInterval(() => {
    process.stdout.write('\r' + loadingAnimation[i++]);
    i &= 3;
}, 100);

// After 7.5 seconds, clear the interval and print the message
setTimeout(() => {
    clearInterval(interval);
    process.stdout.write('\rServer up and active on AWS\n');
}, 7500);
