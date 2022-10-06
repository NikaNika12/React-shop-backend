import React from 'react';

export default function UsersList (props) {

    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}

