import React from 'react';

class Notification extends React.Component {

   
    render() {
        if (this.props.message === null) {
            return null
        }
        return (
            <div className={this.props.className}>
                {this.props.message}
            </div>
        )
    }
}

export default  Notification 