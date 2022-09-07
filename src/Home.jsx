import React from 'react'
import hero from "./images/hero.jpg"

import avatar1 from "./images/ava-01.png"
import avatar2 from "./images/ava-02.png"
import avatar3 from "./images/ava-03.png"
import avatar4 from "./images/ava-04.png"
import {NFT__DATA} from "./data.js"
import {Link} from "react-router-dom"
import {BiPencil} from "react-icons/bi"
import {MdOutlineExplore} from "react-icons/md"

function Home({modal}) {
 

  return (
  <>  <div className="Header">
         <div className="HeaderContent row container">
           <div className="col-lg-8">
              <h1>
            Discover rare digital art and collect sell extraordinary NFTs
             </h1>
             <p>Discover rare digital art and collect sell extraordinary NFTsDiscover rare digital art and collect sell extraordinary NFTsDiscover rare digital art and collect sell extraordinary NFTs
             </p>

            <div style={{display:'flex',gap:'20px'}} className="mb-5">
               <button><MdOutlineExplore/>Explore</button> <button><BiPencil/> Create</button>
            </div>
        </div>

        <div className="col-lg-4">
          <img src={hero} alt="images"/>
        </div>

      </div>

    </div>

    <div className="Auction container" style={{marginBottom:'100px'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h3>Live Auction</h3>
        <span> <button style={{background:'transparent',color:'white',border:'1px solid white',width:'100px',borderRadius:'20px'}}><MdOutlineExplore/>Explore</button></span>
      </div><br/><br/>
      <div className="container row">
        
      {NFT__DATA?.slice(0,4).map((item) => (
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
    
      </div>


   
    <div className="Sellers container">
      
      <div className="sellers">
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar1} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar2} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar3} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar1} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar1} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar3} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar1} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar4} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar3} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
         <div style={{display:'flex'}} className="m-3">
          <img src={avatar2} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar3} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
         <div style={{display:'flex'}} className="m-3">
          <img src={avatar2} style={{width:'50px',height:'50px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar2} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar3} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar4} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>

      </div>


    </div>

    <div className="Sellers container">
      
      <div className="sellers">
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar1} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar2} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar3} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar1} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar1} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar3} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar1} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar4} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar3} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
         <div style={{display:'flex'}} className="m-3">
          <img src={avatar2} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar3} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
         <div style={{display:'flex'}} className="m-3">
          <img src={avatar2} style={{width:'50px',height:'50px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar2} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar3} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}} className="m-3">
          <img src={avatar4} style={{width:'70px',height:'70px',borderRadius:'50%'}} alt="images"/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>

      </div>


    </div>

    <div className="Auction container" style={{marginBottom:'20px'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h3>Trending</h3>
        
      </div>

      <div className="container row">
        
        {NFT__DATA?.slice(2,6).map((item) => (
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

        <div className="container row">
        
        {NFT__DATA?.slice(3,7).map((item) => (
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
      </div>
    


 


    <div className="SellContainer">
      <div className="sell row ">
        <div className="nfts col-lg-3">
          <div style={{background:'crimson',width:'50px',height:'50px',padding:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <h4>1</h4>
          </div>
          <div>
            <h2>SetUp your wallet</h2>
            <p>Discover rare digital art and collect sell extraordinary NFTsDiscover rare digital art and collect sell extraordinary NFTsDiscover rare digital
               art and collect sell extraordinary NFT</p>
          </div>

        </div>
        <div className="nfts col-lg-3">
        <div style={{background:'crimson',width:'50px',height:'50px',padding:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <h4>2</h4>
          </div>
          <div>
            <h2>Create your collection</h2>
            <p>Discover rare digital art and collect sell extraordinary NFTsDiscover rare digital art and collect sell extraordinary NFTsDiscover rare digital
               art and collect sell extraordinary NFT</p>
          </div>
        </div>
        <div className="nfts col-lg-3">
        <div style={{background:'crimson',width:'50px',height:'50px',padding:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <h4>3</h4>
          </div>
          <div>
            <h2>Add your NFTs</h2>
            <p>Discover rare digital art and collect sell extraordinary NFTsDiscover rare digital art and collect sell extraordinary NFTsDiscover rare digital
               art and collect sell extraordinary NFT</p>
          </div>
        </div>
        <div className="nfts col-lg-3">
        <div style={{background:'crimson',width:'50px',height:'50px',padding:'6px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <h4>4</h4>
          </div>
          <div>
            <h2>SetUp your wallet</h2>
            <p>Discover rare digital art and collect sell extraordinary NFTsDiscover rare digital art and collect sell extraordinary NFTsDiscover rare digital
               art and collect sell extraordinary NFT</p>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default Home