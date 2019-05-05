"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HullType;
(function (HullType) {
    HullType[HullType["Military"] = 0] = "Military";
    HullType[HullType["Civilian"] = 1] = "Civilian";
})(HullType = exports.HullType || (exports.HullType = {}));
var HullSize;
(function (HullSize) {
    HullSize["SmallCraft"] = "Small Craft";
    HullSize["LightShip"] = "Light Ship";
    HullSize["MediumShip"] = "Medium Ship";
    HullSize["HeavyShip"] = "Heavy Ship";
    HullSize["SuperHeavyShip"] = "Super-heavy Ship";
})(HullSize = exports.HullSize || (exports.HullSize = {}));
var Toughness;
(function (Toughness) {
    Toughness["Good"] = "(Good)";
    Toughness["Small"] = "Small";
    Toughness["Light"] = "Light";
    Toughness["Medium"] = "Medium";
    Toughness["Heavy"] = "Heavy";
    Toughness["SuperHeavy"] = "Super Heavy";
})(Toughness = exports.Toughness || (exports.Toughness = {}));
var Hull = /** @class */ (function () {
    function Hull(_name, _hullType, _hullSize, _hullPoints, _toughness, _targetModifier, _maneuverability, _stun, _wound, _mortal, _critical, _crew, _cost) {
        this._name = _name;
        this._hullType = _hullType;
        this._hullSize = _hullSize;
        this._hullPoints = _hullPoints;
        this._toughness = _toughness;
        this._targetModifier = _targetModifier;
        this._maneuverability = _maneuverability;
        this._stun = _stun;
        this._wound = _wound;
        this._mortal = _mortal;
        this._critical = _critical;
        this._crew = _crew;
        this._cost = _cost;
        if (this.hullPoints <= 0) {
            throw new Error("Hull points must be positive");
        }
        if (this.maneuverability < 0) {
            throw new Error("Maneuverability must be 0 or greater");
        }
        if (this.stun <= 0) {
            throw new Error("Stun must be positive");
        }
        if (this.wound <= 0) {
            throw new Error("Wound must be positive");
        }
        if (this.stun <= 0) {
            throw new Error("Mortal must be positive");
        }
        if (this.stun <= 0) {
            throw new Error("Critical must be positive");
        }
        if (this.crew <= 0) {
            throw new Error("Crew must be positive");
        }
    }
    Object.defineProperty(Hull.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "hullType", {
        get: function () {
            return this._hullType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "hullSize", {
        get: function () {
            return this._hullSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "hullPoints", {
        get: function () {
            return this._hullPoints;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "bonusHullPoints", {
        get: function () {
            var multiplier;
            switch (this._hullSize) {
                case HullSize.SmallCraft: {
                    multiplier = 0;
                    break;
                }
                case HullSize.LightShip: {
                    multiplier = 0.1;
                    break;
                }
                case HullSize.MediumShip: {
                    multiplier = 0.2;
                    break;
                }
                case HullSize.HeavyShip: {
                    multiplier = 0.3;
                    break;
                }
                case HullSize.SuperHeavyShip: {
                    multiplier = 0.5;
                    break;
                }
                default: {
                    multiplier = 0;
                }
            }
            return this.hullPoints * multiplier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "toughness", {
        get: function () {
            return this._toughness;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "targetModifier", {
        get: function () {
            return this._targetModifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "maneuverability", {
        get: function () {
            return this._maneuverability;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "stun", {
        get: function () {
            return this._stun;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "wound", {
        get: function () {
            return this._wound;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "mortal", {
        get: function () {
            return this._mortal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "critical", {
        get: function () {
            return this._critical;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "crew", {
        get: function () {
            return this._crew;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hull.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: true,
        configurable: true
    });
    return Hull;
}());
exports.Hull = Hull;
var HullFactory = /** @class */ (function () {
    function HullFactory() {
    }
    HullFactory.getDefault = function () {
        var hulls = [];
        hulls.push(new Hull("Fighter", HullType.Military, HullSize.SmallCraft, 10, Toughness.Small, 3, 4, 5, 5, 3, 2, 1, 350000));
        hulls.push(new Hull("Strike fighter", HullType.Military, HullSize.SmallCraft, 15, Toughness.Small, 3, 4, 8, 8, 4, 2, 2, 500000));
        hulls.push(new Hull("Cutter", HullType.Military, HullSize.SmallCraft, 20, Toughness.Small, 2, 4, 10, 10, 5, 3, 4, 600000));
        return hulls;
    };
    return HullFactory;
}());
exports.HullFactory = HullFactory;
//# sourceMappingURL=hull.js.map