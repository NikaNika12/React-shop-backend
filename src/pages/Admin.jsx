import React from 'react';

const Admin = () => {
    
    const [modal, setModal] = useState(false);
    
    const createPost = (newPost) => {
      setPosts ([...posts, newPost])
      setModal(false)
    }
    return (
        <h1>Admin page</h1>
        
        <MyButton style={{marginTop: '30px'}} onClick ={() => setModal(true)}>
                  Add subject
        </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                  <CreateSubject/> 
                </MyModal>
        <MyButton style={{marginTop: '30px'}} onClick ={() => setModal(true)}>
                  Add medium
        </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                  <CreateMedium/> 
                </MyModal>
        <MyButton style={{marginTop: '30px'}} onClick ={() => setModal(true)}>
                  Add artwork
        </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                  <PostForm create={createPost} />  
                </MyModal>

    );
};

export default Admin;
