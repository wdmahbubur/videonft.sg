import axios from 'axios';
import { Tab } from 'bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import { Tabs } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './VideoDetails.css';

const VideoDetails = () => {
    const [data, setData] = useState({})
    const id = useParams();
    const socialIcon = useRef();

    useEffect(() => {
        axios.get("https://jsonkeeper.com/b/62ET")
            .then(res => {
                console.log(res.data)

                const item = res.data.find(video => video.id === id);
                console.log(item)
                setData(item);
            })
    }, [id])

    console.log(data)
    const openSocialShare = () => {
        socialIcon.current.classList.toggle("show-social-icon");
    }
    return (
        <div className='container py-5'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <video loop="loop" autoPlay="autoplay" muted="muted" controls="controls" src={data?.link} className='w-100'></video>
                </div>

                <div className="col-md-6" style={{ backgroundColor: "#F5F5F5" }}>
                    <center>
                        <button type="button" className="btn text-dark border border-1 border-dark px-4" style={{ borderRadius: "12px", marginTop: "10px" }}>
                            <i className="fa fa-heart mr-2 "></i> Like
                        </button>
                    </center>

                    {/* <center>
		<a type="button" onclick="function()" data-toggle="modal" data-target="#likealert" className="btn btn-outline-primary gray px-4 mr-3" style="border-radius: 12px;margin-top:10px">
			<i className="fa fa-heart mr-2 "></i> Like 
		</a>
		</center> */}

                    <div className="pt-5 text-center">
                        <h2 className="mb-1"> {data?.name} </h2>

                        <div className="text-secondary ms-1 mt-2">
                            <i className="fas fa-user"></i> {data?.owner}
                        </div>
                        <div className="my-4 d-flex justify-content-center">
                            {/* @php
				$is_liked = "0";
				if(isset($userData->id)){
					$is_liked = "1";
				}
			@endphp
			@if(Auth::check())
			<button data-v-cef40192="{{$session_id}}" className="btn btn-outline-primary gray px-4 mr-3" style="border-radius: 12px;" data-liked="{{$is_liked}}"  @if($is_liked == "0") onclick="like_function(this, '{{$data->id}}')" @else onclick="dislike_function(this, '{{$data->id}}')" @endif>
				<i data-v-cef40192="" @if($is_liked == "0") className="fa fa-heart-o mr-2" @else className="fa fa-heart red mr-2" @endif ></i> Likes 
				<span data-v-cef40192=""> @if(isset($videoData->likes_count)) {{$videoData->likes_count}} @else 0 @endif </span>
			</button>
			@else */}
                            <button data-toggle="modal" data-target="#likealert" className="btn text-dark border border-1 border-dark px-4 me-3" style={{ borderRadius: "12px" }} >
                                <i className="fa fa-heart-o me-2" ></i> Likes
                                <span> </span>
                            </button>


                            <button id="social" className="btn text-dark border border-1 border-dark px-4 ml-3 d-flex align-items-center" style={{ borderRadius: "12px" }} onClick={openSocialShare}>
                                <i className="fa fa-share me-2"></i> Share
                            </button>

                        </div>

                        <div className="social-links" ref={socialIcon}>
                            <ul className="d-flex justify-content-center">
                                <li style={{ padding: "5px" }}>
                                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://tiktokheaven.com/video-details/" className="social-button " id="" rel="noreferrer">
                                        <span className="fa fa-facebook-official"></span></a>
                                </li>
                                <li style={{ padding: "5px" }}>
                                    <a target="_blank" href="https://twitter.com/intent/tweet?url=https://tiktokheaven.com/video-details/" className="social-button " id="" rel="noreferrer">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li style={{ padding: "5px" }}>
                                    <a target="_blank" href="http://www.linkedin.com/shareArticle?mini=true" className="social-button " id="" rel="noreferrer">
                                        <span className="fa fa-linkedin"></span>
                                    </a>
                                </li>
                                <li style={{ padding: "5px" }}>
                                    <a target="_blank" href="https://wa.me/?text=Title of the Video%20%0AInstant Sale Price 0.2 BNB%20%0ABid 0.1 BNB%20%0Avideo-details/{{$data->id}}" className="social-button " id="" rel="noreferrer">
                                        <span className="fa fa-whatsapp"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div>
                        <Tabs defaultActiveKey="information" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="information" title="Information">
                                <div className="list-owner">
                                    <div className="mb-4">
                                        <h6 className="b mt-3"> Description: </h6>
                                        {data?.description}
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="b mt-3"> Properties: </h6>
                                        <div className="small">
                                            <div className="border px-2 py-1 bg-light mb-2" style={{ borderRadius: "10px" }}>
                                                <span> Royalties </span>
                                                <span className="float-right"> {data?.properties?.royalties} </span>
                                            </div>
                                            {/* <div data-v-cef40192="" className="border px-2 py-1 bg-light mb-2" style="border-radius: 10px;"><span data-v-cef40192=""> Royalties </span><span data-v-cef40192="" className="float-right"> {{$data->royalties."%"}} </span></div> */}
                                            <div className="border px-2 py-1 bg-light mb-2" style={{ borderRadius: "10px" }}>
                                                <span> Max Supply </span>
                                                <span className="float-right"> {data?.properties?.maxSupply} </span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <h6 className="b mt-3"> Chain info: </h6>
                                        <div className="small">
                                            <div className="d-flex border-bottom py-2">
                                                <span> Contract Address </span>
                                                {/* <a href={data?.chainInfo?.contractAddress} target="_blank" className="ml-auto" rel="noreferrer"></a> */}
                                            </div>
                                            <div className="d-flex border-bottom py-2">
                                                <span> Token ID </span>
                                                <span className="ms-auto">{data?.chainInfo?.tokenId}</span>
                                            </div>
                                            <div className="d-flex border-bottom py-2">
                                                <span> Blockchain </span>
                                                <span className="ms-auto">{data?.chainInfo?.blockchain}</span>
                                                <div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="history" title="History">

                            </Tab>
                            <Tab eventKey="bids" title="Bids">

                            </Tab>
                        </Tabs>
                        <div className="btn-box tac">
                            {/* <div data-v-cef40192="" className="box-holder"></div>  */}
                            <div className="box-main py-3 d-flex flex-column justify-content-center">
                                <div>
                                    <div className="w-100">
                                        <div className='text-center'>
                                            <button className="btn btn-warning mx-auto text-white fw-bold"> Buy Now at {data?.priceBNB} BNB ({data?.priceUSD} USD) <br /> Include Service fees of {data?.serviceFee}% too </button>
                                            {/* <button data-v-cef40192="" className="btn btn-primary btn-round ml-2 btn_id" style="min-width: 130px;"> Place A Bid </button> */}
                                        </div>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <span style={{ color: "gray" }}>Buy Price Includes <b>{data?.serviceFee}%</b> Service Fees<b></b>
                                        </span>
                                        <span>
                                            <b className="c"></b>
                                            <span className="t-gray"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>

                </div >
            </div>
        </div>

    );
};

export default VideoDetails;