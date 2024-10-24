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
                    fpsLimit: 60,
                    background: {
                        color: "#032428"
                    },
                    interactivity: {
                        events: {
                            onClick: {enable: true, mode: "push"},
                            onHover: {
                                enable: true,
                                mode: "repulse",
                                parallax: {enable: false, force: 60, smooth: 10}
                            },
                            resize: {delay: 100, enable: true}
                        },
                        modes: {
                            push: {quantity: 4},
                            repulse: {distance: 200, duration: 0.4}
                        }
                    },
                    particles: {
                        color: {value: "#2dd4bf"},
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: "out",
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                height: 800,
                                width: 800
                            }
                        },
                        value: 80
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            speed: 0.05,
                            sync: true,
                            startValue: "max",
                            count: 1,
                            destroy: "min"
                        },
                        value: {
                            min: 0,
                            max: 0.5
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: {min: .2, max: 1.2}
                    }
                }
            }
        />
    );
};

export default ParticlesBackground;
