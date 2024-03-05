import React from "react";

export default function Card() {
  return  <div>
  <div
    className="card mt-3"
    style={{ width: "18rem", maxHeight: "360px" }}
  >
    <img src="https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.jpg?s=612x612&w=0&k=20&c=cITToqM1KEnrixXjoLhEciqP24SxdKtW3QXykq-W5OE=" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Lorem ipsum dolor sit amet.</p>
      <div className="container w-100"> </div>
      <select className="m-2 h-100  bg-success rounded">
        {
          // Array.from() to create an array of length 6
          // The text inside the <option> is set to the index value incremented by 1 (i+1).
          Array.from(Array(6), (e, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {" "}
                {i + 1}
              </option>
            );
          })
        }
      </select>
      <select className="m-2 h-100  bg-success rounded">
        <option value="half">Half</option>
        <option value="full">Full</option>
      </select>
      <div className="d-inline h-100 fs-5"> Total Price</div>
    </div>
  </div>
</div>
}
