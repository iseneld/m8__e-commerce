import { Link } from 'react-router-dom';
import UserProperties from './UserProperties';
import { AiOutlineHome } from "react-icons/ai"

const UserDisplay = () => {
    return (
        <div className="article-container">
        <div className='user-container'>

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
                            <div className="icon"><AiOutlineHome size={50} /></div>
                        </div>
                        <UserProperties />
                    </section>
                </section>
              </div>
            </div>

        </div>
    )
}

export default UserDisplay;
