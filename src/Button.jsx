function Button() {

    const handleClick = () => console.log("hello");

    const handleClick2 = (name) => console.log(`${"Kunal"} stop clicking meee aaahhhhh ${new Date()}`);  //Parameterized

    /*parameterized with conditions clicking
    let count = 0;
    const handleClick2 = (name) => {
    if (count < 3){
        count++;
        console.log(`You clicked me ${count} time`);
    }
    else console.log(`${"Kunal"} stop clicking meee aaahhhhh}`);
    }*/
    
    const handleClick3 = (e) => e.target.textContent = "Ouch 🤕";

    return(
        <>
        {/* <button className="btn" onClick={() => handleClick2("kunal")}>Click Me 😁</button> */}
        {/* Parameterized */}

        {/* <button className="btn" onClick={(e) => handleClick3(e)}>Click Me 😁</button> */}

        <button className="btn" onDoubleClick={(e) => handleClick3(e)}>Click Me 😁</button>

        {/* <button className="btn" onClick={handleClick}>Click Me 😁</button> */}
        </>
    )
}

export default Button;
