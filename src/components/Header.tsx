import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()

  return (
    <div className="container flex flex-row justify-end mb-2">
      <Link to="/" className={`py-4 px-5 bg-transparent hover:bg-transparent-grey transition-colors text-sm text-white font-medium ${location.pathname === "/" ? "bg-transparent-grey-active" : ""}`}>Home</Link>
      <Link to="/past-work" className={`py-4 px-5 bg-transparent hover:bg-transparent-grey transition-colors text-sm text-white font-medium ${location.pathname === "/past-work" ? "bg-transparent-grey-active" : ""}`}>Past work</Link>
    </div>
  )
}

export default Header
