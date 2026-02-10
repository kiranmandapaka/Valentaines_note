import { useNavigate } from 'react-router-dom';

const SendButton = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
      return;
    }
    navigate('/thank-you');
  };

  return (
    <button className="send-button" onClick={handleClick}>
      Let’s go 💖
    </button>
  );
};

export default SendButton;