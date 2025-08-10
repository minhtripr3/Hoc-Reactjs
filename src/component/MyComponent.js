// src/components/MyComponent.js
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Pham Minh Trí",
        address: "Khánh Hòa - Việt Nam",
        age: 21
    };

    handleClick = (event) => {

        this.setState({
            address: "Hà Nội - Việt Nam",
            age: Math.floor(Math.random() * 100) + 1 // Cập nhật tuổi khi nút được nhấn

        })


    }
    handleMouseOver(event) {

        console.log(event);
    }

    handeleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(event.target.value);
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form
        console.log(this.state);
        // Bạn có thể thực hiện các hành động khác sau khi submit form

    }
    render() {
        return <div>
            tôi tên là {this.state.name} đến từ {this.state.address} tuổi {this.state.age}
            <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                <input type="text" onChange={(event) => { this.handeleOnchangeInput(event) }} />
                <button> submit</button>
            </form>

        </div>;


    }
}

export default MyComponent;
