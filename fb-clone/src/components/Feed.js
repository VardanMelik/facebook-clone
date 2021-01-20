import React from 'react';
import StoryReel from './StoryReel';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                key='45'
                profilePic="https://avatars1.githubusercontent.com/u/49842390?s=60&v=4"
                message='Wow this works'
                timestamp='This is a timestamp'
                username='Vazgen Aramyan'
                image='https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/16098/optimized_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png'
            />
            <Post 
                key='451'
                profilePic="https://avatars1.githubusercontent.com/u/49842390?s=60&v=4"
                message='Wow this works'
                timestamp='This is a timestamp'
                username='Gagik Malyan'
                image='https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/16098/optimized_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png'
            />
            <Post 
                key='452'
                profilePic="https://avatars1.githubusercontent.com/u/49842390?s=60&v=4"
                message='Wow this works'
                timestamp='This is a timestamp'
                username='Vardan Mel'
                image='https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/16098/optimized_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png'
            />
            {/*<MessageSender />*/}
        </div>
    )
}

export default Feed
