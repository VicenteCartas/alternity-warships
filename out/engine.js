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
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine(name, pl, technologies, _powerConsumed, _minimumSize, _baseCost, cost, _acceleration5, _acceleration10, _acceleration15, _acceleration20, _acceleration30, _acceleration40, _acceleration50, _fuelEfficiency, _fuelCost) {
        var _this = _super.call(this, name, pl, technologies, cost) || this;
        _this._powerConsumed = _powerConsumed;
        _this._minimumSize = _minimumSize;
        _this._baseCost = _baseCost;
        _this._acceleration5 = _acceleration5;
        _this._acceleration10 = _acceleration10;
        _this._acceleration15 = _acceleration15;
        _this._acceleration20 = _acceleration20;
        _this._acceleration30 = _acceleration30;
        _this._acceleration40 = _acceleration40;
        _this._acceleration50 = _acceleration50;
        _this._fuelEfficiency = _fuelEfficiency;
        _this._fuelCost = _fuelCost;
        return _this;
    }
    return Engine;
}(shipComponent_1.ShipComponent));
exports.Engine = Engine;
var EngineFactory = /** @class */ (function () {
    function EngineFactory() {
    }
    EngineFactory.getDefault = function () {
        var engines = [];
        return engines;
    };
    return EngineFactory;
}());
exports.EngineFactory = EngineFactory;
//# sourceMappingURL=engine.js.map