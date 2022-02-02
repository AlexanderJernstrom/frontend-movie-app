import React from "react";

interface Props {
  description: string;
  genres: { name: string; id: number }[];
  rating: number;
}

export const MovieDescription: React.FC<Props> = ({
  rating,
  genres,
  description,
}) => {
  return (
    <div style={{ width: "60%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: "white", fontSize: "30px" }}>Description</h4>
        <span style={{ color: "white", fontSize: "30px" }}>{rating}</span>
      </div>
      <div style={{ border: "2px solid #AD7D62" }}></div>

      <p style={{ color: "white", fontSize: "30px" }}>{description}</p>
      <div
        style={{
          display: "flex",
          width: "50%",
          gap: "0.5rem",
        }}
      >
        {genres.map((genre) => (
          <div
            style={{
              backgroundColor: "#385154",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
          >
            <span style={{ color: "white" }}>{genre.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
