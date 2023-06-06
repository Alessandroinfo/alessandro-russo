// Import vanilla toast
import {vanillaToast} from 'vanilla-toast/vanilla-toast';
// add custom js below
import '../../node_modules/particles.js/particles.js';


// console.log('%c Hello from /scripts/script.js ', 'background: #112440; border: 1px solid #fff; color: white;');
console.log('%c Welcome to Alessandro Russo console! ', 'background: #112440;color: white;');

// ParticleJS
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'src/conf/particle.json', function () {
    // console.log('callback - particles.js config loaded');
});

// Copyright year
document.getElementById("year").innerHTML = new Date().getFullYear().toString();

window.copyEmail = () => {
    const el = document.createElement('textarea');
    el.value = 'alessandrorusso.info@gmail.com';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    vanillaToast.show('Email copied!', {className:'vanilla-toast', duration:1400, fadeDuration:200});
};
