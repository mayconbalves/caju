import { useEffect, useState } from 'react';
import { deleteRegistrationsById, fetchAllRegistrations, updateStatusRegistrations } from "../../services";
import Collumns from "./components/Columns";
import { SearchBar } from "./components/Searchbar";
import * as S from "./styles";



const DashboardPage = () => {
  const [registrations, setRegistrarion] = useState<any>()

  useEffect(() => {
    const fetchDate =  async () => {
      const data = await fetchAllRegistrations()

      setRegistrarion(data)
    }

    fetchDate()
  }, [])


  const handleDeleteCard = async (id: string) => {
    const updatedData = await deleteRegistrationsById(id);

    setRegistrarion(updatedData)
  };

  return (
    <S.Container>
      <SearchBar />
      <Collumns
        registrations={registrations}
        handleDeleteCard={handleDeleteCard}
        updateStatusRegistrations={updateStatusRegistrations}
      />
    </S.Container>
  );
};
export default DashboardPage;
