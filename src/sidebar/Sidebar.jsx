import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img 
            src="data:image/jpeg;base64,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"
            alt=""
            />
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae sequi eveniet
             totam voluptatem harum in quaerat, unde, vel ratione enim consequatur velit 
             facere dolore, fuga fugiat a minima animi.
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Need to add things here</span>
        <ul className="sidebarList">
                <li className="sidebarListitem">
                <li className="sidebarListitem">empty</li>
                <li className="sidebarListitem">empty</li>
                <li className="sidebarListitem">empty</li>
                <li className="sidebarListitem">empty</li>
                <li className="sidebarListitem">empty</li>
                </li>
        </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">You can follow us here</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-solid fa-file-pdf"></i>
            <i className="sidebarIcon fa-solid fa-paper-plane"></i>
            <i className="sidebarIcon fa-solid fa-location-pin"></i>


            </div>
        </div>
    </div>
  )
}

export default Sidebar