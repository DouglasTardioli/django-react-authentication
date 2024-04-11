import { useState } from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"

function Form({ route, method }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method === "login" ? "Login" : "Criar Conta"

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center h-screen w-full">
            <div className="md:w-96 md:h-96 h-48 w-48 items-center justify-center flex-col bg-zinc-700 shadow-lg p-4 rounded-lg flex space-y-4">
                <h1 className="text-3xl">{name}</h1>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Nome: "
                    className="p-1 pl-3 w-full rounded-md text-zinc-100/50 border-none bg-zinc-800 placeholder:text-zinc-100/50"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha: "
                    className="p-1 pl-3 w-full rounded-md placeholder:pl-1 text-zinc-100/50 border-none bg-zinc-800 placeholder:text-zinc-100/50"
                />
                <button type="submit" className="w-full  rounded-md p-1 hover:bg-zinc-600/50 bg-zinc-600 transition-all">{name}</button>
            </div>
        </form>
    )
}

export default Form