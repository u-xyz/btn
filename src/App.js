import './App.css';
import Btn from "./components/Btn";
import {useState} from "react";

function App() {

    const [clicked, setClicked] = useState(false);

    const onBtnClick = (e) => {
        e.preventDefault();
        actionToPerform();
    }

    const formSubmit = (e) => {
        e.preventDefault();
        actionToPerform();
    }

    const actionToPerform = () => {
        setClicked(true)
        setTimeout(() => {
            setClicked(false);
        }, 2000);
    }

    return (
        <div className="container">
            <form onSubmit={formSubmit}>
                <div className="mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <Btn
                    iconOnly={false}
                    btnType={'primary'}
                    clickHandler={onBtnClick}
                    showLoader={clicked}
                />
            </form>
        </div>
    );
}

export default App;
