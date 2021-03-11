import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className=" Weather container">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-primary"></input>
          </div>
        </div>
      </form>
    </div>
  );
}
