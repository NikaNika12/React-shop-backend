import React, {useContext, useState,useEffect} from "react";
import { observer } from "mobx-react-lite";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";

import SubjectBar from "../components/SubjectBar";
import MediumBar from "../components/MediumBar";
import { Context } from "..";
import { fetchArts, fetchSubjects, fetchMediums } from "../http/deviceAPI";
import { usePosts } from "../hooks/usePosts";



const Gallery = observer(() => {
  
  const {art} = useContext (Context) //ввела использование глобальной переменной вместо списка постов
 
    const [arts, setArts] = useState({art}); //как обьявить состояние из глобальной переменной
    const [filter,setFilter] = useState({sort:'', query: ''});
    //const sortedAndSearchedPosts = usePosts(arts, filter.sort, filter.query);

    useEffect(() => {
      fetchSubjects().then(data => art.setSubjects(data))
      fetchMediums().then(data => art.setMediums(data))
      fetchArts().then(data => art.setArt(data))
  }, [])

    

    const removePost = (art) => {
      setArts(arts.filter(p => p.id !== art.id))
    }
   

    return (
      <div className="App">              
        <div>
            <PostFilter
              filter={filter}
              setFilter={setFilter}
            />
            <SubjectBar/>
            <MediumBar/>
        </div>
        <div>
            <PostList remove = {removePost} /*arts = {sortedAndSearchedPosts}*/
               title ="My Artworks"/>            
           
                
        </div>
      </div>
    ); 
});

export default Gallery;
