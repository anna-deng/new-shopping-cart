import './options.css';
import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (
      <div className="options">
        <div className="item">
          <img className="image" src={require("../static/data/products/17.jpg")}/>
          <p className="itemname">Cat Tee Black T-Shirt</p>
          <p className="price">$10.90</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/16.jpg")}/>
          <p className="itemname">Dark Thug Blue-Navy T-Shirt</p>
          <p className="price">$29.45</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/15.jpg")}/>
          <p className="itemname">Sphynx Tie Dye Wine T-Shirt</p>
          <p className="price">$9</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/14.jpg")}/>
          <p className="itemname">Skuul</p>
          <p className="price">$14</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/13.jpg")}/>
          <p className="itemname">Wine Skul T-Shirt</p>
          <p className="price">$13.25</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/12.jpg")}/>
          <p className="itemname">Short Sleeve T-Shirt</p>
          <p className="price">$75</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/11.jpg")}/>
          <p className="itemname">Cat Tee Black T-Shirt</p>
          <p className="price">$10.90</p>
          <p className="sizes">S/M/L</p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/10.jpg")}/>
          <p className="itemname">Sphynx Tie Dye Grey T-Shirt</p>
          <p className="price">$10.90</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/9.jpg")}/>
          <p className="itemname">Danger Knife Grey</p>
          <p className="price">$14.90</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/8.jpg")}/>
          <p className="itemname">White DGK Script Tee</p>
          <p className="price">$14.90</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/7.jpg")}/>
          <p className="itemname">Born On The Streets</p>
          <p className="price">$25.90</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/6.jpg")}/>
          <p className="itemname">Tso 3D Short Sleeve T-Shirt A</p>
          <p className="price">$10.90</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/5.jpg")}/>
          <p className="itemname">Man Tie Dye Cinza Grey T-Shirt</p>
          <p className="price">$49.90</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/4.jpg")}/>
          <p className="itemname">Crazy Monkey Black T-Shirt</p>
          <p className="price">$22.50</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/3.jpg")}/>
          <p className="itemname">Tso 3D Black T-Shirt</p>
          <p className="price">$18.70</p>
          <p className="sizes">S/M/L</p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/2.jpg")}/>
          <p className="itemname">Crazy Monkey Grey</p>
          <p className="price">$134.90</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
        <div className="item">
          <img className="image" src={require("../static/data/products/1.jpg")}/>
          <p className="itemname">Born On The Streets Black T-Shirt</p>
          <p className="price">$49</p>
          <p className="sizes">S/M/L
              <a className='cartbutton' href=''>+ADD TO CART</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Options;
