import React from "react";
import Particles from "react-particles-js";

const HeroParticles = () => {
    return (
      <Particles
params = {{
	"particles": {
		"number": {
			"value":150
                },
		    "size": {
			"value": 5
			}
	        },
		"interactivity": {
		"events": {
			"onhover": {
				"enable":true,
				"mode": "repulse"
		                }
		            }
		        }

            }}
	width="200vh"
    height="100vh"
    />
    )
}

export default HeroParticles