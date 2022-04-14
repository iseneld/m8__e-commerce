import { Link } from 'react-router-dom';
import PropertyList from './PropertyList';

const UserProperties = () => {
    return (
        <>
            <section className="user-properties">
                <PropertyList />
            </section>
        </>
    )
}

export default UserProperties;
