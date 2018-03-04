import React from 'react'
import PropTypes from 'prop-types'

class Togglable extends React.Component {

    static propTypes = {
        buttonLabel: PropTypes.string.isRequired
    }
    

    constructor(props) {
        console.log('luodaan togglen propsit ja statet')
        super(props)
        this.state = {
            visible: false
        }
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible })
    }

    

    render() {

        const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
        const showWhenVisible = { display: this.state.visible ? '' : 'none' }

        return (
            <div>
                <div style={hideWhenVisible}>

                    <button onClick={this.toggleVisibility}>{this.props.buttonLabel}</button>
                </div>
                <div style={showWhenVisible}>
                    {this.props.children}
                    <button onClick={this.toggleVisibility}>peruuta</button>
                </div>
            </div>
        )
    }
}


export default Togglable;  