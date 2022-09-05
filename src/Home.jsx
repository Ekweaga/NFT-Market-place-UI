import React from 'react'
import hero from "./images/hero.jpg"
import img1 from "./images/img-01.jpg"
import img2 from "./images/img-03.jpg"
import img3 from "./images/img-04.jpg"
import img4 from "./images/img-05.jpg"
import img5 from "./images/img-07.jpg"
import img6 from "./images/img-08.jpg"
import img7 from "./images/img-05.jpg"
import img8 from "./images/img-09.jpg"
import avatar1 from "./images/ava-01.png"
import avatar2 from "./images/ava-02.png"
import avatar3 from "./images/ava-03.png"
import avatar4 from "./images/ava-04.png"

function Home() {
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
               <button>Explore</button> <button>Create</button>
            </div>
        </div>

        <div className="col-lg-4">
          <img src={hero}/>
        </div>

      </div>

    </div>

    <div className="Auction container" style={{marginBottom:'100px'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h3>Live Auction</h3>
        <span>Explore</span>
      </div>
      <div className="AuctionContainer row  ">
        <div className="AuctionNft col-lg-3">
          <img src={img1}/>

          <div>
            <p>Alexson</p>
          </div>
            <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
              <div style={{display:'flex'}}>
              <img className="avatar" src={avatar1} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
              <div>
                <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
              </div>
              </div>
              <div>
                    <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
              </div>
               
            </div>

            <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>

        </div>
        <div className="AuctionNft col-lg-3">
        <img src={img2}/>

<div>
  <p>Alexson</p>
</div>
  <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{display:'flex'}}>
    <img className="avatar" src={avatar2} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
    <div>
      <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
    </div>
    </div>
    <div>
          <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
    </div>
     
  </div>

  <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>
        </div>
        <div className="AuctionNft col-lg-3">
        <img src={img3}/>

<div>
  <p>Alexson</p>
</div>
  <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{display:'flex'}}>
    <img className="avatar" src={avatar3} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
    <div>
      <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
    </div>
    </div>
    <div>
          <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
    </div>
     
  </div>

  <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>
        </div>
        <div className="AuctionNft col-lg-3">
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>   <img src={img4}/></div>
      

<div>
  <p>Alexson</p>
</div>
  <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{display:'flex'}}>
    <img className="avatar" src={avatar4} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
    <div>
      <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
    </div>
    </div>
    <div>
          <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
    </div>
     
  </div>
  <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>
        </div>


      </div>

    </div>


    <div className="Auction container" style={{marginBottom:'20px'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h3>Trending</h3>
        
      </div>
      <div className="AuctionContainer row  ">
        <div className="AuctionNft col-lg-3">
          <img src={img5}/>

          <div>
            <p>Alexson</p>
          </div>
            <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
              <div style={{display:'flex'}}>
              <img className="avatar" src={avatar1} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
              <div>
                <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
              </div>
              </div>
              <div>
                    <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
              </div>
               
            </div>

            <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>

        </div>
        <div className="AuctionNft col-lg-3">
        <img src={img2}/>

<div>
  <p>Alexson</p>
</div>
  <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{display:'flex'}}>
    <img className="avatar" src={avatar2} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
    <div>
      <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
    </div>
    </div>
    <div>
          <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
    </div>
     
  </div>

  <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>
        </div>
        <div className="AuctionNft col-lg-3">
        <img src={img8}/>

<div>
  <p>Alexson</p>
</div>
  <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{display:'flex'}}>
    <img className="avatar" src={avatar3} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
    <div>
      <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
    </div>
    </div>
    <div>
          <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
    </div>
     
  </div>

  <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>
        </div>
        <div className="AuctionNft col-lg-3">
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>   <img src={img4}/></div>
      

<div>
  <p>Alexson</p>
</div>
  <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{display:'flex'}}>
    <img className="avatar" src={avatar4} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
    <div>
      <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
    </div>
    </div>
    <div>
          <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
    </div>
     
  </div>
  <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>
        </div>


      </div>

    </div>
    <div className="Auction container" style={{marginBottom:'100px'}}>
     
      <div className="AuctionContainer row  ">
        <div className="AuctionNft col-lg-3">
          <img src={img6}/>

          <div>
            <p>Alexson</p>
          </div>
            <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
              <div style={{display:'flex'}}>
              <img className="avatar" src={avatar1} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
              <div>
                <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
              </div>
              </div>
              <div>
                    <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
              </div>
               
            </div>

            <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>

        </div>
        <div className="AuctionNft col-lg-3">
        <img src={img7}/>

<div>
  <p>Alexson</p>
</div>
  <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{display:'flex'}}>
    <img className="avatar" src={avatar2} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
    <div>
      <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
    </div>
    </div>
    <div>
          <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
    </div>
     
  </div>

  <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>
        </div>
        <div className="AuctionNft col-lg-3">
        <img src={img3}/>

<div>
  <p>Alexson</p>
</div>
  <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{display:'flex'}}>
    <img className="avatar" src={avatar3} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
    <div>
      <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
    </div>
    </div>
    <div>
          <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
    </div>
     
  </div>

  <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>
        </div>
        <div className="AuctionNft col-lg-3">
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>   <img src={img4}/></div>
      

<div>
  <p>Alexson</p>
</div>
  <div className="AvatarInfo" style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{display:'flex'}}>
    <img className="avatar" src={avatar4} style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
    <div>
      <span  style={{fontSize:'12px'}}>Created By</span><br/><span>Alexson</span>
    </div>
    </div>
    <div>
          <span>Price</span><br/><h4 style={{fontSize:'12px'}}>4.33ETH</h4>
    </div>
     
  </div>
  <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px',marginBottom:'20px'}}>
    <button style={{background:'crimson',color:'white',border:'none',padding:'2px',width:'120px',borderRadius:'15px'}}>Place a Bid</button>
    <span>View History</span>
  </div>
        </div>


      </div>

    </div>


    <div className="Sellers container">
      <h2>Top Seller</h2>
      <div className="sellers">
        <div style={{display:'flex'}}>
          <img src={avatar1} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar2} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar3} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar1} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar1} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar3} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar1} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar4} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar3} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
         <div style={{display:'flex'}}>
          <img src={avatar2} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar3} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
         <div style={{display:'flex'}}>
          <img src={avatar2} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar2} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar3} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>
        <div style={{display:'flex'}}>
          <img src={avatar4} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
          <div>
            <h4>Jennifer</h4>
            <p>5.99ETH</p>

          </div>
        </div>

      </div>


    </div>


    <div className="SellContainer container">
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
                  <h4>1</h4>
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