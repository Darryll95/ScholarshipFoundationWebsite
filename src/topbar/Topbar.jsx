import "./Topbar.css"

function Topbar() {
  return (
    //this is topbar 
    <div className='top'>
        
        <div className="topLeft">
            <i className="topIcon fa-solid fa-file-pdf"></i>
            <i className="topIcon fa-solid fa-paper-plane"></i>
            <i className="topIcon fa-solid fa-location-pin"></i>

        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListitem">Home</li>
                <li className="topListitem">About</li>
                <li className="topListitem">Donate</li>
                <li className="topListitem">Contact</li>
                <li className="topListitem">SignUp</li>
            </ul>
        </div>

        <div className="topRight">
        <img 
            className="topImage"
            src="https://images.pexels.com/photos/12871449/pexels-photo-12871449.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            />
            <i class="topSearchicon fa-solid fa-magnifying-glass"></i>

        </div>
    </div>
  )
}

export default Topbar