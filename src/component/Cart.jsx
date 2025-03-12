/* eslint-disable react/prop-types */
import styles from "./Netflix.module.css"; //css module

import styled from "styled-components"; //stled components
export const Cart = ({ data }) => {
  // console.log(data);
  
  // export const Cart = (props) => {
  // console.log(props);
  // below is to destructuring keys
  const { urlToImage, author, description, publishedAt, url } = data;
  // destructuring of Data
  // const { data } = props; //to remove `props.data` from below

  const BttonReact = styled.button({
    //here `button` is the tagname
    padding: "12px",
    border: "none",
    fontSize: "18px",
    backgroundColor: "#cbcbcbde",
    color:`${description.length<=90 ? "#FF0000":"#00000 "}`,
    transition: "all 0.9s ease",
    borderRadius: "10px",
  });

  // or
  // const button_style = {

  //   padding: "12px",
  //   border: "none",
  //   fontSize: "18px",
  //   backgroundColor: "#cbcbcbde",
  //   color: "black",
  //   transition: "all 0.9s ease",
  //   borderRadius: "10px",
  // };

  // const handleClick = (e) => {
  //   // Toggle button text when clicked
  //   const button = e.target;
  //   console.log(button);

  //   if (button.innerText === "See More") {
  //     button.innerText = "Disabled";
  //     button.style.backgroundColor = "#d3d3d3"; // Change background to indicate disabled state
  //     button.style.cursor = "not-allowed"; // Change cursor to show it's disabled
  //   } else {
  //     button.innerText = "See More";
  //     button.style.backgroundColor = "#cbcbcbde"; // Restore the original background color
  //     button.style.cursor = "pointer"; // Restore cursor to pointer
  //   }
  // }
  return (
    <>
      {publishedAt.substring(0, 4) === "2025" ? (
        <div className={styles.card}>
          {/* <div className="card"> */}

          <div className={styles.img}>
            {/* <div className="img"> */}
            <img style={{ width: "100%" }} src={urlToImage} />
            {/* {publishedAt.substring(0, 4) === "2025" ? (
              <span className="show">
                <strong>{publishedAt}</strong>
              </span>
            ) : (
              <span className="disable">
                <strong>{publishedAt}</strong>
              </span>
            )} */}
            {/* when yu have to use conditional statement and a class both yu have to make as below code  condition styling */}
            <span
              className={`date ${
                publishedAt.substring(0, 4) === "2025"
                  ? styles.show
                  : styles.disable
              }`}
            >
              <strong>{publishedAt}</strong>
            </span>
          </div>
          <div>
            <span>
              <strong>{author}</strong>
            </span>
            <p className="{stypara} text-indigo-400">
              <a href={url}>{description.slice(0, 90)}...</a>
            </p>

            {publishedAt.substring(0, 4) === "2025" ? (
              <BttonReact id="btn">See More</BttonReact>
            ) : (
              // <button id="btn" style={{ ...button_style }}>
              //   See More
              // </button>
              <BttonReact id="btn">Old News</BttonReact>
              // <button id="btn" style={{ ...button_style }}>
              //   Old News
              // </button>
            )}
            {/* <button id="btn" style={{ ...button_style }}>
              See More
            </button> */}
            {/* <button id="btn" style={{ ...button_style }} onClick={handleClick}> 
              See More
            </button> */}
          </div>
        </div>
      ) : (
        <div className="card disabled">
          <div className="img">
            <img style={{ width: "100%" }} src={urlToImage} />
            {publishedAt.substring(0, 4) === "2025" ? (
              <span className="show">
                <strong>{publishedAt}</strong>
              </span>
            ) : (
              <span className="disable">
                <strong>{publishedAt}</strong>
              </span>
            )}
          </div>
          <div>
            <span>
              <strong>{author}</strong>
            </span>
            <p>{description.slice(0, 90)}...</p>
            {/* styled components */}
            <BttonReact
              id="btn"
              disabled // This will disable the button
            >
              Old News
            </BttonReact>
            {/* <button
              id="btn"
              style={{ ...button_style }}
              disabled // This will disable the button
            >
              Old News
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};
