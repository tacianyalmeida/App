import './Profile.css'

const Profile = ({image, name, location, role}) =>{
return(
    <>
    <img src= {image} alt= {""} />
    <h1>{name}</h1>
    <p>{location}</p>
    <p>{role}</p>
    </>
)
}
export default Profile