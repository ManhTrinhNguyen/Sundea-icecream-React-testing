import React, { useState } from "react";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);
  const [termsConditions, setTermsConditions] = useState("none")

  function tcCheckFunction() {
    setTcChecked(prev => !prev)
  }
  function onMouseOver() {
    setTermsConditions("block")
  }

  function onMouseLeave() {
    setTermsConditions("none")
  }

  function popOver() {
    return  <h1 style={{display: termsConditions}}>No ice cream will actually be delivered</h1>
  }
  return (
    <>
      <form>
          <button disabled={!tcChecked}>Confirm order</button>
          <input onChange={tcCheckFunction} type="checkbox" id="checkbox" checked={tcChecked} />
          <label onMouseLeave={onMouseLeave} onMouseOver={onMouseOver} htmlFor="checkbox">Terms and Conditions</label>
      </form>
      {termsConditions === "block" && popOver() }
    </>
    
  );
}