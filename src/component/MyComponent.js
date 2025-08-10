// src/components/MyComponent.js
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {


    render() {
        const myArray = ['1', '2', '3', '4', '5'];
        return <div>
            <UserInfo />
            <br />
            <DisplayInfo name="Hoidankhanhhoa" age="19"></DisplayInfo>
            <hr></hr>
            <DisplayInfo name="Hoidankhanhhoa1" age="20" myArray={myArray}></DisplayInfo>
        </div>;


    }
}

export default MyComponent;
