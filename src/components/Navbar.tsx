import React, { useState } from "react";

import { useNavigate, useMatch, useSearchParams } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const match = useMatch({ path: "/discover" });
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, _] = useSearchParams();

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/discover?search=${searchValue}`);
  };

  return (
    <div style={{ backgroundColor: "#385154", width: "100%" }}>
      <nav style={{ paddingLeft: "0.5rem" }}>
        <div
          className="navbar"
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            color: "white",

            paddingLeft: "0.5rem",
          }}
        >
          <h4 style={{ fontSize: "40px", color: "white", margin: "none" }}>
            Movies
          </h4>
          <span
            style={{
              fontSize: "20px",
              cursor: "pointer",
              borderBottom: !match ? "2px solid #AD7D62" : "none",
            }}
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span
            style={{
              fontSize: "20px",
              cursor: "pointer",
              borderBottom: match ? "2px solid #AD7D62" : "none",
            }}
            onClick={() => navigate("/discover")}
          >
            Discover
          </span>
          <form onSubmit={search}>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              defaultValue={searchParams.get("search") as string}
              placeholder="Search..."
              style={{
                marginRight: "1rem",
                backgroundColor: "#8CA3A6",
                border: "none",
                outline: "none",
                borderRadius: "15px",
                padding: "0.5rem",
              }}
              className="search-field"
            />
            {searchParams.get("search") && (
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  searchParams.delete("search");
                }}
              >
                X
              </button>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
};
