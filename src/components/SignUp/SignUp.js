import { useDispatch } from "react-redux"
import Form from "../Form/Form"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice"

const SignUp = () => {
    const dispatch = useDispatch()

    const handleSignUp = (email, password) => {
        const auth = getAuth()
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
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