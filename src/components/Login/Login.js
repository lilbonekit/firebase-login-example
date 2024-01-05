import Form from "../Form/Form"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/slices/userSlice"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const dispatch = useDispatch()

    const handleLogin = (email, password) => {
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential)
                const user = userCredential.user
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            });
    }

    return (
        <div>
            <Form
                title='login'
                handleClick={handleLogin}/>
        </div>
    )
}

export default Login