import { Link } from "react-router-dom"
import SignUp from "../../components/SignUp/SignUp"

const Registerpage = () => {
  return (
    <div>
        <h1>Register</h1>
        <SignUp/>
        <p>Already have an account? <Link to='/login'>login</Link></p>
    </div>
  )
}

export default Registerpage
