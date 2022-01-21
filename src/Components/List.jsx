import React from 'react';
import '../styles/list.css'
import Items from './Items'

 const List = ({data}) => {
   return (
     <>
     <div className="list">
     {
       data.map((user) => {
         const {login,html_url,avatar_url} = user;
         return (
           <Items  avatar_url={avatar_url} html_url={html_url} login={login} />
           )
          })
        }
        </div>
    </>
   );
};

export default List;