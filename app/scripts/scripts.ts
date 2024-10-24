'use client'

// Import vanilla toast
import '../../node_modules/particles.js/particles.js';
import '../../node_modules/vanilla-toast/vanilla-toast.js';


// console.log('%c Hello from /scripts/script.js ', 'background: #112440; border: 1px solid #fff; color: white;');
console.log('%c Welcome to Alessandro Russo console! ', 'background: #112440;color: white;');

// ParticleJS
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// @ts-ignore
particlesJS.load('particles-js', 'src/conf/particle.json', function () {
    // console.log('callback - particles.js config loaded');
});

// Copyright year
// @ts-ignore
document.getElementById("year").innerHTML = new Date().getFullYear().toString();

if (typeof window !== "undefined") {
// @ts-ignore
    window.copyEmail = () => {
        const el = document.createElement('textarea');
        el.value = 'alessandrorusso.info@gmail.com';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        // @ts-ignore
        vanillaToast.show('Email copied!', {className: 'vanilla-toast', duration: 1400, fadeDuration: 200});
    };
}

