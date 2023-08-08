import React, {useContext, useState,useEffect} from "react";
import { observer } from "mobx-react-lite";
import ArtsList from "../components/ArtsList";
import SubjectBar from "../components/SubjectBar";
import MediumBar from "../components/MediumBar";
import { Context } from "..";
import { fetchArts, fetchSubjects, fetchMediums } from "../http/artAPI";
import Pages from "../components/Pages";



const Gallery = observer(() => {
  const {art} = useContext (Context) //ввела использование глобальной переменной вместо списка постов
  const [arts, setArts] = useState({art}); //как обьявить состояние из глобальной переменной

  useEffect(() => {
    fetchSubjects().then(data => art.setSubjects(data))
    fetchMediums().then(data => art.setMediums(data))
    fetchArts(null, null, 1, 2).then(data => {
      art.setArts(data.rows)
      art.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchArts(art.selectedSubject.id, art.selectedMedium.id, art.page, 2).then(data => {
        art.setArts(data.rows)
        art.setTotalCount(data.count)
    })
}, [art.page, art.selectedSubject, art.selectedMedium,]) //смена страницы при пагинации

    return (
      <div className="App">              
        <div>
            <SubjectBar/>
            <MediumBar/>
        </div>
        <div>
            <ArtsList/>            
            <Pages/>
        </div>
      </div>
    ); 
});

export default Gallery;
