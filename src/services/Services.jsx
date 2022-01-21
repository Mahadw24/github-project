import axios from 'axios';
const baseUrl = 'https://api.github.com/users';

const fetchUsers = () => {
    return(
        axios.get(`${baseUrl}`)
    )
}

const fetchUser = (search) => {
    return (
        axios.get(`${baseUrl}/${search}`)
    )
}

export {
    fetchUser,
    fetchUsers,
}