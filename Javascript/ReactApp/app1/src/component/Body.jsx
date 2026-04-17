import avatar from "../assets/Images/avatar.svg";
function Body(){
    return(
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={avatar} classNameName="d-block w-100" alt="avatar"/>
    </div>
    
  </div>
</div>
    )
}
export default Body;