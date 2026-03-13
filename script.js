// ===== PARTICLE SYSTEM =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Reduce particle count for better performance
    const particleCount = window.innerWidth < 768 ? 20 : 35;

    // Use a document fragment for batch DOM insertion
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;

        // Use simple opacity instead of radial gradient for better performance
        const colors = [
            'rgba(0, 255, 136, 0.4)',
            'rgba(0, 212, 255, 0.4)',
            'rgba(255, 107, 107, 0.4)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        // Add will-change for GPU acceleration
        particle.style.willChange = 'transform, opacity';

        fragment.appendChild(particle);
    }

    particlesContainer.appendChild(fragment);
}

// ===== 3D MOUSE TRACKING =====
function init3DMouseTracking() {
    const cards = document.querySelectorAll('.category-card');
    const scene = document.querySelector('.main-content');
    if (!scene || cards.length === 0) return;

    // Skip on touch devices (ts = touch screen)
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        return;
    }

    // Add will-change for GPU acceleration
    cards.forEach(card => {
        card.style.willChange = 'transform';
    });

    let ticking = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    scene.addEventListener('mousemove', (e) => {
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;

        if (!ticking) {
            requestAnimationFrame(() => {
                const mouseX = lastMouseX / window.innerWidth - 0.5;
                const mouseY = lastMouseY / window.innerHeight - 0.5;
                const time = Date.now() / 1000;

                cards.forEach((card, index) => {
                    const depth = (index + 1) * 4; // Reduced from 5
                    const rotateX = -mouseY * depth * 0.7; // Reduced multiplier
                    const rotateY = mouseX * depth * 0.7; // Reduced multiplier
                    const floatY = Math.sin(time + index) * 8;

                    card.style.transform = `
                        translateY(${-20 + floatY}px)
                        scale(1.02)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                    `;
                });

                ticking = false;
            });

            ticking = true;
        }
    }, { passive: true });

    scene.addEventListener('mouseleave', () => {
        requestAnimationFrame(() => {
            cards.forEach((card) => {
                card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
            });
        });
    });
}

// ===== CATEGORY NAVIGATION =====
function initCategoryNavigation() {
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;

            // Add click animation
            card.style.animation = 'card-click 0.3s ease';
            setTimeout(() => {
                card.style.animation = '';
            }, 300);

            // Navigate to quiz page with category
            window.location.href = `quiz.html?category=${category}`;
        });

        // Add hover sound effect simulation (visual feedback)
        card.addEventListener('mouseenter', () => {
            card.style.filter = 'brightness(1.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.filter = 'brightness(1)';
        });
    });

    // Add progress indicators
    addProgressIndicators();
}

function addProgressIndicators() {
    const categories = ['biology', 'physics', 'chemistry'];

    categories.forEach((category) => {
        const savedData = localStorage.getItem(`quiz_${category}`);
        const card = document.querySelector(`.category-card.${category}`);

        if (savedData && card) {
            try {
                // Remove existing badges first
                const existingBadge = card.querySelector('.progress-badge, .completed-badge');
                if (existingBadge) existingBadge.remove();

                const data = JSON.parse(savedData);
                const completed = data.currentQuestion;
                const total = data.totalQuestions || 10;

                // Only show badge if some progress made
                if (completed <= 0) return;

                const categoryColors = {
                    biology: '#00ff88',
                    physics: '#00d4ff',
                    chemistry: '#ff6b6b'
                };

                // Create progress badge
                const badge = document.createElement('div');
                badge.className = 'progress-badge';
                badge.style.cssText = `
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 20px;
                    padding: 0.5rem 1rem;
                    color: white;
                    font-size: 0.85rem;
                    font-weight: 600;
                    z-index: 10;
                    animation: badge-pulse 2s infinite;
                `;

                badge.innerHTML = `
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 2px;">
                        <span style="color: ${categoryColors[category]}; font-size: 1rem; font-weight: 700;">${completed}/${total}</span>
                        <span style="font-size: 0.65rem; opacity: 0.8;">ප්‍රශ්න</span>
                    </div>
                `;

                card.querySelector('.card-front').appendChild(badge);

                // Add completed label if finished
                if (completed >= total) {
                    const completedBadge = document.createElement('div');
                    completedBadge.className = 'completed-badge';
                    completedBadge.style.cssText = `
                        position: absolute;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: linear-gradient(90deg, #00ff88, #00d4ff);
                        color: #0a0a1a;
                        padding: 0.5rem 1.5rem;
                        border-radius: 20px;
                        font-size: 0.9rem;
                        font-weight: 700;
                        z-index: 10;
                        animation: shine 2s infinite;
                    `;
                    completedBadge.textContent = 'සම්පූර්ණයි! ✓';
                    card.querySelector('.card-front').appendChild(completedBadge);
                }

            } catch (e) {
                console.error('Error loading progress:', e);
            }
        }
    });
}

// Add card click animation to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes card-click {
        0% {
            transform: translateY(-30px) scale(1.05) rotateX(10deg) rotateY(-10deg);
        }
        50% {
            transform: translateY(-40px) scale(0.95) rotateX(20deg) rotateY(20deg);
        }
        100% {
            transform: translateY(-30px) scale(1.05) rotateX(10deg) rotateY(-10deg);
        }
    }
`;
document.head.appendChild(style);

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    init3DMouseTracking();
    initCategoryNavigation();
    initMobileOptimizations();

    // Add loading complete animation
    document.body.classList.add('loaded');
});

// ===== MOBILE OPTIMIZATIONS =====
function initMobileOptimizations() {
    // Prevent text selection on touch devices for better UX
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.addEventListener('selectstart', (e) => {
            if (e.target.closest('.category-card, .option-btn, .click-hint, button')) {
                e.preventDefault();
            }
        }, { passive: false });

        // Add touch feedback for buttons
        const interactiveElements = document.querySelectorAll('.category-card, .option-btn, .click-hint, .next-btn, .retry-btn, .home-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('touchstart', () => {
                el.style.opacity = '0.8';
                el.style.transform = 'scale(0.98)';
            }, { passive: true });

            el.addEventListener('touchend', () => {
                el.style.opacity = '';
                el.style.transform = '';
            }, { passive: true });
        });
    }

    // Prevent pull-to-refresh on mobile
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    // Lock viewport scale to prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });

    // Ensure proper text sizing on mobile (prevent zoom on input focus)
    document.querySelectorAll('input, textarea, select').forEach(el => {
        el.addEventListener('focus', () => {
            document.body.style.zoom = '1';
        });
    });

    // Prevent iOS rubber banding on scroll containers
    const scrollContainers = document.querySelectorAll('.scene-container, .quiz-container, .main-content');
    scrollContainers.forEach(container => {
        container.addEventListener('touchmove', (e) => {
            // Allow normal scrolling, no preventDefault needed
            // Modern browsers handle this well with overscroll-behavior
        }, { passive: true });
    });
}

// ===== PERFORMANCE OPTIMIZATION =====
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            ticking = false;
        });
        ticking = true;
    }
});
