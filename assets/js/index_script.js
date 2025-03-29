// let sections = document.querySelectorAll('section>div:first-child');
// let navLinks = document.querySelectorAll('header nav ul li a');
//
// window.onscroll = () => {
//     sections.forEach(sec => {
//        let top = window.scrollY;
//        let offset = sec.offsetTop;
//        let height = sec.offsetHeight;
//        let id = sec.getAttribute('id');
//       
//        if(top * 1.1 >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
//             });
//        };
//     });
// };

let textArrayElement = 0;

function changeText() {
  const texts = ["A Software Engineering Student.", "A Web Developer.", "A Designer."];
  if (textArrayElement == texts.length) {
    textArrayElement = 1;
    document.getElementById("sub-topics").innerHTML = texts[0];
  } else {
    document.getElementById("sub-topics").innerHTML = texts[textArrayElement];
    textArrayElement++;
  }
}

setInterval(changeText, 3000);