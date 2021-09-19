const users = [];

const addUser = ({id, name}) => {

    const user = {id, name};
    users.push(user);

    return { user };
}

const removeUser = ({ id }) => {
    const user = { id };
    const removeUser = users.findIndex(element => element.id === user.id );

    if(removeUser > -1){
        return users.splice(removeUser, 1)[0];
    } 
}

module.exports = { addUser, removeUser };