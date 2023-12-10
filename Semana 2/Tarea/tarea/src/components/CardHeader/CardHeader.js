import './cardHeader.css';

function CardHeader({background, profilePhoto}) {
    return (
        <div card="header">
            <img src={profilePhoto} alt="Foto de perfil" class="profile-photo" />
            <img class="background-image" src={background} alt="Foto de fondo" />
        </div>
    );
  }
  
export default CardHeader;