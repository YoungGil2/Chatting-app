const users = [];

const addUser = ({id, name}) => {

    const user = {id, name};
    users.push(user);
    return { user, users };
};

const removeUser = ({ id }) => {
    const user = { id };
    const removeUserIndex = users.findIndex(element => element.id === user.id );
    let removeUser;
    if(removeUserIndex > -1){
        removeUser = users.splice(removeUserIndex, 1)[0];
    } 
    return { removeUser ,users };
};

const getRoomData = () => {
    return users;
};

module.exports = { addUser, removeUser };