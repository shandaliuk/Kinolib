import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const MovieModal = ({ isOpened, onOpening, onClosure }) => {
  return (
    <Modal
      isOpen={isOpened}
      onAfterOpen={onOpening}
      onRequestClose={onClosure}
      style={customStyles}
    >
      <h2>Hello</h2>
    </Modal>
  );
};
