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
        <div className='parallax-wrapper'>
        <img src='./images/buttAngel.png' className='clouds4' 
          style={{ transform: `translateX(${offsetY * -5.2}px)` }} />
          <img src='./images/ufo.png' className='clouds' 
          style={{ transform: `translateX(${offsetY * -3.2}px)` }} />
          <img src='./images/ironman.png' className='clouds1' 
          style={{ transform: `translateX(${offsetY * 2.6}px)` }} />
          <img src='./images/clouds.png' className='clouds2' 
          style={{ transform: `translateX(${offsetY * -2.5}px)` }} />
          <img src='./images/clouds.png' className='clouds3' 
          style={{ transform: `translateX(${offsetY * 0.5}px)` }} />
        </div>
        <House apartments={apartmentsProp}/>
      </main>
    {/* </div> */}
  </>);
};

export default Home;