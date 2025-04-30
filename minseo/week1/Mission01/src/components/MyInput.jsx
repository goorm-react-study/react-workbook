import '../styles/MyInput.css'
function MyInput({ value, onChange }) {
    return (
    <input
        className="MyInput"
        type="text"
        value={value}
        onChange={onChange}
    />
    );
}

export default MyInput;