import Floor from './Floor'

function filterByFloor(array, x) {
  return array.filter((apt) => {return apt.aptNumber > x && apt.aptNumber < x + 100})
}


const House = ({apartments}) => {
  const apartmentsProp = apartments.sort((a, b)=> a.aptNumber - b.aptNumber);
  apartmentsProp && console.log("In the array:", apartmentsProp)

  return( 
  <section className="house">
    <Floor apartments={filterByFloor(apartmentsProp, 600)}/>
    <Floor apartments={filterByFloor(apartmentsProp, 500)}/>
    <Floor apartments={filterByFloor(apartmentsProp, 400)}/>
    <Floor apartments={filterByFloor(apartmentsProp, 300)}/>
    <Floor apartments={filterByFloor(apartmentsProp, 200)}/> 
    <Floor apartments={filterByFloor(apartmentsProp, 100)}/>
    <section className="entrance">
      <article className="door"></article>
    </section>
  </section> )
};

export default House;