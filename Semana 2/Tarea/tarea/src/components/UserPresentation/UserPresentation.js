import './userPresentation.css'

function UserPresentation({ userName, userProfile }) {
    return (
        <>
            <p class="user-name">{userName}</p>
            <p class="user-profile">{userProfile}</p>
        </>
    );
}

export default UserPresentation;