import React, { useState } from "react";
import './DisplayInfo.scss';
import logo from '../logo.svg';
// class DisplayInfo extends React.Component {
//     // stateless k có state thì gọi như vậy, còn có state thì gọi là stateful component
//     render() {
//         console.log("call me renderrrrr")
//         // console.log(this.props);
//         // destructuring props
//         const { ListUser } = this.props;
//         // console.log(ListUser);

//         return (
//             <div className="display-info-container">


//                 {true &&
//                     <>

//                         {ListUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={user.age < 21 ? "red" : "green"}>
//                                     <div>Tên : {user.name} </div>
//                                     <div>Tuổi : {user.age} </div>
//                                     <hr></hr>
//                                     <button onClick={() => this.props.handelDeleteUser(user.id)}>Delete</button>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }

//                 <div>
//                     <span>Danh sách người dùng</span>
//                 </div>
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { ListUser } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // this.state={
    //     isShowHideListUser: true
    // }
    const handleShowHideListUser = () => {

        setShowHideListUser(!isShowHideListUser);
    }


    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>

                    {isShowHideListUser === true ? "hide list user" : "show list user"}</span>
            </div>


            {isShowHideListUser &&
                <>

                    {ListUser.map((user) => {
                        return (
                            <div key={user.id} className={user.age < 21 ? "red" : "green"}>
                                <div>Tên : {user.name} </div>
                                <div>Tuổi : {user.age} </div>
                                <hr></hr>
                                <button onClick={() => props.handelDeleteUser(user.id)}>Delete</button>
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

export default DisplayInfo;