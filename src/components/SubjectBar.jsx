import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import { Context } from '..';


const SubjectBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className='subject_bar'>
            <p>Subject</p>
            <ul className='subject_list'>
            {device.subject.map(sub =>
                <li
                    active = {sub.id === device.setSelectedSubject.id}
                    onClick={() => device.setSelectedSubject(sub)}
                    key={sub.id}
                >
                    {sub.name}
                </li>
            )}
            </ul>
        </div>
    );
});

export default SubjectBar;