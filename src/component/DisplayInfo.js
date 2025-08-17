import React from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg';
class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        // console.log(this.props);
        // destructuring props
        const { ListUser } = this.props;
        // console.log(ListUser);

        return (
            <div className="display-info-container">
                {/* <img src={logo} alt="logo" /> */}
                <h2>Danh sách người dùng</h2>

                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide List User" : "Show list User"}
                    </span>
                </div>

                {this.state.isShowListUser &&
                    <>
                        {ListUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age < 21 ? "red" : "green"}>
                                    <div>Tên : {user.name} </div>
                                    <div>Tuổi : {user.age} </div>
                                    <hr></hr>
                                    <button onClick={() => this.props.handelDeleteUser(user.id)}>Delete</button>
                                </div>
                            )
                        })}
                    </>
                }

                <div>
                    <span>Danh sách người dùng</span>
                </div>
            </div>
        )
    }
}
export default DisplayInfo;