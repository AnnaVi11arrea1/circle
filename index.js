document.addEventListener("DOMContentLoaded", () => {
    let wedges = [];
    let wheels = [];
    function placeWedges() {
        for (let i = 0; i < 3; i++) {
            const wheel = makeWedges();
            wheels.push(wheel);
        }

        for (let i = 0; i < wheels.length; i++) {
            const randomX = Math.random() * 50;
            const randomY = Math.random() * 50;
            wheels[i].style.transformOrigin = `${randomX}% ${randomY}%`;
        }
    }

    function makeWedges () {     
        const wedgeArea = document.createElement("div");
        wedgeArea.setAttribute("class", "wedgeArea");
        document.getElementById('child2').appendChild(wedgeArea);

        const gradients = [
            'radial-gradient(circle, yellow, cyan, magenta, purple)',
            'radial-gradient(circle, cyan, lime, yellow, orange)',
            'radial-gradient(circle, yellow, lime, blue)',
            'radial-gradient(circle, lime, cyan, purple)',
            'radial-gradient(circle, violet, magenta)'
        ];

        for (let i = 0; i < 20; i++) {
            const wedge = document.createElement("div");
            wedge.setAttribute("class", "wedges");
            const gradient = gradients[i % gradients.length];
            wedge.style.setProperty('--wedge-gradient', gradient);
            wedgeArea.appendChild(wedge);
            wedges.push(wedge);

            
        }
        
        const rotateWedge = document.getElementsByClassName("wedges");
        for (let j = 0; j < rotateWedge.length; j++) {
            rotateWedge[j].style.transform = `rotate(${j * 22.5}deg)`;   
        }
        return wedgeArea;
        }
        
            // const leafarea = document.createElement("div");
            // leafarea.setAttribute("class", "leaf");
            // wedge.appendChild(leafarea);
            
            // const innerleaf = document.createElement("div");
            // innerleaf.setAttribute("class", "cut");
            
            // const blackpart = document.createElement("div");
            // blackpart.setAttribute("class", "leaflet");

            // const otherpart = document.createElement("div");
            // otherpart.setAttribute("class", "cut2");

            // leafarea.appendChild(otherpart);
            // innerleaf.appendChild(blackpart);
            // leafarea.appendChild(innerleaf);
            // wedge.appendChild(leafarea);   
        
    
        placeWedges();
        
console.log(wedges);
console.log(wheels);
    
});