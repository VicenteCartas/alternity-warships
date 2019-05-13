import React from "react";
import { Ship } from "../model/ship";
import { HullSelector } from "./hullSelector";
import { ShipName } from "./shipName";

interface IShipProps {
    ship: Ship;
}

export function ShipPanel(props: IShipProps) {
    return (
        <div>
            <ShipName updateName={(newName: string) => props.ship.name = newName} />
            <HullSelector />
        </div>
    );
}
