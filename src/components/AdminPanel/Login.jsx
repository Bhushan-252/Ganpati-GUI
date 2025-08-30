import React, {useEffect} from 'react'
import {useState} from 'react'
import {useLoginMutation} from '../../services/login/login.js'
import {useDispatch} from "react-redux";
import {setLogin, setToken} from "../../features/Login/loginSlice.js";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const [login, {data, error, isLoading, isSuccess}] = useLoginMutation()

    function handleLogin(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        login(formData);
    }

    useEffect(() => {
        if (!isLoading && isSuccess) {
            // dispatch(setToken(data?.accessToken))
            dispatch(setLogin(true))
        }
    }, [data, isSuccess, isLoading, dispatch])

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

                    <form onSubmit={e => handleLogin(e)} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div className="mt-6 text-sm text-center">
                        {error && (
                            <p className="text-red-500 text-xl">Invalid credentials or server error.</p>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
