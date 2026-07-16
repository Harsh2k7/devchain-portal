/* ============================================================
   SCRIPT ENGINE - Core Functional Interactivity Handler
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Form Router Mapping Context for Submission Layer
    const subForms = document.querySelectorAll('form');
    subForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            // Simulation validation tracker feedback loops
            alert("🔒 Cryptographic Record Registered via Client Engine successfully!");
            
            // Route tracking parameters forward
            window.location.href = "dashboard.html";
        });
    });

    // 2. Web3 Connected Wallet Simulator Panel Logic Toggle
    const web3ConnectWalletBtn = document.querySelector('.wallet-btn');
    if (web3ConnectWalletBtn) {
        web3ConnectWalletBtn.addEventListener('click', () => {
            web3ConnectWalletBtn.innerHTML = "<i class='fa-solid fa-circle-notch fa-spin'></i> Syncing Ledger Node...";
            web3ConnectWalletBtn.style.borderColor = "#22C55E";
            
            setTimeout(() => {
                web3ConnectWalletBtn.innerHTML = "✅ Identity Connected (0xA34B...)";
                web3ConnectWalletBtn.disabled = true;
                
                // If input block exists inside register profile layer, populate it automatically
                const targetWalletInput = document.querySelector('input[placeholder="0x........"]');
                if (targetWalletInput) {
                    targetWalletInput.value = "0xA34B56C89D12EF34";
                }
            }, 1000);
        });
    }

    // 3. Main Call-to-Action Link Enforcers Routing Loops
    const mainActionButtons = document.querySelectorAll('.actions button, .hero-buttons button');
    mainActionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.toLowerCase();
            if (buttonText.includes('submit')) {
                window.location.href = "submit.html";
            } else if (buttonText.includes('explore')) {
                window.location.href = "explore.html";
            } else if (buttonText.includes('profile') || buttonText.includes('view')) {
                window.location.href = "profile.html";
            } else if (buttonText.includes('started')) {
                window.location.href = "register.html";
            }
        });
    });

    // 4. Explore Interface Project Focus Link Mapping Elements
    const projectDetailButtons = document.querySelectorAll('.project-card button, .innovation-item button');
    projectDetailButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = "details.html";
        });
    });
});

