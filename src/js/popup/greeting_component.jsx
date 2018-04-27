import React from "react";
import FileSaver from "file-saver";

import icon from "../../img/icon-128.png";

const styles = {
  container: {
    margin: "20px 10px 20px 10px",
    minWidth: "500px"
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center"
  },
  heading: {
    textAlign: "center",
    flex: "1",
    color: "#123"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default class extends React.Component {
  downloadData() {
    console.log(chrome.storage);
    console.log(window.chrome.storage);
    window.chrome.storage.sync.get(null, data => {
      console.log("DATA: ", data);
      const dataJson = JSON.stringify(data);
      var dataBlob = new Blob([dataJson], { type: "text/plain;charset=utf-8" });
      FileSaver.saveAs(dataBlob, "cryptopal.txt");
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>CryptoPal</h1>
        <div style={styles.content}>
          <button onClick={this.downloadData}>Download Data</button>
        </div>
      </div>
    );
  }
}
