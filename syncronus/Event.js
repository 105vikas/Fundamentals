// Event Delegagtion is techniques in javaScript where a parent element handles event for it's child elements even if the children are added dynamically after the page loads.
// document.getElementById("parent").addEventListener('click', function (event) {
//     if (event.target.matches('.child')) {
//         console.log("click children: ", event.target.textContent)
//     }
// },false)

// Event Bubling/ Capturing
// Event Bubling - click on child -> click parent -> click grandParent 
// Event Capturing/Trickling - click on child -> click grandParent  -> click parent
// ex:
// document.querySelector("#parent").addEventListener('click', (e) => {
//     console.log("Parent click")
// }, false)
//  useCapturing-> true/false