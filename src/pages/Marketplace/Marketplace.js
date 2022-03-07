import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VideoCard from '../../components/common/VideoCard';
import Category from './components/Category';

const Marketplace = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [videos, setVideos] = useState([]);
    const [filterVideos, setFilterVideos] = useState([]);
    useEffect(() => {
        axios.get("./json/Video.json")
            .then(res => {
                setVideos(res.data);
                setFilterVideos(res.data);
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
        <div>
            <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className='bg-light'>
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className='fw-bold'>Latest</h2>
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
        </div>
    );
};

export default Marketplace;