import { selector } from 'recoil';
import { userState } from './atoms';

const authState = selector({
    key: 'authState',
    get: ({ get }) => {
        const user = get(userState);
        if (user) {
            return true;
        } else {
            return false;
        }
    }
});

export default authState;

