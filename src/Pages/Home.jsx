import { useEffect, useState } from 'react';
import House from '../Components/House';

const Home = ({apartments}) => {
  const apartmentsProp = apartments;

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
  <>
    {/* <div className="background"> */}
      <main>
        <div className='wrapper'>
          <img src='./images/clouds.png' className='clouds' 
          style={{ transform: `translateX(${offsetY * 0.5}px)` }} />
          <House apartments={apartmentsProp}/>
        </div>
      </main>
    {/* </div> */}
  </>);
};

export default Home;