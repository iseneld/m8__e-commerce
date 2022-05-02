import "../Styles/main.css";
import AboutPopUp from "../Components/AboutPopUp";


const AboutPop = () => {

  const modal = document.querySelector(".faded-background-container");
  const trigger = document.querySelector(".trigger");
  const closeButton = document.querySelector(".close-button");

  /*   function toggleModal() {
      modal.classList.toggle("show-modal");
    }
  
    function windowOnClick(event) {
      if (event.target === modal) {
        toggleModal();
      }
    }
  
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick); */

  return (
    <>
      <div>
        <AboutPopUp />
      </div>

    </>
  )
}

export default AboutPop;
