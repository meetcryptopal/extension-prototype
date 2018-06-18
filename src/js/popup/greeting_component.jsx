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
import icon from "../../img/cryptopal-logo.png";
import _favicon from "../../img/icon-128.png"; // if we don't import this it doesn't show up in the build

const store = window.chrome.storage.local;

const styles = {
  pkButton: {
    marginLeft: "10px"
  },
  container: {
    margin: "20px 10px 20px 10px",
    minWidth: "500px"
    // display: "flex", justifyContent: "center", alignItems: "center"
  },

  privateKeySection: {
    marginRight: "10px"
  }
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: "", newPw: null };
  }

  componentDidMount() {
    checkOrGenPass((pw, isNewPw) => {
      if (isNewPw) {
        this.setState({ newPw: pw });
      }
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
    if (!!this.state.newPw) {
      return (
        <div style={styles.container}>
          <div style={styles.content}>
            <p>{this.state.newPw}</p>
            <button
              onClick={() => this.setState({ newPw: null })}
              style={styles.pkButton}
            >
              I have copied my private key
            </button>
          </div>
          <p>
            WARNING: Make sure to copy and save your private key! It won't be
            displayed here again. If you lose your private key, please delete
            and re-install the extension.
          </p>
        </div>
      );
    } else {
      return (
        <div style={styles.container}>
          <h1 className="row" style={styles.heading}>
            <img src={icon} alt="CryptoPal" />
          </h1>

          <br />
          <br />

          <div style={styles.content}>
            <div className="row" style={styles.privateKeySection}>
              <label htmlFor="">Private Key</label>
              <input
                className="ten columns"
                type="password"
                onChange={this.updateKey.bind(this)}
              />
            </div>

            <br />
            <br />

            <div className="row">
              <button
                className="btn ten columns"
                onClick={this.downloadEncrypted}
                style={styles.button}
              >
                View Encrypted Data
              </button>
              <button
                className="btn ten columns"
                onClick={this.downloadJson.bind(this)}
                style={styles.button}
              >
                View Data JSON
              </button>
              <button
                className="btn ten columns"
                onClick={this.downloadCsvs.bind(this)}
                style={styles.button}
              >
                View Data CSVs
              </button>
              {/*
              <button
                onClick={this.amazonOrders.bind(this)}
                style={styles.button}
              >
                Download Amazon Orders
              </button>
              <button
                onClick={this.browsingData.bind(this)}
                style={styles.button}
              >
                Download Browsing History
              </button>
              <button
                onClick={this.shopifyOrders.bind(this)}
                style={styles.button}
              >
                Download Shopify
              </button>
              <button
                onClick={this.facebookLikes.bind(this)}
                style={styles.button}
              >
                Download Facebook Likes
              </button>
              <button
                onClick={this.twitterLikes.bind(this)}
                style={styles.button}
              >
                Download Twitter Likes
              </button>
              <button
                onClick={this.twitterRetweets.bind(this)}
                style={styles.button}
              >
                Download Twitter Retweets
              </button>


            <button onClick={this.download.bind(this)}>Download LinkedIn</button>
            <button onClick={this.download.bind(this)}>Download Location</button>

            <button onClick={this.download.bind(this)}>Download Twitter</button>
            */}
            </div>
          </div>

          <br />
          <br />

          <div className="row" style={styles.content}>
            <button
              className="btn delete ten columns"
              onClick={this.deleteData}
            >
              Delete Data
            </button>
          </div>

          <br />
          <br />

          <p className="row">
            If you lost your private key, please delete and re-install the
            extension.
          </p>
        </div>
      );
    }
  }
}
