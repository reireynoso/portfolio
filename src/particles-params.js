const particlesParams = {
    particles: {
    number: {
        value: 60,
    },
            line_linked: {
                width: 2
            }
    },
    interactivity: {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "grab": {
                "distance": 200,
                "opacity": 1
            }
        }
    }
}

export default particlesParams