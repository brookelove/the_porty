import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../Assets/CSS/Components/Modal.css";
import { MdFileDownload } from "react-icons/md";
import star from "../Assets/Images/Star 6.svg";
import resume from "../Assets/Images/resumePicture.png";

const Modal = ({ isVisible, onClose }) => {
  const modalRef = useRef();

  // GSAP animation on component mount
  useEffect(() => {
    if (isVisible) {
      // document.body.style.overflow = "hidden";
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          y: 80,
          ease: "power1.out",
        }
      );
    } else {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isVisible]);

  return isVisible ? (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content shadow-twelve"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="star-close"
          src={star}
          alt="Star"
          width="38"
          height="48"
          onClick={onClose}
        />

        <img src={resume} />
        <button>
          <MdFileDownload />
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
