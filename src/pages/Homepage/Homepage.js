import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate('/login')
	}, [navigate])
	return (
		<div>Homepage</div>
	)
}

export default Homepage