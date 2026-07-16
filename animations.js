/* ============================================================================
   MASTER ANIMATION ENGINE — COMPREHENSIVE PRODUCTION READY CODE
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================================================
    // 1. CHESS.COM / MOBILE APP STYLE SPLASH LAUNCH SCREEN CONTROLLER
    // ========================================================================
    const splashScreen = document.getElementById('app-splash-screen');
    
    if (splashScreen) {
        // Dynamic wait loop matching smartphone environment initialization patterns
        setTimeout(() => {
            // Smooth dynamic opacity fade cycle out phase
            splashScreen.style.opacity = '0';
            splashScreen.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            
            // Activate core background container element layouts
            document.body.classList.add('app-ready');
            
            // HARD BREAK THE DOM DISPLAY MATRIX (Non-stop loading loophole bypass)
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 500); // 0.5 seconds transparency transition delay anchor
            
        }, 1500); // Main initial display window timeout setup
    }

    // ========================================================================
    // 2. DYNAMIC METRIC COUNTER INCREMENTOR (STATS METRICS SYSTEM)
    // ========================================================================
    const statCards = document.querySelectorAll('.stat-card h2');
    
    statCards.forEach(counter => {
        const rawTargetText = counter.innerText;
        // Strip off strings to run mathematical loops cleanly
        const targetValue = parseInt(rawTargetText.replace(/[^0-9]/g, ''), 10);
        const hasPlusSymbol = rawTargetText.includes('+');
        const hasPercentSymbol = rawTargetText.includes('%');
        
        let startCount = 0;
        const countDuration = 1000; // Total numbers animation interval lifecycle
        const stepsCount = 25;
        const incrementValue = Math.ceil(targetValue / stepsCount) || 1;
        const counterStepDelay = Math.floor(countDuration / stepsCount);

        const runProgressUpdate = setInterval(() => {
            startCount += incrementValue;
            if (startCount >= targetValue) {
                clearInterval(runProgressUpdate);
                // Return original formatting strings onto UI layout context
                let formattedResult = targetValue;
                if (hasPlusSymbol) formattedResult += '+';
                if (hasPercentSymbol) formattedResult += '%';
                counter.innerText = formattedResult;
            } else {
                counter.innerText = startCount;
            }
        }, counterStepDelay);
    });

    // ========================================================================
    // 3. PHYSICAL CLICK SCALE RIPPLE INTERACTION EFFECT
    // ========================================================================
    const operationalButtons = document.querySelectorAll('button, .nav-links a');
    
    operationalButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Apply micro-scale reduction response mimicking natural modern touch vectors
            this.style.transform = "scale(0.95)";
            this.style.transition = "transform 0.1s ease";
            
            setTimeout(() => {
                this.style.transform = "";
            }, 100);
        });
    });
});
