import React from "react";
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
        console.log(this.props);
        // destructuring props
        const { ListUser } = this.props;
        console.log(ListUser);

        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide List User" : "Show list User"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {ListUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age < 18 ? "red" : "green"}>
                                    <div>Tên : {user.name} </div>
                                    <div>Tuổi : {user.age} </div>
                                    <hr></hr>
                                </div>
                            )
                        })}
                    </div>
                }
                <div>
                    <span>Danh sách người dùng</span>
                </div>
            </div>
        )
    }
}
export default DisplayInfo;