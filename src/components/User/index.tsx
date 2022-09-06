import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice.js';

import { Container} from './styles';

export const User = () => {
    const {name} = useSelector(selectUser)
    
    return (
        <Container>
            <div>
                <h1>Usuário:{name}</h1>
            </div>
        </Container>
    );
}