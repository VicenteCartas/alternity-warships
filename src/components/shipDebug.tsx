import { Label, Stack } from "office-ui-fabric-react";
import React from "react";
import { Ship } from "../model/ship";

interface IShipProps {
    ship: Ship;
}

export function ShipDebug(props: IShipProps) {
    return (
        <div>
            <Stack tokens={{ childrenGap: 10 }}>
                <Label>Ship name: {props.ship.name}</Label>
                <Label>Ship cost: {props.ship.cost}</Label>
                <Label>Ship hull (used/total): {props.ship.usedHull}/{props.ship.totalHull}</Label>
            </Stack>
        </div>
    );
}
