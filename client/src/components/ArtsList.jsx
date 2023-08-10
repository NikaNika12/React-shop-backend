import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import ArtItem from "./ArtItem";
import { Context } from '..';
import {Row} from "react-bootstrap";

const ArtList = observer(() => {
    const {art} = useContext(Context)

    return (
        <Row style={{display: 'flex'}}>
            {art.arts.map((art, index) =>
                <ArtItem key={art.id} art={art} number={index + 1} />
            )}
        </Row>
    );
});

export default ArtList;

