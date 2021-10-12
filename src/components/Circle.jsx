function Circle({buttonText, circleColor}) {
    return (

        <div className="circle" style={{
            background: circleColor,
        }}>
            <button>{buttonText}</button>
        </div>

    )
};

export default Circle;