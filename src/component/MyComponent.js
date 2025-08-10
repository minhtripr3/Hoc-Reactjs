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
    render() {
        return <div>
            tôi tên là {this.state.name} đến từ {this.state.address} tuổi {this.state.age}
            <button onClick={(event) => { this.handleClick(event) }}>click vào đây</button>
            <button onMouseOver={this.handleMouseOver}>hover me</button>
        </div>;


    }
}

export default MyComponent;
