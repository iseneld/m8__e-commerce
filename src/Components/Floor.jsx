import Window from './Window'

const Floor = ({apartments}) => {
  const apartmentsProp = apartments;

  return (
    <section className="floor">
    <Window apartment={apartmentsProp[0]}/>
    <Window apartment={apartmentsProp[1]}/>
    <Window apartment={apartmentsProp[2]}/>
    <Window apartment={apartmentsProp[3]}/>
    </section>
  );
};

export default Floor;