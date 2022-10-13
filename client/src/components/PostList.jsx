import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import PostItem from "./PostItem";
import { Context } from '..';

const PostList = observer(() => {
    const {art} = useContext(Context)

    return (
        <div>
            {art.arts.map(art =>
                <PostItem key={art.id} art={art}/>
            )}
        </div>
    );
});

export default PostList;

