import "../styles/MyButton.css"
function MyButton({ onClick, label }) {
    return (
    <button 
        className="MyButton"
        onClick={onClick}>
        {label}
    </button>
    );
}  

export default MyButton;  