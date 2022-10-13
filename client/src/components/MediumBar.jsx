import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import { Context } from '..';

const MediumBar = observer(() => {
    const {art} = useContext(Context)

    return (
        <div className='medium_bar'>
        <p>Medium</p>
        <ul className='subject_list'>
            {art.mediums.map(medium =>
                <li
                    key={medium.id}
                    onClick={() => art.setSelectedMedium(medium)}
                    active = {medium.id === art.selectedMedium.id}
                >
                    {medium.name}
                </li>
            )}
        </ul>
        </div>
    );
});

export default MediumBar;