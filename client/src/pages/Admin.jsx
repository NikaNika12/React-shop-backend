import React, {useState} from 'react';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from "../components/UI/button/MyButton";
import CreateMedium from '../components/createMedium';
import CreateSubject from '../components/CreateSubject';
import CreateArt from '../components/CreateArt';


const Admin = () => {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    
  
    return (
        <div>
            <h1>Admin page</h1>
            
            <div>
                <MyButton style={{marginTop: '30px'}} onClick ={() => setModal(true)}>
                  Add subject
                </MyButton>
                <MyModal visible={modal} setVisible={setModal}>
                  <CreateSubject/> 
                </MyModal>
            </div>
            <div>
                <MyButton style={{marginTop: '30px'}} onClick ={() => setModal1(true)}>
                  Add medium
                </MyButton>
                <MyModal visible={modal1} setVisible={setModal1}>
                  <CreateMedium/> 
                </MyModal>
            </div>
            <div>
                <MyButton style={{marginTop: '30px'}} onClick ={() => setModal2(true)}>
                  Add artwork
                </MyButton>
                <MyModal visible={modal2} setVisible={setModal2}>
                  <CreateArt/>  
                </MyModal>
            </div>
        </div>
    );
};

export default Admin;