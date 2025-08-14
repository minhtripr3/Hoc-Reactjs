import React from "react";
class DisplayInfo extends React.Component {


    render() {
        console.log(this.props);
        // destructuring props
        const { ListUser } = this.props;
        console.log(ListUser);

        return (
            <div>
                {ListUser.map((user) => {
                    return (
                        <div key={user.id}>

                            <div>Tên : {user.name} </div>
                            <div>Tuổi : {user.age} </div>
                            <hr></hr>

                        </div>
                    )
                })}
            </div>
            // <div>
            //     <div>Tên : {name} </div>
            //     <div>Tuổi : {age} </div>
            // </div>
        )
    }
}
export default DisplayInfo;