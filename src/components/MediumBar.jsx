import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import { Context } from '..';

const MediumBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className='medium_bar'>
        <p>Medium</p>
        <ul className='subject_list'>
            {device.medium.map(med =>
                <li
                    key={med.id}
                    onClick={() => device.setSelectedMedium(med)}
                    //border={med.id === device.selectedMedium.id ? 'danger' : 'light'}
                >
                    {med.name}
                </li>
            )}
        </ul>
        </div>
    );
});

export default MediumBar;