import React from 'react'
import {useParams,Link} from "react-router-dom"
import {NFT__DATA} from "./data.js"


function NftDetails() {
  const {id} = useParams();
 

  const NFT = NFT__DATA.find((item)=>item.id === id)
  return (
   <> <div className="bg">

      <h2>{NFT.title}</h2>
      
    </div>

    <div className="container row Detail">
      <div className="Img col-lg-6">
        <img src={NFT.imgUrl} alt="images"/>

      </div>
      <div className="col-lg-6 DetailInfo">
        <h3>{NFT.title}</h3>
        <div></div>
        <div className="creator" style={{display:'flex',gap:'20px'}}>
          <img src={NFT.creatorImg} alt="images"/>
          <div>
            <span>Created By</span><br/>
            <span>{NFT.creator}</span>
          </div>
         
        </div>
        <div className="desc">
          <p>{NFT.desc}</p>
        </div>
        <div>
          <button style={{width:'250px',padding:'5px',background:'black',color:'white',borderRadius:'20px'}}>Buy</button>
        </div>

      </div>

    </div>

    <div className="container row">
    {NFT__DATA?.slice(0,6).map((item) => (
              <div className="col-lg-3 mb-4 md-4 sm-6"  key={item.id}>
              <div className="single__nft__card">
      <div className="nft__img">
        <img src={item.imgUrl} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/details/${item.id}`}>{item.title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={item.creatorImg} alt="" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{item.creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p>{item.currentBid} ETH</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
        
          >
            <i class="ri-shopping-bag-line"></i> Buy
          </button>

         

          <span className="history__link">
            <Link to="#">View History</Link>
          </span>
        </div>
      </div>
    </div>
              </div>
            ))}

    </div>
   
    </>
  )
}

export default NftDetails