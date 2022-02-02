import React from "react";
import { Review } from "../types/interfaces";
import { ReviewListItem } from "./Review";

interface Props {
  reviews: Review[];
}

export const ReviewsList: React.FC<Props> = ({ reviews }) => {
  return (
    <div style={{ width: "60%" }}>
      <h4 style={{ color: "white", fontSize: "30px" }}>
        Reviews ({reviews.length})
      </h4>
      <div style={{ border: "2px solid #AD7D62" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingTop: "1rem",
        }}
      >
        {reviews.map((review) => (
          <ReviewListItem review={review} />
        ))}
      </div>
    </div>
  );
};
