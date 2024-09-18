
document.addEventListener("DOMContentLoaded", () => {
    const svgObject = document.getElementById("india-map");
    
    svgObject.addEventListener("load", function () {
        const svgDoc = svgObject.contentDocument; // Access the SVG document inside the <object>
        const states = svgDoc.querySelectorAll("path"); // Select all paths or other elements

        states.forEach(state => {
            state.addEventListener("click", () => {
                const stateName = state.id; // Get the ID of the clicked element
                console.log(`State clicked: ${stateName}`);
                
                // Redirect to the route /state/:stateName
                window.location.href = `/map/${stateName}`;
            });
        });
    });
});
console.log("Helo")
const slider = document.getElementById('slider');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        prev.addEventListener('click', () => {
            slider.scrollLeft -= 300; // Adjust this value for scrolling
        });

        next.addEventListener('click', () => {
            slider.scrollLeft += 300; // Adjust this value for scrolling
        });
gsap.from(".home",{
    // y:-100,
    // color:"red",
    // duration:1,
    // stagger:1,
    // delay:1
    opacity: 0,
    scale: 0.2,
    duration: 1,
    delay:1.2,
    color:"blue",
    ease: "back.out(1.7)"
    
})
gsap.from(".main",{
    y:-100,
    color:"red",
    duration:1,
   delay:0.4

})


// gsap.from(".left",{
//     y:-100,
//     color:"red",
//     duration:1,
//     strager:1,
//     delay:1
// })


// for product 
// document.querySelectorAll('.contact-btn').forEach(button => {
//     button.addEventListener('click', () => {
//       const sellerName = button.getAttribute('data-seller');
//       document.getElementById('sellerName').innerText = `Contacting ${sellerName}`;
//       document.getElementById('contactModal').classList.remove('hidden');
//     });
//   });
  
//   document.getElementById('closeModal').addEventListener('click', () => {
//     document.getElementById('contactModal').classList.add('hidden');
//   });

//   document.getElementById('sendMessage').addEventListener('click', () => {
//     const message = document.getElementById('message').value;
//     // Handle sending the message (e.g., via an API)
//     alert(`Message sent to the seller: ${message}`);
//     document.getElementById('contactModal').classList.add('hidden');
//   });
  