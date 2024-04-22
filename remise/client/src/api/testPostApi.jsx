import React from 'react';
import {useState, useEffect} from 'react'

//GET
function App(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
   return (
    <div>
      <h1>Test</h1>
      <ul style={{textAlign:'left'}}>
        {posts.map(item => (
          <li key={item.id}> PostId: {item.postId} <br></br>
                             Id: {item.id}  <br></br>
                             Name: {item.name} <br></br>
                             Email: {item.email} <br></br>
                             Body: {item.body} <br></br>
                             <br></br>
          
          </li>
        ))}
      </ul>
    
    </div>
  );
}
export default App;