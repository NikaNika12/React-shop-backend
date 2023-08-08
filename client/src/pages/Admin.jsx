import React, {useState} from 'react';
import CreateSubject from '../components/CreateSubject';
import CreateMedium from '../components/CreateMedium';
import CreateArt from '../components/CreateArt';
import { Container } from 'react-bootstrap';


const Admin = () => {
    const [mediumVisible, setMediumVisible] = useState(false)
    const [subjectVisible, setSubjectVisible] = useState(false)
    const [artVisible, setArtVisible] = useState(false)
    
  
    return (
        <Container>
          <div className="d-grid gap-2">
            <button 
              style={{marginTop: '30px'}}
              className="btn btn-primary" 
              type="button" 
              onClick={() => setSubjectVisible(true)}
            >
              Add subject
            </button>
            <CreateSubject show={subjectVisible} onHide={() => setSubjectVisible(false)}/> 
            

            <button 
            className="btn btn-primary" 
            type="button"
            onClick ={() => setMediumVisible(true)}
            >
              Add medium
            </button>
            <CreateMedium show={mediumVisible} onHide={() => setMediumVisible(false)}/>

            <button 
            className="btn btn-primary" 
            type="button"
            onClick ={() => setArtVisible(true)}
            >
              Add artwork
            </button>
            <CreateArt show={artVisible} onHide={() => setArtVisible(false)}/>
          </div>
        </Container>
    );
};

export default Admin;