/* ============================================================
   NAVBAR ENGINE - Dynamic Nav State Router & Authentication
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Path analysis for link tracking updates
    const currentPath = window.location.pathname.split("/").pop() || "home.html";
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(item => {
        // Link reference updates cleanly
        const targetHref = item.getAttribute('href');
        if (targetHref === currentPath || (currentPath === "index.html" && targetHref === "home.html")) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // 2. Authentication Button Handler
    const logoutBtn = document.querySelector('.login-btn');
    if (logoutBtn && logoutBtn.textContent.trim() === "Logout") {
        logoutBtn.addEventListener('click', () => {
            if(confirm("Are you sure you want to return to authentication matrix?")) {
                window.location.href = "login.html";
            }
        });
    }

    // 3. Logo Redirection Engine
    const brandLogo = document.querySelector('.logo');
    if (brandLogo) {
        brandLogo.addEventListener('click', () => {
            window.location.href = "home.html";
        });
    }
});

