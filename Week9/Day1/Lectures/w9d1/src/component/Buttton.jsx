

const Button = (props) => {
    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <button /*onClick={handleClick}*/>Add</button>
    );
};

export default Button;