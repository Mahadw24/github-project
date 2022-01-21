import React,{ useState,useEffect } from 'react';
import Header from './Components/Header';
import Input from './Components/Input'
import{ fetchUser,fetchUsers }from './services/Services'
import List from './Components/List'
import Loading from './Components/Loading';

const App = () => {
  const [users,setUsers] = useState();
  const [loading,setLoading] = useState(true);
  const [search,setSearch] = useState('');

  useEffect(() => {
    if (search) {
      return;
    }
    fetchUsers().then
    (
      (res) => 
      {
        setUsers(res.data)
        setLoading(false)
      }
    )
    .catch
    (
      (err) => console.log({...err})
    )
  },[search])


  useEffect(() => {
    if(search === '') 
    {
      return null;
    }
    const id = setTimeout(() => {
      fetchUser(search).then((res) => 
      {
        setUsers([res.data])
        console.log(res.data)
      })
    },1000)
    return (
      () => {
        clearTimeout(id);
      }
    )
  },[search])

  if(loading === false) {
      return (
      <div>
        <Header/>
        <Input setSearch={setSearch}/>
        <List data={users}/>
      </div>
      )
    }
    else{
    return (
        <div>
          <Loading/>
        </div>
    )
    }
};

export default App;