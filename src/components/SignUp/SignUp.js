import { useDispatch } from "react-redux"
import Form from "../Form/Form"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice"

const SignUp = () => {
    const dispatch = useDispatch()

    const handleSignUp = (email, password) => {
        const auth = getAuth()
        // console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => console.log(res))
            .catch(err => console.error(err))
            
    }

    return (
        <div>
            <Form
                title='SignUp'
                handleClick={() => handleSignUp()}
            />
        </div>
    )
}

export default SignUp