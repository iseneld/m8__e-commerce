import House from '../Components/House';

const Home = ({apartments}) => {
  const apartmentsProp = apartments;

  return (
  <>
    {/* <div className="background"> */}
      <main>
        <House apartments={apartmentsProp}/>
      </main>
    {/* </div> */}
  </>);
};

export default Home;