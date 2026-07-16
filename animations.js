/* ============================================================
   ANIMATION ENGINE - Counters and Scroll Smooth Triggers
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Metric Counter Incrementor for Stats Grid Elements
    const statCards = document.querySelectorAll('.stat-card h2');
    
    statCards.forEach(counter => {
        const rawTargetText = counter.innerText;
        // Clean mathematical extraction of raw values
        const targetValue = parseInt(rawTargetText.replace(/[^0-9]/g, ''), 10);
        const hasPlusSymbol = rawTargetText.includes('+');
        const hasPercentSymbol = rawTargetText.includes('%');
        
        let startCount = 0;
        const countDuration = 1200; // Duration of counter execution in ms
        const stepsCount = 30;
        const incrementValue = Math.ceil(targetValue / stepsCount) || 1;
        const counterStepDelay = Math.floor(countDuration / stepsCount);

        const runProgressUpdate = setInterval(() => {
            startCount += incrementValue;
            if (startCount >= targetValue) {
                clearInterval(runProgressUpdate);
                let formattedResult = targetValue;
                if (hasPlusSymbol) formattedResult += '+';
                if (hasPercentSymbol) formattedResult += '%';
                counter.innerText = formattedResult;
            } else {
                counter.innerText = startCount;
            }
        }, counterStepDelay);
    });

    // 2. Hover Parallax Vector Shifts for Cards
    const cards = document.querySelectorAll('.feature-card, .step, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = "all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)";
        });
    });
});

