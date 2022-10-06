import React, {useState} from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import SubjectBar from "../components/SubjectBar";
import MediumBar from "../components/MediumBar";


function Gallery() {
    const [posts, setPosts] = useState([
      {id: 1, title: "Moonlight on the seashore", price: 1500, currency: "€", image: './Moonlight on the seashore.jpg', Medium: "Acrylic", Material: "Canvas", Year: "2022", size: "23.6 W x 11.6 H x 0.1 D in"},
      {id: 2, title: "Summer seaside in Turkey", price: 450, currency: "€", image: './Summer seaside.jpg', Medium: "Acrylic", Material: "Canvas", Year: "2022", size: "27.6 W x 23.2 H x 0.6 D in"},
      {id: 3, title: "The lost world in mountains", price: 6300, currency: "€", image: './The lost world in mountains.jpg', Medium: "Acrylic", Material: "Canvas", Year: "2022", size: "15.7 W x 11.8 H x 0.6 D in"}
    ]);
    const [filter,setFilter] = useState({sort:'', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


    const createPost = (newPost) => {
      setPosts ([...posts, newPost])
      setModal(false)
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
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
                <PostList remove = {removePost} posts = {sortedAndSearchedPosts}
               title ="My Artworks"/>            
           
                <MyButton style={{marginTop: '30px'}} onClick ={() => setModal(true)}>
                  Add artwork
                </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                  <PostForm create={createPost} />
                </MyModal>
        </div>
      </div>
    ); 
}

export default Gallery;
