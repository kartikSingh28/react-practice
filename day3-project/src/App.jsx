import { useState } from "react";
import { PostComponent } from "./Post";

function App() {

  // adding post logic

  const [posts,setPosts]=useState([]);

  const PostComponents=posts.map(post=> <PostComponent
    name={post.name} 
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
    />)
  function addPost() {
    setPosts([...posts,{
      name:"Kartik",
      subtitle:"500 followers",
      time:"20m ago",
      image:"pfp.png",
      description:"i admit it another hoe got me finished."
    }])
    
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh", padding: 20 }}>
      <button onClick={addPost}>Add Post</button>

      <div style={{
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20

      }}
      >
        {PostComponents}

        <div/>
      </div>
    </div>
  );
}

export default App;
