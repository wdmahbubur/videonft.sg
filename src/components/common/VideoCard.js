import React from 'react';
import { NavLink } from 'react-router-dom';

const VideoCard = ({ video }) => {
    const { id, name, link, owner, instantSalesPrice } = video;
    const openSocialShare = (id) => {
        document.getElementById(id).classList.toggle('d-block');
    }
    return (
        <div className="col">
            <div className="block video-card">
                <div className="b-profile">
                    <p className="video_title">{name}</p>
                    <span className="dropbtn dropdown share_icon" onClick={() => openSocialShare(id)}><i className="fa fa-share-alt"></i></span>
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
                        <source src={link} type="video/mp4" />
                    </video>

                </div>
                <div className="b-desc">
                    <NavLink to={`/video-details/${id}`} className="text-decoration-none text-center" >
                        <h3> @{owner} </h3>
                        {/* <p className="price price_font_weight"> Bid &nbsp; &nbsp; <span className="span_color"> 0.1 WETH  </span></p> */}
                        <p className="bid justify-content-center" style={{ display: "block !important" }}>
                            Instant Sale Price
                            <span className="span_color">{instantSalesPrice}</span>
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
        </div>
    );
};

export default VideoCard;