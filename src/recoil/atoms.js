import { atom } from 'recoil';
import auth_service from '../auth/auth_service';

const userState = atom({
    key: 'userState',
    default: auth_service.getCurrentUser()
});

export { userState };