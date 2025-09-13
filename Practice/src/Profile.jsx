function Profile(){
    const name="Tejasathvika"
    const age=18
    const isStudent=true
    return (
        <div>
            <p>Iam {name}</p>
            <p>My age is {age}</p>
            <p>{isStudent===true?"Iam a student":"Not a student"}</p>
        </div>
    )
}
export default Profile;