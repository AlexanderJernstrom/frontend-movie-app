import React, { useState } from "react";
import { Review } from "../types/interfaces";

interface Props {
  review: Review;
}

export const ReviewListItem: React.FC<Props> = ({ review }) => {
  const [showMore, setShowMore] = useState(false);
  const reviewText = !showMore
    ? review.content.slice(0, 200) + "..."
    : review.content;

  return (
    <div
      style={{
        backgroundColor: "#474747",
        width: "99.5%",
        borderLeft: "5px solid #385154",
        padding: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "white", fontSize: "25px" }}>
          {review.author}
        </span>
        <span style={{ color: "white", fontSize: "25px" }}>
          {new Date(review.created_at).toLocaleDateString()}
        </span>
      </div>
      <div>
        <p
          style={{
            color: "white",
            wordBreak: !showMore ? "break-all" : "normal",
            fontSize: "18px",
          }}
        >
          {reviewText}
        </p>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              color: "white",
              fontSize: "18px",
              border: "none",
              outline: "none",
              cursor: "pointer",
              fontFamily: "Raleway",
            }}
            onClick={() => setShowMore((previous) => !previous)}
          >
            <i>{showMore ? "Show less" : "Show more"}</i>
          </button>
        </div>
      </div>
    </div>
  );
};
