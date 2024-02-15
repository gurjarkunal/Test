import PropTypes from 'prop-types'

function UserGreeting(props){
    return(props.isLoggedIn ? <h1>Welcome {props.username}</h1> : <h1>Please Login to Continue</h1>)
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    username: "Guest"
}

export default UserGreeting;