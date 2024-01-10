import "./Button.css";

const Button = ({ id, text, action }) => {
    const HandleAction = (e)=>{
        action(e)
    };

  return <button id={id} onClick={HandleAction}>
    {text}
    </button>;
};

export default Button;
