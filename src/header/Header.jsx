import "./Header.css"

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
           <span className="headerTitlesmall">SCHOLARSHIP</span> 
           <span className="headerTitlelarge">foundation</span> 
        </div>
        <img className="headerImage"
        src="https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        />
    </div>
  )
}

export default Header