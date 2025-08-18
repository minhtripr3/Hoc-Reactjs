import React, { useState } from "react";
import MyComponent from './MyComponent';
// class AddUserInfo extends React.Component {
//     state = {
//         name: "Pham Minh Trí",
//         address: "Khánh Hòa - Việt Nam",
//         age: 21
//     };



//     handeleOnchangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//         console.log(event.target.value);
//     }
//     handeleOnchangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//         console.log(event.target.value);
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault(); // Ngăn chặn hành động mặc định của form
//         console.log(this.state);
//         // Bạn có thể thực hiện các hành động khác sau khi submit form
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 1000 + 1) + 'random',
//             name: this.state.name,
//             age: this.state.age
//         });

//     }
//     render() {
//         return (
//             <div>
//                 tôi tên là {this.state.name} đến từ {this.state.address} tuổi {this.state.age}
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <label>tên :</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => { this.handeleOnchangeInput(event) }} />
//                     <label>tuổi :</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => { this.handeleOnchangeAge(event) }} />
//                     <button> submit</button>
//                 </form>

//             </div>

//         )
//     }
// }

const AddUserInfo = (props) => {
    console.log("check props", props);
    const [name, setName] = useState("Pham Minh Trí");
    const [address, setAddress] = useState("Khánh Hòa - Việt Nam");
    const [age, setAge] = useState(21);

    const handleOnSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 1000 + 1) + "random",
            name: name,
            age: age,
        });
    };

    const handeleOnchangeInput = (event) => {
        setName(event.target.value);
    }
    const handeleOnchangeAge = (event) => {
        setAge(event.target.value);
    }
    return (
        <div>
            tôi tên là {name} đến từ {address} tuổi {age}
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>tên :</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => { handeleOnchangeInput(event) }} />
                <label>tuổi :</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => { handeleOnchangeAge(event) }} />
                <button> submit</button>
            </form>

        </div>

    )

}
export default AddUserInfo;    