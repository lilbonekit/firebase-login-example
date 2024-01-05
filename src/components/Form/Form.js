import { useState } from "react"

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <form>
            <input 
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='email'
                required
            />
            <input 
                type='password'
                value={pass}
                onChange={e => setPass(e.target.value)}
                placeholder='password'
                required
            />
            <button
                onClick={(e) => {
                    e.preventDefault()
                    handleClick(email, pass)
                }}
            >
                {title}
            </button>
        </form>
    )
}

export default Form