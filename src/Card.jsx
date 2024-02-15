import PropTypes from 'prop-types'

function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="Image" />
            <h1>{props.name}</h1>
            <p>{props.about}</p>
            <p>{props.age}</p>
            <p className='ullu'>{props.isUllu ? "YES" : "NO"}</p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    about: PropTypes.string,
    age: PropTypes.number,
    isUllu: PropTypes.bool,
}

Card.defaultProps = {
    img: "Image",
    name: "Guest",
    about: "Nothing",
    age: 0,
    isUllu: false,
}

export default Card;