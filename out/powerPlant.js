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
var PowerPlant = /** @class */ (function (_super) {
    __extends(PowerPlant, _super);
    function PowerPlant(name, pl, technologies, _power, _baseCost, cost, _minimumSize, _usesFuel, _fuelCost, _fuelEfficiency) {
        var _this = _super.call(this, name, pl, technologies, cost) || this;
        _this._power = _power;
        _this._baseCost = _baseCost;
        _this._minimumSize = _minimumSize;
        _this._usesFuel = _usesFuel;
        _this._fuelCost = _fuelCost;
        _this._fuelEfficiency = _fuelEfficiency;
        if (_this.power < 0) {
            throw new Error("Power must be 0 or greater");
        }
        if (_this.baseCost <= 0) {
            throw new Error("Base cost must be a positive number");
        }
        if (_this.minimumSize < 0) {
            throw new Error("Minimum size must be 0 or greater");
        }
        if (_this.usesFuel && _this.fuelCost <= 0) {
            throw new Error("Fuel cost must be a positive number");
        }
        if (_this.usesFuel && _this.fuelEfficiency <= 0) {
            throw new Error("Fuel efficiency must be a positive number");
        }
        return _this;
    }
    Object.defineProperty(PowerPlant.prototype, "power", {
        get: function () {
            return this._power;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PowerPlant.prototype, "baseCost", {
        get: function () {
            return this._baseCost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PowerPlant.prototype, "minimumSize", {
        get: function () {
            return this._minimumSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PowerPlant.prototype, "usesFuel", {
        get: function () {
            if (this._usesFuel) {
                return this._usesFuel;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PowerPlant.prototype, "fuelCost", {
        get: function () {
            if (this._fuelCost) {
                return this._fuelCost;
            }
            return "-";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PowerPlant.prototype, "fuelEfficiency", {
        get: function () {
            if (this._fuelEfficiency) {
                return this._fuelEfficiency;
            }
            return "-";
        },
        enumerable: true,
        configurable: true
    });
    return PowerPlant;
}(shipComponent_1.ShipComponent));
var PowerPlantFactory = /** @class */ (function () {
    function PowerPlantFactory() {
    }
    PowerPlantFactory.getDefault = function () {
        var powerPlants = [];
        // PL 6 Power Plants
        powerPlants.push(new PowerPlant("Solar Cell", 6, [shipComponent_1.Technology.SuperMaterials], 1.5, 500000, 200000, 4));
        powerPlants.push(new PowerPlant("Fission Generator", 6, [], 1.5, 1000000, 100000, 4));
        powerPlants.push(new PowerPlant("Fusion Generator", 6, [shipComponent_1.Technology.FusionTech], 2, 1000000, 200000, 2, true, 1000, 200));
        powerPlants.push(new PowerPlant("Grav-fusion Cell", 6, [shipComponent_1.Technology.GravityManipulation], 2.5, 2000000, 200000, 4, true, 1000, 300));
        powerPlants.push(new PowerPlant("Fuel Tank", 6, [], 0, 50000, 10000, 0));
        return powerPlants;
    };
    return PowerPlantFactory;
}());
exports.PowerPlantFactory = PowerPlantFactory;
//# sourceMappingURL=powerPlant.js.map