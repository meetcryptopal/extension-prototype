import React from "react";
import FileSaver from "file-saver";

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
  downloadData() {
    store.get(null, data => {
      console.log("DATA: ", data);
      const exportedData = data || {};
      const dataJson = JSON.stringify(data);

      // var dataBlob = new Blob([dataJson], { type: "text/plain;charset=utf-8" });
      // FileSaver.saveAs(dataBlob, "cryptopal.txt");

      var dataBlob = new Blob([dataJson], { type: "application/json" });
      FileSaver.saveAs(dataBlob, "cryptopal.json");
    });
  }

  deleteData() {
    store.clear(() => {
      console.log("Delete successful");
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>CryptoPal</h1>

        <div style={styles.content}>
          <label htmlFor="">Private Key</label>
          <input type="password" />
          <button onClick={this.downloadData}>Download Data</button>
        </div>

        <div style={styles.content}>
          <button onClick={this.deleteData}>Delete Data</button>
        </div>
      </div>
    );
  }
}
