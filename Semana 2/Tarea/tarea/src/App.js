import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import CardHeader from './components/CardHeader/CardHeader';
import profilePhoto from '../src/assets/profile-photo.jpg';
import background from '../src/assets/background.jpeg';
import CardBody from './components/CardBody/CardBody';
import UserPresentation from './components/UserPresentation/UserPresentation';
import Topics from './components/Topics/Topics';
import Followers from './components/Followers/Followers';
import FollowButton from './components/FollowButton/FollowButton';

function App() {
  return (
    <div className="App">
      <div id="container">
        <Card>

          <CardHeader
            background={background}
            profilePhoto={profilePhoto}
          />

          <CardBody>

            <UserPresentation
              userName="Nick Chapsas"
              userProfile="C# & .NET Educator | Dometrain.com | Youtube Content Creator"
            />

            <Topics />

            <Followers />

            <FollowButton />

          </CardBody>

        </Card>

      </div>
    </div>
  );
}

export default App;
