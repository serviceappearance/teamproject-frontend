export default function BigButton({ width, text, onClick, disabled }) {
  const bigButtonStyle = {
    display: "flex",
    width: width,
    height: "43px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    background: disabled ? "#d3d3d3" : "#0A625C",
  };
  const handleClick = (event) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };
  return (
    <div style={bigButtonStyle} onClick={handleClick}>
      <div className="font-bigButton-text">{text}</div>
    </div>
  );
}
