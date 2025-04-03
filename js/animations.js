// Background Animation
const createBackgroundAnimation = () => {
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const backgroundAnimation = document.querySelector('.background-animation');
        
        if (!backgroundAnimation) {
            console.error('Background animation container not found');
            return;
        }
        
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        
        backgroundAnimation.appendChild(canvas);
        
        // Mouse position with enhanced trail effect
        let mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            trail: [],
            maxTrail: 25,
            radius: 250 // Slightly reduced influence radius
        };
        
        // Update mouse position with enhanced trail
        document.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.trail.unshift({ x: e.clientX, y: e.clientY });
            if (mouse.trail.length > mouse.maxTrail) {
                mouse.trail.pop();
            }
        });
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        const particles = [];
        const particleCount = 200;
        const particleBaseSize = 2;
        const connectionDistance = 150;
        const mouseForce = 0.005; // Reduced from 0.01 to 0.005 for even slower movement
        
        // Create particles with velocity
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * particleBaseSize + 1,
                baseX: Math.random() * canvas.width,
                baseY: Math.random() * canvas.height,
                vx: 0,
                vy: 0,
                speed: Math.random() * 0.1 + 0.05, // Reduced from 0.2 + 0.1 to 0.1 + 0.05 for even slower base speed
                angle: Math.random() * Math.PI * 2,
                hue: Math.random() * 60 - 30
            });
        }
        
        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw mouse trail with gradient
            if (mouse.trail.length > 2) {
                ctx.beginPath();
                const gradient = ctx.createLinearGradient(
                    mouse.trail[0].x, mouse.trail[0].y,
                    mouse.trail[mouse.trail.length - 1].x, mouse.trail[mouse.trail.length - 1].y
                );
                gradient.addColorStop(0, 'rgba(255, 77, 143, 0.2)'); // Reduced trail opacity
                gradient.addColorStop(1, 'rgba(0, 201, 167, 0)');
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2; // Slightly thinner trail
                ctx.moveTo(mouse.trail[0].x, mouse.trail[0].y);
                for (let i = 1; i < mouse.trail.length; i++) {
                    const x = mouse.trail[i].x;
                    const y = mouse.trail[i].y;
                    ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            
            particles.forEach((particle, index) => {
                // Enhanced mouse interaction
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    const targetX = mouse.x + Math.cos(angle + Math.PI) * mouse.radius * 0.5;
                    const targetY = mouse.y + Math.sin(angle + Math.PI) * mouse.radius * 0.5;
                    
                    particle.vx += (targetX - particle.x) * force * mouseForce;
                    particle.vy += (targetY - particle.y) * force * mouseForce;
                }
                
                // Update velocity with even smoother damping
                particle.vx *= 0.98; // Increased damping for even smoother movement
                particle.vy *= 0.98; // Increased damping for even smoother movement
                
                // Update position with slower movement
                particle.x += particle.vx * 0.2; // Reduced from 0.4 to 0.2 for even slower movement
                particle.y += particle.vy * 0.2; // Reduced from 0.4 to 0.2 for even slower movement
                
                // Boundary check with gentler bounce
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.5;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.5;
                
                // Draw particle with enhanced glow
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.radius * 3
                );
                const hue = (particle.hue + performance.now() / 100) % 360; // Slower color change
                gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, 0.8)`);
                gradient.addColorStop(1, 'rgba(255, 77, 143, 0)');
                ctx.fillStyle = gradient;
                ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw connections with enhanced gradient
                particles.forEach((otherParticle, otherIndex) => {
                    if (index < otherIndex) {
                        const dx = particle.x - otherParticle.x;
                        const dy = particle.y - otherParticle.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < connectionDistance) {
                            const opacity = (1 - distance / connectionDistance) * 0.3; // Reduced connection opacity
                            const gradient = ctx.createLinearGradient(
                                particle.x, particle.y,
                                otherParticle.x, otherParticle.y
                            );
                            gradient.addColorStop(0, `rgba(255, 77, 143, ${opacity})`);
                            gradient.addColorStop(1, `rgba(0, 201, 167, ${opacity})`);
                            ctx.beginPath();
                            ctx.strokeStyle = gradient;
                            ctx.lineWidth = 1 * (1 - distance / connectionDistance);
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(otherParticle.x, otherParticle.y);
                            ctx.stroke();
                        }
                    }
                });
            });
            
            requestAnimationFrame(drawParticles);
        };
        
        drawParticles();
    } catch (error) {
        console.error('Error in createBackgroundAnimation:', error);
    }
};

// Home Section Animations
const animateHomeSection = () => {
    const timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000
    });
    
    timeline
        .add({
            targets: '.title',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800
        })
        .add({
            targets: '.subtitle',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800
        }, '-=600')
        .add({
            targets: '.description',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800
        }, '-=600')
        .add({
            targets: '.cta-button',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800
        }, '-=600');
};

// Scroll Animations
const createScrollAnimations = () => {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const sectionTitle = section.querySelector('.section-title');
                
                if (sectionTitle) {
                    anime({
                        targets: sectionTitle,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }
                
                if (section.id === 'portfolio') {
                    anime({
                        targets: '.portfolio-grid > *',
                        opacity: [0, 1],
                        translateY: [20, 0],
                        delay: anime.stagger(100),
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }
                
                if (section.id === 'experience') {
                    anime({
                        targets: '.timeline::before',
                        scaleY: [0, 1],
                        duration: 1000,
                        easing: 'easeInOutQuad'
                    });
                    
                    anime({
                        targets: '.timeline-item',
                        translateY: [50, 0],
                        delay: anime.stagger(200),
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }
                
                if (section.id === 'hobbies') {
                    anime({
                        targets: '.hobbies-grid > *',
                        scale: [0.8, 1],
                        opacity: [0, 1],
                        delay: anime.stagger(100),
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }
                
                observer.unobserve(section);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
};

// Navigation Animations
const createNavigationAnimations = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && 
                section.offsetTop + section.offsetHeight > scrollPosition) {
                const currentId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
};

// Title gradient effect
const handleTitleGradient = () => {
    const titles = document.querySelectorAll('.title, .section-title');
    
    if (!titles.length) return;

    // Define the radius of influence (in pixels)
    const radius = 150; // Reduced radius for more precise hover effect

    const updateGradient = (e) => {
        titles.forEach(title => {
            const rect = title.getBoundingClientRect();
            
            // Calculate the nearest point on the text to the cursor
            const nearestX = Math.max(rect.left, Math.min(e.clientX, rect.right));
            const nearestY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));
            
            // Calculate distance from cursor to nearest point on text
            const dx = e.clientX - nearestX;
            const dy = e.clientY - nearestY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Calculate gradient position relative to the text
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            // Update the CSS variables for mouse position
            title.style.setProperty('--mouse-x', `${x}%`);
            title.style.setProperty('--mouse-y', `${y}%`);
            
            // Calculate opacity with a sharper falloff
            const normalizedDistance = Math.max(0, Math.min(1, distance / radius));
            const opacity = Math.pow(1 - normalizedDistance, 3); // Increased power for sharper falloff
            title.style.setProperty('--gradient-opacity', opacity);
        });
    };

    // Update gradient on mouse move
    document.addEventListener('mousemove', updateGradient);

    // Reset gradient when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        titles.forEach(title => {
            title.style.setProperty('--gradient-opacity', 0);
        });
    });
};

// Initialize animations when the DOM is loaded
const init = () => {
    console.log('Initializing animations...');
    try {
        // Create background animation
        createBackgroundAnimation();
        console.log('Background animation created');

        // Animate content with a staggered effect
        const animateContent = () => {
            const timeline = anime.timeline({
                easing: 'easeOutExpo'
            });

            timeline
                .add({
                    targets: '.title',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1200
                })
                .add({
                    targets: '.subtitle',
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 1000
                }, '-=800')
                .add({
                    targets: '.description',
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 1000
                }, '-=800')
                .add({
                    targets: '.cta-button',
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 1000
                }, '-=800')
                .add({
                    targets: '.nav-links a',
                    opacity: [0, 1],
                    translateY: [-20, 0],
                    delay: anime.stagger(100),
                    duration: 800
                }, '-=800');
        };

        // Start animations
        animateContent();

        // Add scroll animations
        createScrollAnimations();
        createNavigationAnimations();

        // Handle title gradient effect
        handleTitleGradient();

    } catch (error) {
        console.error('Error during animation initialization:', error);
    }
};

// Make sure the DOM is loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
} 