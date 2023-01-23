"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _provider = _interopRequireDefault(require("./provider"));

var _ethers = require("ethers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var address = "0xbEab1fe77cC0dA54Cc4d4C9c78b6b9a5E2296718";
var abi = [{
  "inputs": [{
    "internalType": "string",
    "name": "_telegram",
    "type": "string"
  }],
  "name": "createContact",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "string",
    "name": "_telegram",
    "type": "string"
  }, {
    "internalType": "string",
    "name": "_discord",
    "type": "string"
  }],
  "name": "createContact",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "name": "ownerToContact",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}];
var ethABI = ["function ownerToContact(address) public view returns (address)", "function createContact(string , string) public", "function createContact(string) public"];
var contactFactory = new _ethers.ethers.Contract(address, ethABI, _provider["default"]);
var _default = contactFactory;
exports["default"] = _default;