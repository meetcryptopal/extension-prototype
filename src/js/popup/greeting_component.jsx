import React from "react";

import { downloadData } from "../storage/store";
import icon from "../../img/icon-128.png";

const store = window.chrome.storage.sync;

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
  }

  download() {
    downloadData(this.state.key);
  }

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
          <button onClick={this.download.bind(this)}>Download Data JSON</button>
          <button onClick={this.download.bind(this)}>
            Download Amazon Orders
          </button>
          <button onClick={this.download.bind(this)}>Download Facebook</button>
          <button onClick={this.download.bind(this)}>Download LinkedIn</button>
          <button onClick={this.download.bind(this)}>Download Location</button>
          <button onClick={this.download.bind(this)}>Download Shopify</button>
          <button onClick={this.download.bind(this)}>Download Twitter</button>
          <button onClick={this.download.bind(this)}>Download Twitter</button>
        </div>

        <div style={styles.content}>
          <button onClick={this.deleteData}>Delete Data</button>
        </div>
      </div>
    );
  }
}
