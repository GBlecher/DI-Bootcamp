 const User =  (props) => {
    console.log(props);
    const {id,name,email,username} = props.info
 return(
     <>
        <div>
        <img src={`https://robohash.org/${id}?size=150x150 `}/>
        <h1>Name:  {name} </h1>
        <p>Email: {email}</p>
        <p>Username: {username} </p>
        
        </div>
    </>
    )
}
export default User