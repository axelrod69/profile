import { useState, useEffect } from "react";
import axios from "axios";
import "./list.css";

const List = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=50").then(
            res => {
                console.log(res.data);
                setProfile(res.data.results);
                console.log(profile);
            }
        )
    }, []);

    return (
        <div className="main">
            {/*This is where the error gets thrown*/}
            {profile.map((key, value) => <div className="listCard">
                <div className="userName">
                    <div style={{ margin: "10px 0 10px 20px" }}>Username : {profile[value].login.username}</div>
                </div>
                <div className="details">
                    <div className="topDetails">
                        <div className="nameAndEmail">
                            <div style={{ fontSize: "25px", fontWeight: "bold" }}>{`${profile[value].name.title} ${profile[value].name.first} ${profile[value].name.last}`}</div>
                            <div style={{ fontSize: "20px", color: "rgb(128, 128, 112)", marginTop: "20px" }}>Email: {profile[value].email}</div>
                        </div>
                        <div className="picture">
                            <div className="imageBox">
                                <img src={profile[value].picture.large} width="100%" height="100%"></img>
                            </div>
                        </div>
                    </div>
                    <div className="bottomDetails">
                        <div className="nationality">
                            <div style={{ fontWeight: "bold", fontSize: "22px" }}>User for {profile[value].dob.age - profile[value].registered.age} years</div>
                            <div style={{ fontSize: "20px", marginBottom: "8px" }}>Age: {profile[value].dob.age}</div>
                            <div style={{ fontSize: "20px", marginBottom: "8px" }}>Nationality: {profile[value].nat}</div>
                            <div style={{ fontSize: "18px", marginBottom: "8px" }}>#: {profile[value].cell}</div>
                        </div>
                        <div className="address">
                            <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>Address:</div>
                            <div>{`${profile[value].location.street.number} ${profile[value].location.street.name},`}</div>
                            <div>{`${profile[value].location.city}, ${profile[value].location.state}, ${profile[value].location.country},`}</div>
                            <div>{profile[value].location.postcode}</div>
                        </div>
                    </div>
                </div>
            </div>
            )};
        </div>
    );
}

export default List;