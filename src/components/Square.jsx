function Square({buttonText, squareColor}) {
    return (

        <div className="square" style={{
            background: squareColor
        }}>
            <button>{buttonText}</button>
        </div>

    )
};

export default Square;