import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from '../../../components/common/VideoCard';

const Hot = ({ selectedCategory }) => {
    const [videos, setVideos] = useState([]);
    const [filterVideos, setFilterVideos] = useState([]);
    useEffect(() => {
        axios.get("./json/Video.json")
            .then(res => {
                const hotVideo = res.data.filter(video => video.isHot === true);
                setVideos(hotVideo);
                setFilterVideos(hotVideo);
            })
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            const newArr = videos.filter(video => video.category === selectedCategory);
            setFilterVideos(newArr);
        } else {
            setFilterVideos(videos)
        }
    }, [selectedCategory, videos])



    return (
        <div className='bg-light'>
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className='fw-bold'>Hot</h2>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        filterVideos.map(video =>
                            <VideoCard video={video} key={video.id} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Hot;