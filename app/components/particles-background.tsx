import {useEffect} from 'react';
import Particles, {initParticlesEngine} from '@tsparticles/react';
import {loadFull} from 'tsparticles';

const ParticlesBackground = () => {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        });
    }, []);
    return (
        <Particles
            id="particles-js"
            options={
                {
                    "background": {
                        "color": {
                            "value": "#032428"  // Dark teal background
                        }
                    },
                    "particles": {
                        "number": {
                            "value": 800,  // High density for a rich visual effect
                            "density": {
                                "enable": true,
                                height:1000,
                                width:1000
                            }
                        },
                        "color": {
                            "value": "#2dd4bf"  // Light teal particle color for contrast
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "opacity": {
                            "value": 0.05,  // Starts almost invisible for the fade-in effect
                            "random": false,
                            "animation": {
                                "enable": true,
                                "speed": 0.8,  // Slow speed for gradual fade-in
                                "minimumValue": 0.01,  // Minimum opacity to prevent full disappearance
                                "sync": false  // Particles will fade in independently
                            }
                        },
                        "size": {
                            "value": 1.5,  // Medium particle size
                            "random": {
                                "enable": true,
                                "minimumValue": 0.6
                            },
                            "animation": {
                                "enable": true,
                                "speed": 3,  // Smooth animation of size change
                                "minimumValue": 0.4,
                                "sync": false
                            }
                        },
                        "move": {
                            "enable": true,
                            "speed": 0.15,  // Slow particle movement for a calm effect
                            "direction": "right",  // Wind-like direction
                            "random": true,
                            "straight": false,
                            "outModes": {
                                "default": "out"
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onHover": {
                                "enable": true,
                                "mode": "bubble"  // Subtle hover effect
                            },
                            "onClick": {
                                "enable": false
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 100,  // Close hover triggers bubble effect
                                "size": 2.2,  // Slight enlargement on hover
                                "duration": 1.5,
                                "opacity": 0.2,  // Soft glow on hover
                                "speed": 1.2
                            }
                        }
                    },
                    "retina_detect": true
                }
            }
        />
    );
};

export default ParticlesBackground;
