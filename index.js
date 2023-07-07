function App (){

    const [expression, setExpression] = React.useState("");

    const display = () => {
        setExpression(prev => prev + symbol)
    };

    return (
        <div className="container">
            <div className="grid">
                <div className="dis">
                <input type="text" value={expression} placeholder="0" disabled />
                </div>
                <div onClick={display} className="dis"></div>
                <div onClick={display} className="padButton AC tomato">AC</div>
                <div onClick={display} className="padButton C tomato">C</div>
                <div onClick={() => display ("/")} className="padButton div">/</div>
                <div onClick={() => display ("x")} className="padButton times">x</div>
                <div onClick={() => display ("7")} className="padButton seven dark-gray">7</div>
                <div onClick={() => display ("8")} className="padButton eight dark-gray">8</div>
                <div onClick={() => display ("9")} className="padButton nine dark-gray">9</div>
                <div onClick={() => display ("-")} className="padButton minus">-</div>
                <div onClick={() => display ("4")} className="padButton four dark-gray">4</div>
                <div onClick={() => display ("5")} className="padButton five dark-gray">5</div>
                <div onClick={() => display ("6")} className="padButton six dark-gray">6</div>
                <div onClick={() => display ("+")} className="padButton plus">+</div>
                <div onClick={() => display ("1")} className="padButton one dark-gray">1</div>
                <div onClick={() => display ("2")} className="padButton two dark-gray">2</div>
                <div onClick={() => display ("3")} className="padButton three dark-gray">3</div>
                <div onClick={display} className="padButton equal blue">=</div>
                <div onClick={() => display ("0")} className="padButton zero dark-gray">0</div>
                <div onClick={() => display (".")} className="padButton dot dark-gray">.</div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));