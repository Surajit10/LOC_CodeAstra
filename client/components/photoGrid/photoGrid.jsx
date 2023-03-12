import Masonry from "react-masonry-css";
import { Avatar, List } from "antd";
import { Image } from "antd";
import styles from "./photo.module.scss";
import "https://checkout.razorpay.com/v1/checkout.js";
import { Button, Space } from "antd";
import { saveAs } from "file-saver";
import { useState } from "react";

const PhotoGrid = ({ photos }) => {
  const images = [];
  const [payurl,setpayurl] = useState(null);

  (async () => {
    // https://source.unsplash.com/random/{width}x{height}
    function generateRandomImage() {
      const width = Math.floor(Math.random() * 1000) + 100;
      const height = Math.floor(Math.random() * (400 - 400 + 1)) + 300;
      const imageURL = `https://picsum.photos/${width}/${height}`;
      return imageURL;
    }

    for (let i = 0; i <= 20; i++) {
      images.push({
        url: generateRandomImage(),
        details: "random text",
        creator: {
          name: "Surajit",
          avatar:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1580&q=80",
          id: "640c5c509effee8dd0d885c0",
        },
      });
    }

    for (let i = 0; i <= photos.length; i++) {
      images.push({
        url: photos[i].id_featured,
        details: photos[i].description,
        creator: {
          name: photos[i].creator.name,
          avatar:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1580&q=80",
          id: photos[i].creator._id,
        },
      });
    }
  })();

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    992: 3,
    768: 2,
    576: 1,
  };

  var options = {
    key: "rzp_test_YH6QHLXnNMCxs0", // Enter the Key ID generated from the Dashboard
    amount: "1000",
    currency: "INR",
    description: "Acme Corp",
    image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
    prefill: {
      email: "gaurav.kumar@example.com",
      contact: +919900000000,
    },
    config: {
      display: {
        blocks: {
          utib: {
            //name for Axis block
            name: "Pay using Axis Bank",
            instruments: [
              {
                method: "card",
                issuers: ["UTIB"],
              },
              {
                method: "netbanking",
                banks: ["UTIB"],
              },
            ],
          },
          other: {
            //  name for other block
            name: "Other Payment modes",
            instruments: [
              {
                method: "card",
                issuers: ["ICIC"],
              },
              {
                method: "netbanking",
              },
            ],
          },
        },
        hide: [
          {
            method: "upi",
          },
        ],
        sequence: ["block.utib", "block.other"],
        preferences: {
          show_default_blocks: false, // Should Checkout show its default blocks?
        },
      },
    },
    handler: function (response) {
      console.log(response.razorpay_payment_id);
      saveAs(payurl, "download_image.jpg"); 
    },
    modal: {
      ondismiss: function () {
        if (confirm("Are you sure, you want to close the form?")) {
          txt = "You pressed OK!";
          console.log("Checkout form closed by the user");
        } else {
          txt = "You pressed Cancel!";
          console.log("Complete the Payment");
        }
      },
    },
  };
  var rzp1 = new Razorpay(options);
  // document.getElementById("rzp-button1").onclick = function (e) {
  //   rzp1.open();
  //   e.preventDefault();
  // };


  const imageElements = () => {
    return images.map((imageDetails, i) => {
      return (
        <div key={i} id={i} className={styles.imageBox}>
          <Image
            className={styles.image}
            width="100%"
            src={imageDetails.url}
            alt={imageDetails.details}
          />
          <div className={styles.imageInfo}>
            <List
              itemLayout="horizontal"
              dataSource={[{ title: imageDetails.creator.name }]}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={imageDetails.creator.avatar} />}
                    title={
                      <div>
                        <a
                          style={{ color: "white" }}
                          href={`/photographer/${imageDetails.creator.id}`}
                        >
                          {item.title}
                        </a>
                        <Button id="rzp-button1" type="primary"
                          onClick={function () {
                            setpayurl(imageDetails.url);
                            console.log(imageDetails.url);
                            rzp1.open();
                          }}>
                          Buy
                        </Button>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {imageElements()}
      </Masonry>
    </div>
  );
};

export default PhotoGrid;
