import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import { Context } from '..';


const SubjectBar = observer(() => {
    const {art} = useContext(Context)
    return (
        <div className='subject_bar'>
            <p>Subject</p>
            <ul className='subject_list'>
            {art.subjects.map(subject =>
                <li
                    active = {subject.id === art.selectedSubject.id}
                    onClick={() => art.setSelectedSubject(subject)}
                    key={subject.id}
                >
                    {subject.name}
                </li>
            )}
            </ul>
        </div>
    );
});

export default SubjectBar;