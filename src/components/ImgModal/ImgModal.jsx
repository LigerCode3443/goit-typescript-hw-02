import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "65%",
    maxHeight: "90%",
    padding: "5px",
    backgroundColor: "gold",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

export const ImgModal = ({ modalIsOpen, closeModal, selectImg }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={selectImg?.urls} alt={selectImg?.alt_description} />
      </Modal>
    </div>
  );
};
