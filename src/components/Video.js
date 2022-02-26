import React from 'react';

export default function Video({videoID}) {
    return (
        <iframe 
        width="560" 
        height="315" 
        src={"https://www.youtube.com/embed/" + videoID} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
        </iframe>
    );
}