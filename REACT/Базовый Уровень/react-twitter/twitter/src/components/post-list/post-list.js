import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';
import { ListGroup } from 'reactstrap';

const PostList = ({posts, onDelete, onToggleLiked, onToggleImpornant}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                    {...itemProps}
                    onDelete={()=> onDelete(id)}
                    onToggleImpornant={()=> onToggleImpornant(id)}
                    onToggleLiked={()=> onToggleLiked(id)}
                />
            </li>
        )
    });
    

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList