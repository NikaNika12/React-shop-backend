import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import { Context } from '..';
import { ListGroup } from 'react-bootstrap';


const SubjectBar = observer((arts) => {
    const {art} = useContext(Context)
    return (
        <div className='subject_bar'>
            <p>Subject</p>
            <ListGroup>
            {art.subjects.map(subject =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active = {subject.id === art.selectedSubject.id}
                    onClick={() => art.setSelectedSubject(subject)}
                    key={subject.id}
                >
                    {subject.name}
                </ListGroup.Item>
            )} 
            </ListGroup>
        </div>
    );
});

export default SubjectBar;