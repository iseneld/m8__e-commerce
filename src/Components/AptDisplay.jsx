import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';
import AptBox from "./AptBox";
import AptInfo from "./AptInfo";

function AptDisplay() {

    let { aptNumber } = useParams();
    console.log(aptNumber)

    const [apartment, setApartment] = useState({});

  useEffect(() => {
    async function fetchApt() {
      const response = await fetch(`${API_BASE_URL}/apartments`);
      const result = await response.json();
      console.log('result is', result);
      const aptItem =  await result.filter((apt) => {
          return apt.aptNumber == aptNumber;
          })

      setApartment(aptItem[0]);
    }

    fetchApt();
  }, []);
  apartment && console.log('apartment is', apartment)


    return (
            <div className="apt-display apt-display--your-property">
                <AptBox apartment={apartment} />
                <AptInfo apartment={apartment} />
            </div>
    )
}

export default AptDisplay;
