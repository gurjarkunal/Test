function Profile() {

  const imageUrl = './src/assets/prof.jpg'
  const handleClick = () => console.log("kunal");//Button
  const handleEvent = (e) => e.target.style.display = "none"
  return (
    <>
    {/* <img className="prof" onClick={handleClick} src={imageUrl} alt="" /> */}
    <img className="prof" onClick={(e) => handleEvent(e)} src={imageUrl} alt="" />
    
    </>
    

  );
}

export default Profile;
