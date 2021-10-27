import "./entryfee.css";
import React, { useState } from "react";

export default function EntryFee(props) {
  const [radioData, setRadioData] = useState({
    radio: "",
  });
  const handleChange = (event) => {
    var x = document.getElementsByClassName("PaidEntry")[0];
    const target = event.target;
    var name = target.name;
    var value = target.value;
    setRadioData({
      ...radioData,
      [name]: value,
    });

    if (value == "free") x.style.display = "none";
    else x.style.display = "flex";
  };

  const [amount, setAmount] = useState(1);
  const [amountInfromCC, setAmountInFromCC] = useState(true);

  let toAmount, fromAmount;
  if (amountInfromCC) {
    fromAmount = amount;
    toAmount = amount / 10;
  } else {
    toAmount = amount;
    fromAmount = amount * 10;
  }
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCC(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCC(false);
  }
  return (
    <div className="entryfeeContainer">
      <div className="entryfee">
        <div className="topFeeContainer">
          <div>
            <button className="InfoButton">Preview</button>
          </div>
          <div className="btn">
            <button className="successButton">Save</button>
          </div>
        </div>

        <div className="options">
          <label className="entryfeeOptions">
            <span>Free</span>
            <input
              type="radio"
              name="radio"
              value="free"
              onChange={handleChange}
              checked={radioData.radio == "free"}
            />
            <span className="entryFeeCheck"></span>
          </label>
          <label className="entryfeeOptions">
            <input
              type="radio"
              name="radio"
              value="paid"
              onChange={handleChange}
              checked={radioData.radio == "paid"}
            />
            <span>Paid</span>
            <span className="entryFeeCheck"></span>
          </label>
        </div>

        <div className="PaidEntry">
          <div className="enterFeeInput">
            <span className="coin">
              <input
                type="number"
                name="coins"
                className="coinCount"
                placeholder="Entry Fee in CC"
                value={fromAmount}
                onChange={handleFromAmountChange}
              />
              <span> coins</span>
            </span>
            <span className="coin">
              <input
                type="number"
                name="inr"
                className="coinCount"
                placeholder="In INR"
                value={toAmount}
                onChange={handleToAmountChange}
              />
              <span> INR</span>
            </span>
          </div>
        </div>

        <div className="movementContainer">
          <button className="InfoButton previous">Previous</button>
          <button className="InfoButton next">Next</button>
        </div>
      </div>
    </div>
  );
}
