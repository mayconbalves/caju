import { useState, useEffect } from 'react'
import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import axios from "axios"



const DashboardPage = () => {
  const [registrations, setRegistrarion] = useState<any>()

  useEffect(() => {
    const fetchDate = async() => {
      const { data } = await axios.get('http://localhost:3000/registrations')

      setRegistrarion(data)
    }

    fetchDate()
  }, [])



  console.log(registrations, 'registration')
  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
export default DashboardPage;
