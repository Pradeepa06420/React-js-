import {Link}from "react-router-dom";
function Home() {
    const posts=[
        {
            id:1,
            title:"REACT INTRODUCTION",
            content:
            "React in javascript lib used to build fast and interactive user interface"
        },
    ];
  return (
       <div>
        <h1>MINI BLOG -HOME</h1>
        <p>Select a blog post to view the full article</p>
        {posts.map((post)=>(
            <div key={post.id}
            style={{
                padding:"20px",
                marginBottom:"20px",
                borderRadius:"12px",
                //Card background 
                background:"linear-gradient(135deg,#e8f0ff,#f2f7ff)",
                border:"1px solid #cdd9f0",
                boxShadow:"0 2px 8px rgba(0,0,0,0.1)",
            }}>
                <h2 style={{margin:"0 0 10px 0",color:"#1a3d7c"}}>
                    {post.title}
                    </h2>
                    <Link
                     to={`/post/${post.id}`}>
                        Read Full Post---
                        </Link>
            </div>
        ))}
       </div>

  )
}
export default Home;
