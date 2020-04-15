import React, { useRef, useEffect } from "react";
import "./RippleButton.css";

const RippleButton = props => {
  const { label, onClick, style, children, className } = props;
  const button = useRef(null);

  useEffect(() => {
    let mounted = true;
    const b = button.current;
    b.addEventListener("click", e => {
      const rect = button.current.getBoundingClientRect();
      const ripple = document.createElement("div");
      const width = Math.max(rect.width, rect.height) * 2;
      ripple.style.width = width + "px";
      ripple.style.height = width + "px";
      ripple.style.left = e.clientX - rect.left - width / 2 + "px";
      ripple.style.top = e.clientY - rect.top - width / 2 + "px";
      ripple.className = "ripple";
      button.current.appendChild(ripple);

      setTimeout(() => mounted && button.current.removeChild(ripple), 1000);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <button
      ref={button}
      onClick={onClick}
      className={`ripple-button ${className || ""}`}
      style={style}
    >
      <div id="ripple-button-label">{children || label || "Button"}</div>
    </button>
  );
};

export default RippleButton;
