// Timer App Demo - Simple Animation

console.log('=== Demo script loaded ===');

setTimeout(() => {
    console.log('Starting demo animations');
    
    // Make terminal lines visible with letter-by-letter animation
    const terminalLines = document.querySelectorAll('.terminal-line');
    console.log('✓ Terminal lines:', terminalLines.length);
    
    let totalDelay = 0;
    terminalLines.forEach((line) => {
        const text = line.textContent;
        line.innerHTML = '';
        
        // Split text into characters and wrap each in a span
        text.split('').forEach((char, charIdx) => {
            const span = document.createElement('span');
            // Use non-breaking space if character is a space
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline';
            span.style.opacity = '0';
            span.style.animation = `typeChar 0.05s ease-in forwards`;
            span.style.animationDelay = (totalDelay + charIdx * 30) + 'ms';
            line.appendChild(span);
        });
        
        totalDelay += text.length * 30 + 200;
    });
    
    // Show usage bars immediately with full width
    showBars();
    
    // Animate timer canvas
    const canvas = document.getElementById('timerCanvas');
    if (canvas) {
        drawTimer();
    }
    
    // Animate features
    animateFeatures();
}, 300);

function showBars() {
    const bars = document.querySelectorAll('.usage-fill');
    console.log('✓ Usage bars found:', bars.length);
    
    bars.forEach((bar, idx) => {
        const targetWidth = bar.getAttribute('data-target') || 0;
        console.log(`  Bar ${idx} (${bar.className}): target = ${targetWidth}%`);
        
        // Show bar immediately first
        bar.style.width = targetWidth + '%';
        bar.style.display = 'block';
        bar.style.visibility = 'visible';
    });
}

function drawTimer() {
    const canvas = document.getElementById('timerCanvas');
    const ctx = canvas.getContext('2d');
    const centerX = 125;
    const centerY = 125;
    const radius = 80;
    
    const progressObj = { value: 0 };
    
    anime({
        targets: progressObj,
        value: 0.75,
        duration: 1500,
        easing: 'easeOutQuad',
        update: () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Background circle
            ctx.strokeStyle = '#e0e0e0';
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.stroke();
            
            // Progress arc
            if (progressObj.value > 0) {
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = 10;
                ctx.lineCap = 'round';
                ctx.beginPath();
                const angle = progressObj.value * 2 * Math.PI - Math.PI / 2;
                ctx.arc(centerX, centerY, radius, -Math.PI / 2, angle);
                ctx.stroke();
            }
        }
    });
}

function animateFeatures() {
    const features = document.querySelectorAll('.feature-item');
    console.log('✓ Feature items found:', features.length);
    
    features.forEach((feature, idx) => {
        feature.style.opacity = '0';
        setTimeout(() => {
            anime({
                targets: feature,
                opacity: 1,
                translateY: [20, 0],
                duration: 600,
                easing: 'easeOutQuad'
            });
        }, idx * 100);
    });
}

// Cursor animation (handled by app.js)

// Button hover effects
document.querySelectorAll('.cta-btn').forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
        anime({
            targets: btn,
            scale: 1.05,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
    btn.addEventListener('mouseleave', () => {
        anime({
            targets: btn,
            scale: 1,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});

console.log('=== Demo script initialized ===');
