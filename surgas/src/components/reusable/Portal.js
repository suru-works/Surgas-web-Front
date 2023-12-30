import ReactDOM from 'react-dom';

function Portal({ children, container }) {
  return ReactDOM.createPortal(children, container);
}

export default Portal;