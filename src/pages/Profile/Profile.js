import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user, setUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState()
    const [image, setImage] = useState();

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedImage) {
            setImage(user.avatar)
            return
        }

        const objectUrl = URL.createObjectURL(selectedImage)
        setImage(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedImage, user.avatar])

    const changePhoto = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedImage(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedImage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.elements.name.value;
        const bio = e.target.elements.bio.value;

        const photo = selectedImage;

        const formData = new FormData();   // create new form data
        formData.append("file", photo);
        formData.append("name", name);
        formData.append("bio", bio);

        await axios.put(`http://localhost:5000/api/users/update`, formData, {
            withCredentials: true,
        })
            .then(res => {
                setUser(res.data.user);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-4 offset-md-4">
                    {/* @if(Session::has('message'))
                <p className="alert alert-info">{{ Session::get('message') }}</p>
                @endif */}
                    <h4 data-v-0d7ed0a5="" className="text-center mt-5 mb-3" style={{ fontSize: "3rem" }}> Profile </h4>
                    <center>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img style={{ borderRadius: "50%", border: "1px solid", width: "50%" }} src={image} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <p className="mt-4 mb-5"> We recommend an image of atleast 400 x 400.</p>
                                    <input type="file" name="photo" accept='image/jpg, image/png, image/jpeg' onChange={changePhoto} />
                                </div>
                            </div>

                            <div className="my-4">
                                <h4 data-v-0d7ed0a5="" style={{ float: "left" }} className="mb-1 mt-3">Name* </h4>
                                <div className="mt-3">
                                    <input type="text" className="form-control" placeholder="Name to be displayed" id="form_description" name="name" defaultValue={user.name} />
                                </div>
                            </div>

                            <div className="my-4">
                                <h4 data-v-0d7ed0a5="" style={{ float: "left" }} className="mb-1 mt-3"> Bio </h4>
                                <div className="mt-3">
                                    <textarea type="text" className="form-control" placeholder="About Yourself" id="form_description" name="bio" defaultValue={user.bio}></textarea>
                                </div>
                                {/* < span style="float: left" className="small t-gray"> URL's are allowed </span> */}
                            </div>

                            <div data-v-0d7ed0a5="">
                                <NavLink to="/wallet" className="btn btn-secondary px-4 btn-create mt-5 mb-1"> Wallet </NavLink>
                                <br />
                                {
                                    !loading ?
                                        <button type="submit" className="btn btn-primary px-4 btn-create mt-1 mb-5"> Update Profile </button>
                                        :
                                        <button className="btn btn-primary px-4 btn-create mt-1 mb-5 disabled"> Updating Profile... </button>
                                }
                            </div>

                        </form>
                    </center>
                </div >
            </div>
        </div>
    );
};

export default Profile;