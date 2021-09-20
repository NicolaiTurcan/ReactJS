export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name,
});