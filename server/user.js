const users = [];

const addUser = ({id, name}) => {

    const user = {id, name};
    users.push(user);
    return { user, users };
};

const removeUser = ({ id }) => {
    // const user = { id };
    const removeUserIndex = users.findIndex(element => element.id === id );
    let user;
    if(removeUserIndex > -1){ 
        user = users.splice(removeUserIndex, 1)[0];
    }
    
    return { user ,users };
};

const getRoomData = () => {
    return users;
};

module.exports = { addUser, removeUser };