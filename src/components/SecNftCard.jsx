import React from "react";
import "./SecNftCard.css"

function SecNftCard() {
  return (
    <div className="SecNftCard">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgw-orx-1eXJBb4aML_kZ1IfYabtW8ef7uQ&usqp=CAU"
        alt=""
      />
      <h2 className="nft_title">Call Of Duty</h2>
      <p className="price">0.025 ETH</p>
      <p className="seller">Seller: 0x123456789</p>
      <button className="buy">Buy</button>
    </div>
  );
}

export default SecNftCard;
