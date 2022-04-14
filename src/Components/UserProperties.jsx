import { Link } from 'react-router-dom';
import PropertyList from './PropertyList';

const UserProperties = () => {
    return (
        <>
            <div className="apt-display">
                <section className="user-properties">
                    <section className="title-icon">
                        <h1>User Properties</h1>
                        <div className="store-icon"></div>
                    </section>
                    <section className="property-display">
                        <PropertyList />
                    </section>
                </section>

            </div>

        </>
    )
}

export default UserProperties;
