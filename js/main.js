/* =========================================================
   ÓPTICA INNOVA - JavaScript principal
   - Menú móvil (hamburger)
   - Header con efecto al hacer scroll
   - Animaciones reveal al hacer scroll (IntersectionObserver)
   - Año dinámico en footer
   - Validación básica del formulario de contacto
   ========================================================= */

(function () {
    'use strict';

    // ===== Año dinámico en footer =====
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ===== Header con efecto al hacer scroll =====
    const header = document.getElementById('siteHeader');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ===== Menú móvil (hamburger) =====
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    let overlay = null;

    if (navToggle && mainNav) {
        // Crear overlay dinámicamente
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);

        const closeMenu = () => {
            navToggle.classList.remove('active');
            mainNav.classList.remove('open');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
            navToggle.setAttribute('aria-expanded', 'false');
        };

        const openMenu = () => {
            navToggle.classList.add('active');
            mainNav.classList.add('open');
            overlay.classList.add('active');
            document.body.classList.add('no-scroll');
            navToggle.setAttribute('aria-expanded', 'true');
        };

        navToggle.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        overlay.addEventListener('click', closeMenu);

        // Cerrar el menú al hacer clic en un enlace
        mainNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });

        // Cerrar el menú con la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('open')) {
                closeMenu();
            }
        });

        // Cerrar el menú si la ventana se hace más grande
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && mainNav.classList.contains('open')) {
                closeMenu();
            }
        });
    }

    // ===== Animaciones reveal con IntersectionObserver =====
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        revealEls.forEach((el) => observer.observe(el));
    } else {
        // Fallback: mostrar todo si no hay soporte
        revealEls.forEach((el) => el.classList.add('visible'));
    }

    // ===== Formulario de contacto - validación + simulación de envío =====
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (form && feedback) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Limpiar feedback previo
            feedback.className = 'form-feedback';
            feedback.textContent = '';

            const name = form.querySelector('#name').value.trim();
            const phone = form.querySelector('#phone').value.trim();
            const email = form.querySelector('#email').value.trim();
            const message = form.querySelector('#message').value.trim();
            const privacy = form.querySelector('#privacy').checked;

            // Validaciones básicas
            if (!name || !phone || !message) {
                showFeedback('Por favor, completa todos los campos obligatorios.', 'error');
                return;
            }

            // Teléfono: al menos 9 dígitos
            const phoneClean = phone.replace(/[\s+\-()]/g, '');
            if (!/^\d{9,}$/.test(phoneClean)) {
                showFeedback('Introduce un número de teléfono válido.', 'error');
                return;
            }

            // Email opcional pero si se rellena debe ser correcto
            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showFeedback('Introduce un email válido o déjalo en blanco.', 'error');
                return;
            }

            if (!privacy) {
                showFeedback('Debes aceptar la política de privacidad.', 'error');
                return;
            }

            // Simular envío (en producción se conectaría con backend / servicio email)
            showFeedback('¡Gracias! Hemos recibido tu mensaje. Te responderemos lo antes posible.', 'success');
            form.reset();

            // Ocultar feedback tras unos segundos
            setTimeout(() => {
                feedback.className = 'form-feedback';
                feedback.textContent = '';
            }, 8000);
        });

        function showFeedback(text, type) {
            feedback.textContent = text;
            feedback.className = 'form-feedback ' + type;
        }
    }

    // ===== Smooth scroll para enlaces internos #seccion =====
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#' || href.length < 2) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            }
        });
    });
})();
