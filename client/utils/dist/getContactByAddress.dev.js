"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _contactFactory = _interopRequireDefault(require("../contactFactory"));

var _Contact = _interopRequireDefault(require("../Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getContactByAddress = function getContactByAddress(address) {
  var contactAddress, contact, telegram, discord, description;
  return regeneratorRuntime.async(function getContactByAddress$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_contactFactory["default"].ownerToContact(address));

        case 2:
          contactAddress = _context.sent;

          if (!(contactAddress === "0x0000000000000000000000000000000000000000")) {
            _context.next = 5;
            break;
          }

          throw new Error("Пользователя с таким адресом не обнаружено!");

        case 5:
          console.log("contactAddress", contactAddress);
          contact = (0, _Contact["default"])(contactAddress);
          _context.next = 9;
          return regeneratorRuntime.awrap(contact.telegram());

        case 9:
          telegram = _context.sent;
          console.log("TelegramAddress: ", telegram);
          _context.next = 13;
          return regeneratorRuntime.awrap(contact.discord());

        case 13:
          discord = _context.sent;
          console.log("DiscordAddress: ", discord);
          _context.next = 17;
          return regeneratorRuntime.awrap(contact.description());

        case 17:
          description = _context.sent;
          console.log("Description: ", description);
          return _context.abrupt("return", {
            telegram: telegram,
            discord: discord,
            description: description
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = getContactByAddress;
exports["default"] = _default;