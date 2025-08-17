// src/components/MyComponent.js
import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        ListUser: [
            { id: 1, name: "Hoidankhanhhoa1", age: 19 },
            { id: 2, name: "Hoidankhanhhoa2", age: 20 },
            { id: 3, name: "Hoidankhanhhoa3", age: 21 }

        ]

    }
    handleAddNewUser = (userOject) => {
        console.log("check handleAddNewUser", userOject);
        this.setState({
            ListUser: [userOject, ...this.state.ListUser,]
        })
    }
    handelDeleteUser = (userId) => {
        let ListUserClone = this.state.ListUser;
        ListUserClone = ListUserClone.filter(item => item.id !== userId);
        this.setState({
            ListUser: ListUserClone
        })
    }

    render() {

        return (
            <>
                <div className="a">
                    <AddUserInfo
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br />
                    <DisplayInfo
                        ListUser={this.state.ListUser}
                        handelDeleteUser={this.handelDeleteUser}
                    ></DisplayInfo>

                </div>

            </>
        )




    }
}

export default MyComponent;
