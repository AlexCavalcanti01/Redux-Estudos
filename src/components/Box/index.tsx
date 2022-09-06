import * as C from './styles';

import { User } from "../User"
import { Logout } from "../Logout";
import { Login } from "../Login";
import { Box4 } from "../Box-4";

export const Box = () => {
    return (
        <C.Container>
            <Box4 />
            <Login />
            <User />
            <Logout />
        </C.Container>
    );
}