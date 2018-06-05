import React from "react";

import {
  downloadAmazonOrders,
  downloadBrowsing,
  downloadData,
  downloadDataRaw,
  downloadFacebookLikes,
  downloadShopifyOrders,
  downloadTwitterLikes,
  downloadTwitterRetweets,
  zipAll,
  checkOrGenPass
} from "../storage/store";
import icon from "../../img/icon-128.png";

const store = window.chrome.storage.local;

const styles = {
  container: {
    margin: "20px 10px 20px 10px",
    minWidth: "500px"
    // display: "flex", justifyContent: "center", alignItems: "center"
  },
  heading: {
    textAlign: "center",
    flex: "1",
    color: "#123"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  }
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: "" };

    checkOrGenPass(pw => {
      if (pw)
        return window.alert(
          `WARNING: Remember to keep this safe. If this is lost, you will lose access to your data!\n\nPRIVATE KEY:\n\n${pw}`
        );
    });
  }

  downloadJson() {
    downloadData(this.state.key);
  }

  downloadEncrypted() {
    downloadDataRaw();
  }

  downloadCsvs() {
    zipAll(this.state.key);
  }

  // CSV

  amazonOrders() {
    downloadAmazonOrders(this.state.key);
  }

  browsingData() {
    downloadBrowsing(this.state.key);
  }

  shopifyOrders() {
    downloadShopifyOrders(this.state.key);
  }

  facebookLikes() {
    downloadFacebookLikes(this.state.key);
  }

  twitterLikes() {
    downloadTwitterLikes(this.state.key);
  }

  twitterRetweets() {
    downloadTwitterRetweets(this.state.key);
  }

  // CSV END

  deleteData() {
    store.clear(() => {
      console.log("Delete successful");
    });
  }

  updateKey({ target: { value } }) {
    this.setState({ key: value });
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>CryptoPal</h1>

        <div style={styles.content}>
          <label htmlFor="">Private Key</label>
          <input type="password" onChange={this.updateKey.bind(this)} />
          <button onClick={this.downloadEncrypted}>
            Download Encrypted Data
          </button>
          <button onClick={this.downloadJson.bind(this)}>
            Download Data JSON
          </button>
          <button onClick={this.downloadCsvs.bind(this)}>
            Download Data CSVs
          </button>
          <button onClick={this.amazonOrders.bind(this)}>
            Download Amazon Orders
          </button>
          <button onClick={this.browsingData.bind(this)}>
            Download Browsing History
          </button>
          <button onClick={this.shopifyOrders.bind(this)}>
            Download Shopify
          </button>
          <button onClick={this.facebookLikes.bind(this)}>
            Download Facebook Likes
          </button>
          <button onClick={this.twitterLikes.bind(this)}>
            Download Twitter Likes
          </button>
          <button onClick={this.twitterRetweets.bind(this)}>
            Download Twitter Retweets
          </button>

          {/*
          <button onClick={this.download.bind(this)}>Download LinkedIn</button>
          <button onClick={this.download.bind(this)}>Download Location</button>

          <button onClick={this.download.bind(this)}>Download Twitter</button>
          */}
        </div>

        <div style={styles.content}>
          <button onClick={this.deleteData}>Delete Data</button>
        </div>
      </div>
    );
  }
}
