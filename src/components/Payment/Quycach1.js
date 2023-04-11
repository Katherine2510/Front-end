import "../../css/bootstrap.min1.css";
import "../../css/blue.css";
import React, { useState } from "react";
import ZaloPay from "./Thanhtoan";

class Quycach1 extends React.Component {
  render() {
    return (
      <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>ZaloPay Gateway | Quy Cách</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    body {\n        padding:20px;\n    }\n    \n    .icheckbox_flat-blue, .iradio_flat-blue {\n        top:-2px;\n        margin-right:5px;\n    }\n    .txtGray {color:#798594;}\n",
          }}
        />
        <p>Vui lòng chọn hình thức thanh toán:</p>
        <div className="mb-1">
          <label>
            <input type="radio" name="iCheck" className="iradio_flat-blue" /> Ví{" "}
            <img src="images/logo-zalopay.svg" alt />
          </label>
        </div>
        <div className="mb-1">
          <label>
            <input type="radio" name="iCheck" className="iradio_flat-blue" />{" "}
            Visa, Mastercard, JCB{" "}
            <span className="txtGray">(qua cổng ZaloPay)</span>
          </label>
        </div>
        <div className="mb-1">
          <label>
            <input
              type="radio"
              name="iCheck"
              className="iradio_flat-blue"
              defaultChecked
            />{" "}
            Thẻ ATM <span className="txtGray">(qua cổng ZaloPay)</span>
          </label>
        </div>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/icheck.min.js"></script>
       
        
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
    );
  }
}
export default Quycach1;