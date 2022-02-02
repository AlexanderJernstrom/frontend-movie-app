import React, { useState } from "react";
import { API_URL } from "../App";

interface Props {
  filters: {
    slidersRating: { max: number; min: number };
  };
  changeMinRating: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeMaxRating: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<Props> = ({
  filters,
  changeMaxRating,
  changeMinRating,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#474747",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        width: "40%",
        height: "40%",
      }}
    >
      <h4 style={{ color: "white", fontSize: "30px" }}>Filter</h4>
      <div style={{ border: "2px solid #AD7D62", width: "100%" }}></div>
      <div>
        <h4 style={{ fontSize: "24px" }}>Rating</h4>
        <span>Min {filters.slidersRating.min}</span>
        <div>
          <input
            type="range"
            min="1"
            max="10"
            value={filters.slidersRating.min}
            onChange={(e) => changeMinRating(e)}
            style={{
              background: "#AD7D62",
              color: "#AD7D62",
              cursor: "pointer",
            }}
          />
        </div>
        <span>Max {filters.slidersRating.max}</span>
        <div>
          <input
            type="range"
            min="1"
            max="10"
            value={filters.slidersRating.max}
            onChange={(e) => changeMaxRating(e)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};
