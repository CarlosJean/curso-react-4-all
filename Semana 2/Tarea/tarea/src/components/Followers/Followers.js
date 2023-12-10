import './followers.css';
import follower1 from '../../assets/follower_1.jpg';
import follower2 from '../../assets/follower_2.jpg';

function Followers() {

    return (
        <div class="followers">
            <div class="images">
                <img src={follower1} alt="First follower" class="first-follower" />
                <img src={follower2} alt="Second follower" class="second-follower" />
            </div>
            <p class="names">
                Seguido por Juan Valentin, Junior Felix y 15 personas más que lo siguen
            </p>
        </div>
    );
}

export default Followers;