import { Link } from 'react-router-dom';
import UserProperties from './UserProperties';

const UserDisplay = () => {
    return (
        <>
            <div className="apt-display">
                <section className="profile-pages">
                    <section className="about-user">
                        <img src={require("../Styles/css-content/lgh1.jpeg")} />
                        <h1>User name</h1>
                        <div className="line"></div>
                        <ul>
                            <li>User since:</li>
                            <li>Properties owned:</li>
                            <li>Properties sold:</li>
                        </ul>
                    </section>
                    <section className="user-content">
                        <UserProperties />
                    </section>
                </section>

            </div>

        </>
    )
}

export default UserDisplay;
