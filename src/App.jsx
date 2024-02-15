import UserGreeting from "./UserGreeting";
import Card from "./Card";
import List from "./List";
import Button from "./Button";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import OnChange from "./OnChange";
import ColorPicker from "./ColorPicker";
import UpdaterFunction from "./UpdaterFunction";
import UpdateObject from "./UpdateObjects";
import UpdateArray from "./UpdateArray";
import UpdateArrayOfObjects from "./UpdateArrayOfObjects";
import ToDoList from "./ToDoList";
import ProfilePic from "./ProfilePic";
import prof from "./assets/prof.jpg";
import prof2 from "./assets/love.jpg";
import prof3 from "./assets/hanuman.jpg";
import prof4 from "./assets/rat.jpg";
import prof5 from "./assets/deadlift.jpg";
import prof6 from "./assets/captain.jpg";
import prof7 from "./assets/car.jpg";

function App() {

  return(<ToDoList/>)

  /*Update an Array of Object in React
  return(<UpdateArrayOfObjects/>)*/

  /*Update an Array in state in React
  return(<UpdateArray/>)*/

  /*Update state of an Object in React
  return(
    <UpdateObject/>
  )*/

  /*Counter using updater function
  return(<UpdaterFunction/>)*/

  /*Color Picker by useState() in React
  return(<ColorPicker/>)*/

  /*On change state in React
  return(<OnChange/>)*/

  /*Counter Program using useState() hook
  return <Counter />;*/

  /*useState() in React
  return(
    <MyComponent/>
  )*/

  /*More Events In React
  return(
    <>
    <ProfilePic/>
    </>
  )*/

  /* Button and Event in React
  return(
    <>
    <Button/>
    </>
  )*/

  /* Render Lists in React
  const fruits = [
    { id: 1, name: "Apple", cal: 95 },
    { id: 2, name: "Banana", cal: 80 },
    { id: 3, name: "Orange", cal: 45 },
    { id: 4, name: "Grapes", cal: 78 },
    { id: 5, name: "Mango", cal: 87 },
  ]; // To send the data dynamically to the List of List.jsx

  const vegies = [
    { id: 6, name: "Loki", cal: 149 },
    { id: 7, name: "Baingan", cal: 125 },
    { id: 8, name: "Bhindi", cal: 189 },
    { id: 9, name: "Aaloo", cal: 100 },
    { id: 10, name: "Tamatar", cal: 187 },
  ]; // To send the data dynamically to the List of List.jsx
  const fastFood = [
    {id: 11, name: "Burger", cal: 200}
  ]; // To send the data dynamically to the List of List.jsx
  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruites" /> : null}
      {vegies.length > 0 && <List items={vegies} category="Vegetables" />}
      {fastFood.length > 0 && <List items={fastFood} category="FastFood" />}
    </>
  );*/

  /*Conditional Rendering with props
  return(
    <>
    <UserGreeting isLoggedIn = {true} username = "Kunal"/>
    <UserGreeting isLoggedIn = {true}/>
    </>
  )*/

  /* Card In React with props
    return (
    <>
      <Card
        img={prof}
        name="Kunal"
        about="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus dolorem, sunt ad rem quam."
        age={21}
       />

      <Card
        img={prof2}
        name="Kratzz"
        about="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus dolorem, sunt ad rem quam."
        isUllu = {true}
        age={20}
      />

      <Card
        img={prof3}
        name="khush"
        about="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus dolorem, sunt ad rem quam."
        age={20}
      />

      <Card
        img={prof4}
        name="Shanks"
        about="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus dolorem, sunt ad rem quam."
        age={20}
      />

      <Card
        img={prof7}
        name="Piu"
        about="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus dolorem, sunt ad rem quam."
        age={20}
      />

      <Card
        img={prof6}
        name="Deepak"
        about="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus dolorem, sunt ad rem quam."
        age={20}
      />
      <Card/>
    </>
  );
   */
}

export default App;
