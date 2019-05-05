"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Technology;
(function (Technology) {
    Technology["GravityManipulation"] = "G";
    Technology["DarkMatterTech"] = "D";
    Technology["AntimatterTech"] = "A";
    Technology["MatterCodding"] = "M";
    Technology["FusionTech"] = "F";
    Technology["QuantumManipulation"] = "Q";
    Technology["MatterTransmission"] = "T";
    Technology["SuperMaterials"] = "S";
    Technology["PsiTech"] = "P";
    Technology["EnergyTransformation"] = "X";
    Technology["ComputerTech"] = "C";
})(Technology = exports.Technology || (exports.Technology = {}));
var ShipComponent = /** @class */ (function () {
    function ShipComponent(_name, _pl, _technologies, _cost) {
        this._name = _name;
        this._pl = _pl;
        this._technologies = _technologies;
        this._cost = _cost;
        if (this.name.length < 1) {
            throw new Error("Name of the component can't be empty");
        }
        if (this.pl < 5 || this.pl > 9) {
            throw new Error("Progress Level (PL) of the component must be between 5 and 9");
        }
        if (this.cost < 0) {
            throw new Error("Cost of the compoentn can't be negative.");
        }
    }
    Object.defineProperty(ShipComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShipComponent.prototype, "pl", {
        get: function () {
            return this._pl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShipComponent.prototype, "technologies", {
        get: function () {
            return this._technologies;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShipComponent.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: true,
        configurable: true
    });
    return ShipComponent;
}());
exports.ShipComponent = ShipComponent;
//# sourceMappingURL=shipComponent.js.map