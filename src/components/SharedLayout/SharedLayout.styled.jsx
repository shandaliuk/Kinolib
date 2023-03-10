import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 0px;
    background-color: rgba(3, 10, 2, 0.85);
    color: #61de2a;
    font-family: inherit;
    font-size: 12px;
    font-weight: 200;
    text-transform: uppercase;
  }
  .Toastify__progress-bar--success {
    height: 1px;
    background-color: #61de2a;
  }

  .Toastify__close-button {
    color: #61de2a;
  }
`;
