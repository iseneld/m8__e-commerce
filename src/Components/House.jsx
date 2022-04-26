import Floor from './Floor'

const House = ({apartments}) => {
  const apartmentsProp = apartments;
  return( 
  <section className="house">
    {/* <Floor apartments={apartmentsProp}/>
    <Floor apartments={apartmentsProp}/>
    <Floor apartments={apartmentsProp}/>
    <Floor apartments={apartmentsProp}/>
    <Floor apartments={apartmentsProp}/> */}
    <Floor apartments={apartmentsProp.splice(0, 4)}/>
    <section className="entrance">
      <article className="door"></article>
    </section>
  </section> )
};

export default House;