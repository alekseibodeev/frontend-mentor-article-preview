const popover = document.querySelector(".popover");
const popoverToggler = document.querySelector(".popover__toggler");
const popoverBody = document.querySelector(".popover__body");

popoverToggler.addEventListener("click", () => {
  if (popoverBody.getAttribute("data-hidden") === "true") {
    popoverBody.setAttribute("data-hidden", "false");
  } else {
    popoverBody.setAttribute("data-hidden", "true");
  }
});

document.body.addEventListener("click", (event) => {
  if (!popover.contains(event.target)) {
    popoverBody.setAttribute("data-hidden", "true");
  }
});
