import { Link } from 'react-router-dom';
import UserProperties from './UserProperties';

const UserDisplay = () => {
    return (
        <div className="article-container">
            <div className="apt-display">
                <section className="profile-pages">
                    <section className="about-user">
                        <div className="profile-pic">

                        </div>
                        <h1 className="user-title">Username</h1>
                        <div className="line"></div>
                        <ul className="user-list">
                            <li>User since:</li>
                            <li>Properties owned:</li>
                            <li>Properties sold:</li>
                        </ul>
                    </section>
                    <section className="user-content">
                        <div className="title-icon">
                            <h1 className="user-props-title">Your Properties</h1>
                            <div className="icon"></div>
                        </div>
                        <UserProperties />
                    </section>
                </section>

            </div>

        </div>
    )
}

export default UserDisplay;
