
// creating a component
// const UserCard = ({image,fullName}) => {
//     return(
//         <div>
//             <img src={image} alt={`${fullName} profile`}/>
//             <h3>{fullName}</h3>
            
//         </div>
//     )

// }
// export default UserCard;

function UserCard({image , fullName,age,gender,email}){
    return(
        <div>
            <img src={image} alt={`${fullName} profile`}/>
            <h3>{fullName}</h3>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{email}</p>
        </div>
    )
}
export default UserCard;