import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

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

    const openSocialShare = (id) => {
        document.getElementById(id).classList.toggle('d-block');
    }

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
                            <div className="col" key={video.id}>
                                <div className="block video-card">
                                    <div className="b-profile">
                                        <p className="video_title">{video.name}</p>
                                        <span className="dropbtn dropdown share_icon" onClick={() => openSocialShare(video.id)}><i className="fa fa-share-alt"></i></span>
                                        <div className="dropdown-content myDropdown" id={video.id}>
                                            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://videonft.sg/user_videos/11756418.mp4" className="social-button " id="" rel="noreferrer">
                                                <span className="fa fa-facebook-official"></span>
                                            </a>
                                            <a target="_blank" href="https://twitter.com/intent/tweet?text=Title of the Video%20%0AInstant Sale Price 0.2 BNB%20%0ABid 0.1 BNB%20%0A&amp;url=https://videonft.sg/user_videos/11756418.mp4" className="social-button " rel="noreferrer">
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                            <a target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;https://videonft.sg/user_videos/11756418.mp4&amp;title=Title of the Video&amp;summary=Title of the Video" className="social-button " rel="noreferrer">
                                                <span className="fa fa-linkedin"></span>
                                            </a>
                                            <a target="_blank" href="https://wa.me/?text=Title of the Video%20%0AInstant Sale Price 0.2 BNB%20%0ABid 0.1 BNB%20%0Ahttps://videonft.sg/user_videos/11756418.mp4" className="social-button " rel="noreferrer">
                                                <span className="fa fa-whatsapp"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="b-pic" data-id="7">
                                        <video controls id="video-element-7" preload="metadata">
                                            <source src={video.video} type="video/mp4" />
                                        </video>

                                    </div>
                                    <div className="b-desc">
                                        <NavLink to="/video-details" className="text-decoration-none text-center" >
                                            <h3> @{video.owner} </h3>
                                            {/* <p className="price price_font_weight"> Bid &nbsp; &nbsp; <span className="span_color"> 0.1 WETH  </span></p> */}
                                            <p className="bid justify-content-center" style={{ display: "block !important" }}>
                                                Instant Sale Price
                                                <span className="span_color">5 WETH</span>
                                            </p>
                                        </NavLink>
                                        <p>
                                            <button type="button" className="btn" disabled="" style={{ background: "green", opacity: "75%", color: "white" }}>BUY NOW</button>
                                        </p>
                                        <p>
                                            <NavLink to="/video-details/">
                                                <small><i className="fa fa-heart-o"></i></small>
                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Hot;