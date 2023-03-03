let dynamicStyles = null;

// checking if the style sheet for new ball exists or not
function createAnimation(body) {
  // if style sheet is not there
  if (!dynamicStyles) {
    dynamicStyles = document.createElement("style");
    document.head.appendChild(dynamicStyles);
  }
  // if style sheet already exists
  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

const dropBall = () => {
  let element = document.createElement("div");
  element.innerHTML = "⚽";
  element.classList.add("ball");
  let pos = Math.floor(Math.random() * window.innerWidth);
  element.style.left = pos + "px";
  element.classList.add("active");
  let posx = window.innerWidth + 100;
  let position = Math.floor(Math.random() * (Math.random(1000) + 1) + 100);
  createAnimation(`
      @keyframes drop {
            0%{
                  transform: translateY(-50px) translateX(0px);
            }
            100%{
                  transform: translateY( calc(100vh + ${posx}px)) translateX(${position}px);
            }
      }
    `);
  document.body.appendChild(element);
};

document.querySelector(".btn").addEventListener("click", () => {
  dropBall();
});
