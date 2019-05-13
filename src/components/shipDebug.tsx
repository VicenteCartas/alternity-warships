import React from "react";
import { Ship } from "../model/ship";

interface IShipProps {
    ship: Ship;
}

export function ShipDebug(props: IShipProps) {
    return (
        <div>
            <label>Ship name: {props.ship.name}</label>
            <label>Ship cost: {props.ship.cost}</label>
            <label>Ship hull (used/total): {props.ship.usedHull}/{props.ship.totalHull}</label>
        </div>
    );
}