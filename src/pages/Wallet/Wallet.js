import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wallet = () => {
    const [price, setPrice] = useState({});
    const usd_balance = 0.000000000;
    useEffect(() => {
        const getPrice = async () => {
            await axios.get("https://www.findexx.net/get-asset-rate.php?id=USDSC", {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
                .then(res => {
                    setPrice({ ...price, USDSC: res.data });
                })

            await axios.get("https://api.dslegends.org/api/crypto.php?access_key=frlutx2l5bpzjf33wsaqjzaquczlmy1568knwceh&fsym=BNB&tsyms=USD")
                .then(res => {
                    setPrice({ ...price, BNB: res.data.USD });
                })

        }
        getPrice();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const otherAmount = (e) => {
        console.log(e.target.value);
        if (e.target.value === "other") {
            document.getElementById("otherInputField").disabled = false;
        } else {
            document.getElementById("otherInputField").disabled = true;
        }

    }
    return (
        <section className="container py-5">
            {/* @if(Session::has('message'))
            <center>
                <p className="alert alert-info">{{ Session::get('message') }}<a href="#" className="close" data-dismiss="alert" aria-label="close" title="close">×</a></p>
            </center>
            @endif */}
            <h4 data-v-0d7ed0a5="" className="text-center m-0 p-0" style={{ fontSize: "3rem" }}> Wallet </h4>
            <div className="row">
                <div className="col-md-4 my-5">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            <h4 className="card-title m-0 text-center">USD</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-center"><strong>Balance:</strong> {usd_balance.toFixed(2)}</p>
                            <p className="alert-info text-center">You can top up this balance with credit / debit card by clicking top up. You can use the balance to pay for minting the TikTok Video NFT.</p>
                        </div>
                        <div className="card-footer">
                            <div className="alert" id="usd_error" style={{ display: "none" }}></div>
                            <form id="usd_form">
                                <div className="form-group">
                                    <label>Amount</label>
                                    <select className="form-control" name="amount" onChange={otherAmount}>
                                        <option value="5">USD 5</option>
                                        <option value="10">USD 10</option>
                                        <option value="other">Other Amount</option>
                                    </select>
                                    <input type="text" className="form-control mt-2" placeholder="Other" name="amount_other" disabled={true} id="otherInputField" />
                                </div>
                                <div className="form-group mt-2">
                                    <button type="submit" className="btn btn-primary">TOP UP</button>
                                    {usd_balance.toFixed(2) > 5 &&
                                        <a style={{ float: "right" }} href="{{route('single_entry')}}" className="btn btn-primary">PAY</a>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-5">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h4 className="card-title m-0 text-center">USDSC</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-center"><strong>Balance:</strong> {usd_balance.toFixed(2)}</p>
                            <p className="alert-info text-center">When you sell a TikTok Video NFT, the payment will appear here. You can also buy this asset with USD Balance.</p>
                        </div>
                        <div className="card-footer">
                            <div className="alert" id="usdsc_error" style={{ display: "none" }}></div>
                            <form id="usdsc_form" method="post" action="{{ route('usdsc_purchase') }}">
                                <div className="form-group">
                                    <label>Amount to purchase</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" defaultValue="1" name="amount" min="5" step="1" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USDSC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label>USDSC Price</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="price" defaultValue={price.USDSC} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label>Amount to pay from Wallet</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="amount_paid" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group my-2">
                                    <button type="submit" className="btn btn-primary">PURCHASE</button>
                                </div>
                                <p className="alert-danger text-center">The minimum purchase for all is USD 10 worth</p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-5">
                    <div className="card">
                        <div className="card-header bg-danger text-white">
                            <h4 className="card-title m-0 text-center">BNB</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-center"><strong>Balance:</strong> {usd_balance.toFixed(4)}</p>
                            <p className="alert-info text-center">When you sell a TikTok Video NFT, the payment will appear here. You can also buy this asset with USD Balance.</p>

                        </div>

                        <div className="card-footer">
                            <div className="alert" id="bnb_error" style={{ display: "none" }}></div>
                            <form id="bnb_form" method="post" action="{{ route('bnb_purchase') }}">
                                <div className="form-group">
                                    <label>Amount to purchase</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" defaultValue="1" name="amount" min="0.01" step="0.01" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">BNB</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label>BNB Price</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="price" defaultValue={price.BNB} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label>Amount to pay from Wallet</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="amount_paid" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group my-2">
                                    <button type="submit" className="btn btn-primary">PURCHASE</button>
                                </div>
                                <p className="alert-danger text-center">The minimum purchase for all is USD 10 worth</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 my-5">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            <h4 className="card-title m-0 text-center">ETH</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-center"><strong>Balance:</strong> 0.00</p>
                            <p className="alert-info text-center">When you sell a TikTok Video NFT, the payment will appear here. You can also buy this asset with USD Balance.</p>
                        </div>
                        <div className="card-footer">
                            <div className="alert" id="eth_error" style={{ display: "none" }}></div>
                            <form id="" method="post" action="">

                                <div className="form-group">
                                    <label>Amount to purchase</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" defaultValue="1" name="amount" min="5" step="1" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label>USDSC Price</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="price" defaultValue={price.USDSC} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label>Amount to pay from Wallet</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="amount_paid" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group my-2">
                                    <button type="submit" onClick="myFunctions()" className="btn btn-primary">PURCHASE</button>
                                </div>
                                <p className="alert-danger text-center">The minimum purchase for all is USD 10 worth</p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-5">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h4 className="card-title m-0 text-center">USDC</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-center"><strong>Balance:</strong> 0.00</p>
                            <p className="alert-info text-center">When you sell a TikTok Video NFT, the payment will appear here. You can also buy this asset with USD Balance.</p>

                        </div>
                        <div className="card-footer">
                            <div className="alert" id="usdc_error" style={{ display: "none" }}></div>
                            <form id="" method="post" action="">

                                <div className="form-group">
                                    <label>Amount to purchase</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" defaultValue="1" name="amount" min="5" step="1" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USDC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label>USDSC Price</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="price" defaultValue={price.USDSC} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label>Amount to pay from Wallet</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="amount_paid" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group my-2">
                                    <button type="submit" onClick="myFunctions()" className="btn btn-primary">PURCHASE</button>
                                </div>
                                <p className="alert-danger text-center">The minimum purchase for all is USD 10 worth</p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-5">
                    <div className="card">
                        <div className="card-header bg-danger text-white">
                            <h4 className="card-title m-0 text-center">DAI</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-center"><strong>Balance:</strong> 0.00</p>
                            <p className="alert-info text-center">When you sell a TikTok Video NFT, the payment will appear here. You can also buy this asset with USD Balance.</p>

                        </div>
                        <div className="card-footer">
                            <div className="alert" id="dai_error" style={{ display: "none" }}></div>
                            <form id="" method="post" action="">

                                <div className="form-group">
                                    <label>Amount to purchase</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" defaultValue="1" name="amount" min="5" step="1" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">DAI</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label>USDSC Price</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="price" defaultValue={price.USDSC} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label>Amount to pay from Wallet</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="amount_paid" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group my-2">
                                    <button type="submit" onClick="myFunctions()" className="btn btn-primary">PURCHASE</button>
                                </div>
                                <p className="alert-danger text-center">The minimum purchase for all is USD 10 worth</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 my-5">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <h4 className="card-title m-0 text-center">WETH</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-center"><strong>Balance:</strong> 0.00</p>
                            <p className="alert-info text-center">When you sell a TikTok Video NFT, the payment will appear here. You can also buy this asset with USD Balance.</p>

                        </div>
                        <div className="card-footer">
                            <div className="alert" id="weth_error" style={{ display: "none" }}></div>
                            <form id="" method="post" action="">
                                <div className="form-group">
                                    <label>Amount to purchase</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" defaultValue="1" name="amount" min="5" step="1" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">WETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <label>USDSC Price</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="price" defaultValue={price.USDSC} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group  mt-2">
                                    <label>Amount to pay from Wallet</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" readOnly name="amount_paid" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">USD</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group my-2">
                                    <button type="submit" onClick="myFunctions()" className="btn btn-primary">PURCHASE</button>
                                </div>
                                <p className="alert-danger text-center">The minimum purchase for all is USD 10 worth</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wallet;