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
          <img src='./images/ufo.png' className='ufo' 
          style={{ transform: `translateX(${offsetY * -3.2}px)` }} alt="UFO flying in the air"/>
          <img src='./images/ironman.png' className='ironman' 
          style={{ transform: `translateX(${offsetY * 2}px)` }} alt="Iron Man flying in the air"/>
          <img src='./images/clouds.png' className='clouds2' 
          style={{ transform: `translateX(${offsetY * -0.05}px)` }} alt="Cloud flying in the air" />
          <img src='./images/clouds.png' className='clouds3' 
          style={{ transform: `translateX(${offsetY * 0.05}px)` }} alt="Cloud flying in the air"  />
          <img src='./images/clouds.png' className='clouds4' 
          style={{ transform: `translateX(${offsetY * 0.07}px)` }} alt="Cloud flying in the air"  />
        </div>
        <House apartments={apartmentsProp}/>
      </main>
    {/* </div> */}
  </>);
};

export default Home;