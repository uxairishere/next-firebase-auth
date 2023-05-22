import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthUserContext';

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { user, login } = useAuth()


    const handleLogin = async (e:any) => {
        e.preventDefault();

        console.log(user)
        try {
            await login(email, password)
            router.push('/dashboard')
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                    className='dark:text-black'
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}
