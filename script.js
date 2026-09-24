const b=document.querySelector('.menu-btn'),m=document.querySelector('.mobile-menu');if(b&&m){b.onclick=()=>{m.classList.toggle('open');b.textContent=m.classList.contains('open')?'×':'☰';b.setAttribute('aria-expanded',m.classList.contains('open'))};m.querySelectorAll('a').forEach(a=>a.onclick=()=>{m.classList.remove('open');b.textContent='☰'})}document.querySelectorAll('[data-copy-email]').forEach(btn=>btn.onclick=async()=>{try{await navigator.clipboard.writeText(btn.dataset.copyEmail);btn.textContent='Email copied ✓';setTimeout(()=>btn.textContent='Copy email',1800)}catch(e){location.href='mailto:'+btn.dataset.copyEmail}});
/* =========================================
   GOVIND WEB STUDIO — SCROLL REVEAL
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const animatedItems = document.querySelectorAll(
    ".work-card, .service, .process, .about-grid, .section-head, .cta"
  );

  animatedItems.forEach((item, index) => {
    item.classList.add("reveal");

    /* Small stagger between elements */
    item.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  animatedItems.forEach(item => {
    revealObserver.observe(item);
  });

});
