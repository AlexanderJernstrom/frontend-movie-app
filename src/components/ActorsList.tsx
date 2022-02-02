import React from "react";
import { Actor } from "../types/interfaces";
import { EmptyProfilePicture } from "./EmptyProfilePicture";

interface Props {
  actors: Actor[];
}

export const ActorsList: React.FC<Props> = ({ actors }) => {
  return (
    <div style={{ width: "60%" }}>
      <div>
        <h4 style={{ fontSize: "30px", color: "white" }}>Actors</h4>
        <div style={{ border: "2px solid #AD7D62" }}></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "100%",
          overflowX: "scroll",
        }}
      >
        {actors.map((actor) => (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {actor.profile_path === null ? (
              <EmptyProfilePicture />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              />
            )}
            <span
              style={{ color: "white", fontSize: "20px", textAlign: "center" }}
            >
              {actor.name}
            </span>
            <span style={{ color: "white" }}>{actor.character}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
