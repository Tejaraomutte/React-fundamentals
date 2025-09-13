function BlogPost(post){
    const authorStyle={
        fontsize:'20px',
        fontweight:'lighter',
        color:'black'
     }
     const titleStyle={
        fontsize:'20px',
        fontweight:'lighter',
        color:'black'
     }
     const descriptionStyle={
        fontsize:'20px',
        fontweight:'lighter',
        color:'black'
     }
    return(
        <div className="container">
            <p style={authorStyle}>Author:{post.author}</p>
            <p style={titleStyle}>Title:{post.title}</p>
            <p style={descriptionStyle}>Description:{post.description}</p>
        </div>
    )
}
export default BlogPost;
