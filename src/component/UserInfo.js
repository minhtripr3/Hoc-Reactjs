import React from 'react';
import MyComponent from './MyComponent';
class UserInfo extends React.Component {
    state = {
        name: "Pham Minh Trí",
        address: "Khánh Hòa - Việt Nam",
        age: 21
    };



    handeleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(event.target.value);
    }
    handeleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
        console.log(event.target.value);
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form
        console.log(this.state);
        // Bạn có thể thực hiện các hành động khác sau khi submit form

    }
    render() {
        return (
            <div>
                tôi tên là {this.state.name} đến từ {this.state.address} tuổi {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>tên :</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => { this.handeleOnchangeInput(event) }} />
                    <label>tuổi :</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.handeleOnchangeAge(event) }} />
                    <button> submit</button>
                </form>

            </div>

        )
    }
}
export default UserInfo;    