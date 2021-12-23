import React from "react";
import useStyles from "./styles";

function Item({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.indItem}>
      <div>
        {item.quantity === 0 ? (
          <div className={classes.soldOut}>Rasprodano</div>
        ) : null}
      </div>
      <img
        className={classes.image}
        src={item.selectedFile[0]}
        style={{ height: "40vh", objectFit: "cover" }}
      ></img>
      <div className={classes.aboutItem}>
        <h2 align="center" className={classes.itemName}>
          {item.name.length > 24 ? (
            <b style={{ fontSize: "15px", textDecoration: 'none', color: 'black' }}>{item.name}</b>
          ) : (
            <b style={{ textDecoration: 'none', color: 'black' }}>{item.name} </b>
          )}
        </h2>
        <h3 align="center" className={classes.itemPrice}>
          {item.discount > 0 ? (
            <div>
              <del style={{ marginRight: 10, color: "#969696" }}>
                {item.price.toFixed(0)}KM
              </del>
              <span style={{ fontSize: 16, fontWeight: "bold", textDecoration: 'none', color: 'black' }}>
                {(((100 - item.discount) / 100) * item.price).toFixed(0)}KM
              </span>
            </div>
          ) : (
            <span style={{ fontSize: 16, fontWeight: "bold", textDecoration: 'none', color: 'black' }}>
              {item.price}KM
            </span>
          )}
        </h3>
      </div>
    </div>
  );
}

export default Item;
