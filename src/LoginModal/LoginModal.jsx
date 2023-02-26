import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import sprite from 'images/sprite.svg';
import {
  ModalContent,
  Overlay,
  CloseButton,
  CloseIcon,
} from './LoginModal.styled';

export const LoginModal = () => {
  const navigate = useNavigate();

  const handleClosure = () => {
    navigate('/movies/trending');
  };
  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={handleClosure}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => (
          <ModalContent {...props}>{children}</ModalContent>
        )}
        overlayElement={(props, contentElement) => (
          <Overlay {...props}>{contentElement}</Overlay>
        )}
      >
        <CloseButton type="button" onClick={handleClosure}>
          <CloseIcon>
            <use href={sprite + '#icon-close'}></use>
          </CloseIcon>
        </CloseButton>
      </Modal>
    </>
  );
};
