import React, {useState} from "react"

function ColorPicker(){

    let [color, setColor] = useState('#000000')

    function handleColor(event){
        setColor(event.target.value)
    }

    return(
        <div className="color_picker">
            <h1>Color Picker</h1>
            <div className="color_display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select a Color: </label>
            <input type="color" value={color} onChange={handleColor} name="" id="" />
        </div>
    )
}

//If we want to do changes in css in embedded javascript we need to give styling as js object [line: 10]
export default ColorPicker