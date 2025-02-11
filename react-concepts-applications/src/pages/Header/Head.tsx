import { FaReact} from "react-icons/fa";

const Header: React.FC =()=>{
    return(
        <div>
            <div className="h-screen bg-gray-450">
            {/* Header */}
            <header className="bg-blue-200 text-blue-900 py-4 shadow">
                <div className="container mx-auto px-6 flex items-center">
                  <FaReact className="mr-2 text-magenta-600 text-7xl  " />
                 <span className="text-4xl font-bold tracking-tight">ReactJS</span>
                </div>
                <div >
                    <a href="">Profile</a>
                    <a href="">Saved</a>
                    <a href="">Logout</a>
                </div>
            </header>
            </div>
        </div>
    )
}
export default Header;