import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import { Context } from '..';
import { ListGroup } from 'react-bootstrap';

const MediumBar = observer(() => {
    const {art} = useContext(Context)

    return (
        <div className='medium_bar'>
            <p>Medium</p>
            <ListGroup>
                {art.mediums.map(medium =>
                    <ListGroup.Item
                        style={{cursor: "pointer"}}
                        key={medium.id}
                        onClick={() => art.setSelectedMedium(medium)}
                        active = {medium.id === art.selectedMedium.id}
                    >
                        {medium.name}
                    </ListGroup.Item>
                )} 
            </ListGroup>
        </div>
    );
});

export default MediumBar;