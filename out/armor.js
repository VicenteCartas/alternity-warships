"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shipComponent_1 = require("./shipComponent");
var ArmorType;
(function (ArmorType) {
    ArmorType[ArmorType["Light"] = 0] = "Light";
    ArmorType[ArmorType["Medium"] = 1] = "Medium";
    ArmorType[ArmorType["Heavy"] = 2] = "Heavy";
    ArmorType["SuperHeavy"] = "Super-heavy";
})(ArmorType = exports.ArmorType || (exports.ArmorType = {}));
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor(name, pl, _armorType, technologies, _li, _hi, _en, _hullPercentage, cost) {
        var _this = _super.call(this, name, pl, technologies, cost) || this;
        _this._armorType = _armorType;
        _this._li = _li;
        _this._hi = _hi;
        _this._en = _en;
        _this._hullPercentage = _hullPercentage;
        if (_this.li.length < 1) {
            throw new Error("LI value of the armor can't be empty");
        }
        if (_this.hi.length < 1) {
            throw new Error("HI value of the armor can't be empty");
        }
        if (_this.en.length < 1) {
            throw new Error("EN value of the armor can't be empty");
        }
        if (_this.hullPercentage <= 0) {
            throw new Error("Hull Percentage must be a positive number");
        }
        return _this;
    }
    Object.defineProperty(Armor.prototype, "armorType", {
        get: function () {
            return this._armorType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "li", {
        get: function () {
            return this._li;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "hi", {
        get: function () {
            return this._hi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "en", {
        get: function () {
            return this._en;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "hullPercentage", {
        get: function () {
            return this._hullPercentage;
        },
        enumerable: true,
        configurable: true
    });
    return Armor;
}(shipComponent_1.ShipComponent));
exports.Armor = Armor;
var ArmorFactory = /** @class */ (function () {
    function ArmorFactory() {
    }
    ArmorFactory.getDefault = function () {
        var armors = [];
        // PL 6 Armors
        armors.push(new Armor("Polymeric", 6, ArmorType.Light, [], "d4-1", "d4-1", "d4-2", 2.5, 50000));
        armors.push(new Armor("Reflective", 6, ArmorType.Light, [], "d4-3", "d4-2", "d6-1", 2.5, 50000));
        armors.push(new Armor("Alloy", 6, ArmorType.Medium, [], "d4+1", "d4+1", "d4", 5, 150000));
        armors.push(new Armor("Polymeric", 6, ArmorType.Medium, [], "d4", "d4", "d4-1", 5, 100000));
        armors.push(new Armor("Reflective", 6, ArmorType.Medium, [], "d4-2", "d4-1", "d6", 5, 100000));
        armors.push(new Armor("Alloy", 6, ArmorType.Heavy, [], "d6+1", "d6+1", "d6", 10, 300000));
        armors.push(new Armor("Reflective", 6, ArmorType.Heavy, [], "d4", "d4", "d8", 10, 200000));
        armors.push(new Armor("Alloy", 6, ArmorType.SuperHeavy, [], "d6+3", "d6+3", "d6+2", 20, 600000));
        // PL 7 Armors
        return armors;
    };
    return ArmorFactory;
}());
exports.ArmorFactory = ArmorFactory;
//# sourceMappingURL=armor.js.map