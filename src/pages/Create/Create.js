import React from 'react';

const Create = () => {
    return (
        <center>
            <div data-v-5179c58e="" className="tac">
                <h1 style={{ paddingTop: "2rem" }}> Create </h1>
                <h5 data-v-5179c58e="" className="pt-4 mx-auto b" style={{ padding: "2rem", lineHeight: "2em" }}> Please click below to create your TikTok Video NFT. </h5>
            </div>
            <div className="py-5 mx-auto d-flex flex-wrap justify-content-around" style={{ maxWidth: "800px" }}>
                <a style={{ textDecoration: "none", color: "black" }} href="{{ route('single_entry')}}">
                    <div className="sp-card-create pic-style">
                        <div className="pic-box d-flex justify-content-center">
                            <img style={{ maxHeight: "7rem", borderRadius: "50%" }} src="/img/icon.png" alt="" className="mx-2" /></div>
                        <div className="tac">
                            <div className="b"><strong> Single </strong></div>
                            <div className="t-gray"> BEP-721 </div>
                        </div>
                    </div></a>
                {/* <a style="text-decoration: none; color:black" href="{{ route('multiple_entry')}}">
                    <div data-v-5179c58e="" className="sp-card-create pic-style">
                        <div data-v-5179c58e="" className="pic-box d-flex justify-content-center"><img style="max-height: 7rem; border-radius:50%" data-v-5179c58e="" src="{{asset('assets/images/icon.png')}}" alt="" className="mx-2"><img style="max-height: 7rem; border-radius:50%" data-v-5179c58e="" src="{{asset('assets/images/icon.png')}}" alt="" className="mx-2"></div>
                            <div data-v-5179c58e="" className="tac">
                                <div data-v-5179c58e="" className="b"> <strong> Multiple </strong> </div>
                                <div data-v-5179c58e="" className="t-gray"> BEP-1155 </div>
                            </div>
                        </div></a>  */}
            </div>
            <a type="button" href="{{route('nftList')}}" className="btn btn-primary" >Drafts</a>

            <div data-v-5179c58e="" className="tac" style={{ padding: "1.5rem" }}><h5 data-v-5179c58e="" className="b"><strong> We do not own your private keys and cannot access your funds without your confirmation. </strong></h5></div>
        </center>
    );
};

export default Create;