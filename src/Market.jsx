import React,{useState} from 'react'
import {NFT__DATA} from "./data.js"
import Modal from './Modal';
import {Link} from "react-router-dom"

function Market() {
  const [data,setData] = useState(NFT__DATA)
  const [showmodal,setshowmodal] =useState(false)

  const modalShow = () =>{
    setshowmodal(!showmodal)
  }


  const handleCategory = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "art") {
      const filterData = NFT__DATA.filter((item) => item.category === "Art");

      setData(filterData);
    }


    if (filterValue === "music") {
      const filterData = NFT__DATA.filter((item) => item.category === "Music");

      setData(filterData);
    }
   

    if (filterValue === "domain-name") {
      const filterData = NFT__DATA.filter((item) => item.category === "Domain Name");

      setData(filterData);
    }
   

    if (filterValue === "virtual-world") {
      const filterData = NFT__DATA.filter((item) => item.category === "Virtual World");

      setData(filterData);
    }
   

    if (filterValue === "all") {
     

      setData(NFT__DATA);
    }

  };

  const handleItems = () => {};

  // ====== SORTING DATA BY HIGH, MID, LOW RATE =========
  const handleSort = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "high") {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);

      setData(filterData);
    }

    if (filterValue === "mid") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 5.5 && item.currentBid < 6
      );

      setData(filterData);
    }

    if (filterValue === "low") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 4.89 && item.currentBid < 5.5
      );

      setData(filterData);
    }
  };
  return (
    <>
    <div className="bg">
<h2>Market Place</h2>
</div>

<section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5" >
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left ">
                  <div className="all__category__filter">
                    <select onChange={handleCategory}>
                      <option value="all">All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Cards</option>
                    </select>
                  </div>

                  <div className="all__items__filter">
                    <select onChange={handleItems}>
                      <option>All Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>

                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </div>

            {data?.map((item) => (
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
            className="bid__btn d-flex align-items-center gap-1" onClick={modalShow}
        
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
      </section>
      {
        showmodal && <Modal modalShow={modalShow}/>
      }
    </>
    
  )
}

export default Market
