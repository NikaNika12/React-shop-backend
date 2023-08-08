import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import ArtItem from "./ArtItem";
import { Context } from '..';
import {Row} from "react-bootstrap";

const ArtList = observer(() => {
    const {art} = useContext(Context)

    return (
        <Row style={{display: 'flex'}}>
            {art.arts.map(art =>
                <ArtItem key={art.id} art={art}/>
            )}
        </Row>
    );
});

export default ArtList;

