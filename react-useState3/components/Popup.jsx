import { createPortal } from "react-dom";

const Popup = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3" }}>
          Copied to clipboard
        </div>
      )}
    </section>,
    document.querySelector("#popup-content")
  );
};
export default Popup;