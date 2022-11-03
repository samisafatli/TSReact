import React, { useState } from 'react';
import { Container, Reactions, Reaction} from './styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Heart} from '@styled-icons/foundation/Heart';
import { HeartDislike } from '@styled-icons/ionicons-solid/HeartDislike';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, addDislike, usePost } from '../../redux/slicePosts';
import { IPost } from '../../models'

const Post = ({username, content, id}: IPost) => {
    const [post] = useSelector(usePost(id))

    const dispatch = useDispatch()

    return (
        <Container>
            <Card sx={{ wordWrap: "break-word", minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{fontSize: 14 }} color="text.secondary" gutterBottom>
                    {username}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {content}
                    </Typography>
                    <Reactions>
                        <Reaction onClick={() =>dispatch(addLike({id}))}>
                            <Heart size={20}/> {post.reactions.likes}
                        </Reaction>
                        <Reaction onClick={() => dispatch(addDislike({id}))}>
                        <HeartDislike size={20}/> {post.reactions.dislikes}
                        </Reaction>
                    </Reactions>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Post;