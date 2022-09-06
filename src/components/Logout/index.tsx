import * as C from './styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/userSlice.js';

export const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }
    
    return (
        <C.Container>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </C.Container>
    );
}