// Define the props interface
interface ButtonProps {
  ButtonName: string;
}

// Add the props to your component
const Button: React.FC<ButtonProps> = ({ ButtonName }) => {
  return (
    <button style={{
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#a6ee6c',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px'
    }}>
      {ButtonName} {/* This will display whatever text is passed in */}
    </button>
  );
};

export default Button;