import { FaChevronCircleUp } from "react-icons/fa";
import { Button } from "../styles/Styles";
import { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 2400) {
      setVisible(true);
    } else if (scrolled <= 2400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <FaChevronCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollButton;