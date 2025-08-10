// src/components/MyComponent.js
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Pham Minh Trí",
        address: "Khánh Hòa - Việt Nam",
        age: 21
    };
    render() {
        return <div> tôi tên là {this.state.name} đến từ {this.state.address} tuổi {this.state.age}</div>;
    }
}

export default MyComponent;
