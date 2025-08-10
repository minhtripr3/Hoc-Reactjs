import React from "react";
class DisplayInfo extends React.Component {


    render() {
        console.log(this.props);
        // destructuring props
        const { name, age } = this.props;

        return (
            <div>
                <div>Tên : {name} </div>
                <div>Tuổi : {age} </div>
            </div>
        )
    }
}
export default DisplayInfo;