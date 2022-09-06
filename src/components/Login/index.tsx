import * as C from './styles';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { changeUser } from '../../Redux/userSlice.js';

export const Login = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(changeUser(name))
    };

    return (
        <C.Container>
            <h1>Login:</h1>
            <input type="text" placeholder='nome' onChange={(p) => setName(p.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </C.Container>
    );
}
