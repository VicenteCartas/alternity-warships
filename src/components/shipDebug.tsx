import { Label, Stack } from "./node_modules/office-ui-fabric-reactui-fabric-react";
import React from "./node_modules/reacte_modules/react";
import { Ship } from "../model/Ship";

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
                <Label>Ship power (consumed/total): {props.ship.powerConsumed}/{props.ship.powerProduced}</Label>
            </Stack>
        </div>
    );
}
