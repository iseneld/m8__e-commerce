import { Link } from 'react-router-dom';
import UserProperties from './UserProperties';

const UserDisplay = () => {
    return (
        <>
            <div className="apt-display">
                <section className="profile-pages">
                    <section className="about-user">
                        <div className="profile-pic">

                        </div>
                        <h1 className="user-title">User name</h1>
                        <div className="line"></div>
                        <ul className="user-list">
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
