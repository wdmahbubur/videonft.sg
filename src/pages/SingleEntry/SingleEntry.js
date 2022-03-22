import React from 'react';
import useAuth from '../../hooks/useAuth';
import './SingleEntry.css';

const SingleEntry = () => {
    const { user, logout } = useAuth();

    return (
        <div class="boxed py-5">

            <div class="container block-form" cfg_type="single" style={{ maxWidth: "1000px" }}>
                <center>
                    <h3 style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                        <span data-v-0d7ed0a5=""> Create Single TikTok Video NFT </span>
                    </h3>
                </center>

                <div class="row">

                    <div class="col-md-6">
                        <center>
                            <span class="small t-gray"> Choice 1 </span>
                            <div class="p-4 mb-5 tac" style={{ border: "2px dashed rgb(221, 221, 221)", borderRadius: "40px", marginTop: "10px" }}>
                                <label class="my-3">
                                    {/* <h6>All users must connect to TikTok</h6><br> */}
                                    {
                                        user.email &&
                                        <a style={{ color: "red" }} href="/#" onClick={logout}>Disconnect</a>

                                    }
                                    {/* < span class="btn btn-primary round"> */}
                                    {
                                        user.email ?
                                            <a class="btn btn-primary round" style={{ color: "white", marginTop: "10px" }} href="/#" onclick="$('#video_modal').modal()">{user.name}</a>
                                            :
                                            <a class="btn btn-primary round" href="/#" onclick="myFunction()"> Connect with Tiktok </a>
                                    }
                                    {/* </span>  */}

                                    {
                                        user.email ?
                                            <h6 style={{ paddingTop: "1rem" }} > Click here to select video from TikTok </h6>
                                            :
                                            <h6 style={{ paddingTop: "1rem" }} > Connect with TikTok and click here to<br /> select video from TikTok </h6>
                                    }
                                </label>
                            </div>
                        </center>
                    </div>

                    <div class="col-md-6">
                        <center>
                            <span class="small t-gray"> Choice 2 </span>
                            <div class="p-4 mb-5 tac" style={{ border: "2px dashed rgb(221, 221, 221)", borderRadius: "40px", marginTop: "10px" }}>
                                <label data-v-0d7ed0a5="" class="my-3">
                                    {user.email ?
                                        <>
                                            <a style={{ color: "red" }} href="/#" onClick={logout} >Disconnect</a>
                                            <span data-v-0d7ed0a5="" class="btn btn-primary round" style={{ marginTop: "10px" }}> {user.name} </span>
                                            <input id="upload_form" accept="video/*" data-v-f32ebcfa="" data-v-0d7ed0a5="" class="none" type="file" />
                                        </>
                                        :
                                        <span data-v-0d7ed0a5="" class="btn btn-primary round" > Connect with Tiktok </span>
                                    }
                                </label>
                                {user.email ?
                                    <h6 style={{ marginBottom: "4%" }} > Click here to upload a video</h6>
                                    :
                                    <h6 style={{ marginBottom: "4%" }}> Connect with TikTok and click here to<br /> select a video from Device</h6>
                                }


                            </div>
                        </center>
                    </div>

                </div>

                <form method="POST" action="{{route('confirm_store')}}" onsubmit="submitForm();" enctype="multipart/form-data">

                    <input type="hidden" name="video_link" value="" id="video_link" />
                    <input type="hidden" name="video_link_val" value="" id="video_link_val" />
                    <input type="hidden" name="is_downloaded" value="0" id="is_downloaded" />
                    <input type="hidden" name="thumb" value="" id="thumb" />
                    <input type="hidden" name="user_name" value="" id="user_name" />
                    <input type="hidden" name="width" value="" id="width" />
                    <input type="hidden" name="height" value="" id="height" />
                    <div class="row">

                        <div class="col-md-6 pb-5">
                            <center>
                                <h4 class="mb-4">Video</h4>
                                <div class="d-flex justify-content-center" style={{ padding: "15px 20px", background: "#424242", border: "1px solid rgb(221, 221, 221)", borderRadius: "25px", height: 590, width: "315px" }}>
                                    <div id="form_image" style={{ lineHeight: "30rem", width: "100%", height: "100%", color: "white", border: "1px solid rgb(255, 255, 255)", background: "rgb(0, 0, 0) none repeat scroll 0% 0%" }}>
                                        Preview of TikTok Video
                                    </div>

                                    <div class="pic-holder" style={{ background: "transparent" }}>
                                        <div data-v-41fea8d2="" class="media-box"><span data-v-41fea8d2=""></span></div>
                                    </div>
                                </div>
                            </center>
                        </div>


                        {/* Pop-Up */}
                        <div id="new_modal" class="modal" tabIndex="-1" role="dialog" style={{ display: "none", zIndex: 9999 }}>
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Choose Cover Image:</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        < label data-v-0d7ed0a5="" class="my-3">
                                            <a data-v-0d7ed0a5="" href='/#' class="btn btn-primary"> Add Cover Image </a>
                                            <input class="none" type="file" name="cover_image" />
                                        </label>
                                        <div id="galleryThumbs" class="row">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <p class="my-4 text-danger">* All fields are compulsory</p>
                            <div class="my-4">
                                <div class="d-flex justify-content-between">
                                    <div data-v-0d7ed0a5="">
                                        <h4 data-v-0d7ed0a5=""> Put on sale </h4>
                                        <div class="text-muted"> Anyone can buy your TikTok Video Immidiately </div>
                                    </div>
                                    <label class="btn-switch-label">
                                        <input type="checkbox" /><span class="btn-switch"></span>
                                    </label>
                                    < div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch1" checked />
                                        <label class="custom-control-label" for="customSwitch1"></label>
                                    </div>

                                    <label class="switch">
                                        <input type="checkbox" id="customSwitch1" checked />
                                        <span class="slider round"></span>
                                    </label>

                                </div>
                            </div>

                            <div class="my-4" id="sale">
                                <h4 data-v-0d7ed0a5=""> Instant Sale Price
                                    <a class="show-option" data-toggle="tooltip" href="/#" title="This is the price you sell to your first buyer.">
                                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                                    </a>
                                </h4>
                                <div class="text-muted"> Enter the price for which the item will be instantly sold </div>
                                <div class="d-flex mb-3">
                                    <input type="number" min="0" step=".01" class="form-control" onkeyup="instantSalePrice()" id="instant_sale_price" name="instant_sale_price" placeholder="Price" required />
                                    <select id="instantSaleType" onchange="instantSalePrice()" class="ml-3 form-select" style={{ width: "100px" }} name="price_unit" required>
                                        <option value="WETH"> WETH </option>
                                        {/* <option value="USDSC"> USDSC </option>
                                                                    <option value="BNB"> BNB</option>
                                                                    <option value="DSS"> DSS </option>
                                                                    <option value="TTH"> TTH </option> */}
                                    </select>
                                </div>
                                <span class="small t-gray"> TikTok Heaven will charge 2% of Instant Sale Price </span>
                                <br />
                                <span style={{ color: "red" }} id="pp_price" class="small t-gray"></span>
                            </div>

                            <div class="my-4">
                                <h4 data-v-0d7ed0a5=""> Name </h4>
                                <div class="mt-3">
                                    <textarea type="text" placeholder="e.g. “Name Your TikTok Video”" class="form-control" name="title" id="title" required></textarea>
                                </div>
                            </div>

                            <div class="d-flex">
                                <div class="w-100">
                                    <div class="my-4">
                                        <h4 style={{ paddingBottom: "1rem" }}> Royalties
                                            <a class="show-option" data-toggle="tooltip" href="/#" title="This is the royalties you get for subsequent purchases">
                                                <i class="fa fa-info-circle" aria-hidden="true"></i>
                                            </a>
                                        </h4>
                                        <select class="form-select" style={{ width: "100px", height: "2em" }} name="royalties" id="royalties" required>
                                            <option value="10" selected> 10</option>
                                            <option value="20"> 20 </option>
                                            <option value="30"> 30 </option>
                                            <option value="40"> 40 </option>
                                            <option value="50"> 50 </option>
                                            <option value="60"> 60 </option>
                                            <option value="70"> 70 </option>
                                            <option value="80"> 80 </option>
                                            <option value="90"> 90 </option>
                                        </select>
                                    </div>
                                    <span class="small t-gray"> TikTok Heaven will charge 10% of Royalties. <br /> You selected <span id="royalties_selected">10</span>%, <span id="royalties_received">9</span>% goes to you and <span id="royalties_tiktokheaven">1</span>% goes to TikTokHeaven.com</span>
                                </div>

                            </div>

                            <div class="my-4">
                                <h4 data-v-0d7ed0a5=""> Description </h4>
                                <div class="mt-3">
                                    <textarea class="form-control" placeholder="Description" id="form_description" name="description" required></textarea>
                                </div>
                            </div>

                            <div class="my-4">
                                <h4 data-v-0d7ed0a5=""> Hash </h4>
                                <div class="mt-3">
                                    <textarea class="form-control" placeholder="Hash" name="hash" id="hashes" required data-role="tagsinput" ></textarea>
                                </div>
                            </div>

                            <div class="my-4">
                                <h4> Duration </h4>
                                <div class="mt-3">
                                    <input class="form-control" placeholder="00:00:00" name="duration" id="duration" readonly required />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div data-v-0d7ed0a5="">
                        <center style={{ marginTop: "1rem" }}>
                            <button id="submitBtn" type="submit" class="btn btn-primary px-4 btn-create" style={{ marginBottom: "1rem" }}>Create TikTok Video NFT</button>
                        </center>
                    </div>

                    <center> <span class="small t-gray"> *There will be a service fees of USD 5 to create a TIKTOK Video NFT </span> </center>
                </form>
            </div>
        </div>

    );
};

export default SingleEntry;