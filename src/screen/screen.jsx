import "./screen.css";
import Header from "../header/header";
import List from "../list/list";

const Screen = () => {
    return (
        <div className="mainScreen">
            <Header></Header>
            <List></List>
        </div>
    );
}

export default Screen;