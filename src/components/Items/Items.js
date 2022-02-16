import React, { useEffect } from "react";
import Item from "./Item/Item";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Items() {
  const items = useSelector((state) => state.items);
  const selectedGender = useSelector((state) => state.selectedGender);
  const classes = useStyles();

  useEffect(() => { }, [selectedGender]);

  return !items.length ? (
    <CircularProgress />
  ) : (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
    >
      {selectedGender == "F" || selectedGender == "All" ?
        items
          .filter((item) => item.name.includes("Runner"))
          .map((filteredItem) => (
            <div
              key={filteredItem._id}
              style={{
                margin: "15px auto",
                width: "90%",
              }}
            >
              <Link to={`/${window.location.pathname.split('/')[1]}/${filteredItem._id}`}>
                <Item item={filteredItem} />
              </Link>
            </div>
          ))
        : null}

      {selectedGender == "All"
        ? items.filter((item) => !item.name.includes("Runner")).map((filteredItem) => (
          <div
            key={filteredItem._id}
            style={{
              margin: "15px auto",
              width: "90%",
            }}
          >
            <Link to={`/${window.location.pathname.split('/')[1]}/${filteredItem._id}`}>
              <Item item={filteredItem} />
            </Link>
          </div>
        ))
        : null}
      {items
        .filter((item) => item.gender == selectedGender && !item.name.includes("Runner"))
        .map((filteredItem) => (
          <div
            key={filteredItem._id}
            style={{
              margin: "15px auto",
              width: "90%",
            }}
          >
            <Link to={`/${window.location.pathname.split('/')[1]}/${filteredItem._id}`}>
              <Item item={filteredItem} />
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Items;
