import PropTypes from 'prop-types'

function List(props){
    // const fruits = [{id: 1,name: "apple", cal: 95},
    //                 {id: 2,name: "banana", cal: 80},
    //                 {id: 3,name: "orange", cal: 45},
    //                 {id: 4,name: "grapes", cal: 78},
    //                 {id: 5,name: "mango", cal: 87}];

    const itemList = props.items;//Dynamically fetched from props passed by App.jsx

    // fruits.sort((a, b) => a.name.localeCompare(b.name)) //Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) //Reverse Alphabetical
    // fruits.sort((a, b) => a.cal - b.cal) //Numeric
    // fruits.sort((a, b) => b.cal - a.cal) //Numeric Reverse

    // const lowCal = fruits.filter(fruit => fruit.cal < 85); //Can do more with comparator operators
    // const highCal = vegies.filter(fruit => fruit.cal > 100); //Can do more with comparator operators1


    const list = itemList.map(fruit=> <li key={fruit.id}>
                                             {fruit.name}: &nbsp;
                                             <b>{fruit.cal}</b></li>);//To display any elements of the list
    return(
        <>
        <h1 className='items_category'>{props.category}</h1>
        <ol className='items_list'>
            {list}
        </ol></>
        
    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name: PropTypes.string,
        cal: PropTypes.number
    }))//TO set the datatypes of the array of elements of array of objects
}

List.defaultProps = {
    category: "Category",
    items: []
}
export default List