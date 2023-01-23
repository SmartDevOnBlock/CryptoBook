"use strict";

var hre = require("hardhat");

function main() {
  var Contact, contact;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(hre.ethers.getContractFactory("Contact"));

        case 2:
          Contact = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(Contact.deploy());

        case 5:
          contact = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(contact.deployed());

        case 8:
          console.log("Contact deployed to:", contact.address);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

main().then(function () {
  return process.exit(0);
})["catch"](function (error) {
  console.error(error);
  process.exit(1);
});