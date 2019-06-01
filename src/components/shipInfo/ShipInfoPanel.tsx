import { TextField } from "office-ui-fabric-react";
import { Stack, StackItem } from "office-ui-fabric-react/lib/components/Stack";
import React from "react";
import { Ship } from "../../model/Ship2";
import { ResourceUse } from "./ResourceUse";
import { ShipName } from "./ShipName";

interface IShipInfoPanelProps {
    onNameChanged: (newName: string) => any;
    ship: Ship;
}

export const ShipInfoPanel: React.FC<IShipInfoPanelProps> = (props: IShipInfoPanelProps) => {
    return (
        <Stack horizontal gap={20}>
            <StackItem grow={1}>
                <ShipName
                    name={props.ship.name}
                    onNameChanged={props.onNameChanged} />
            </StackItem>
            <StackItem grow={1}>
                <TextField
                    readOnly
                    label={"Cost"}
                    value={renderCost(props.ship.cost)} />
            </StackItem>
            <StackItem grow={4}>
                <ResourceUse
                    title={"Hull"}
                    subtitle={"Used"}
                    current={props.ship.usedHull}
                    maximum={props.ship.totalHull} />
            </StackItem>
            <StackItem grow={4}>
                <ResourceUse
                    title={"Power"}
                    subtitle={"Used"}
                    current={props.ship.powerConsumed}
                    maximum={props.ship.powerProduced} />
            </StackItem>
        </Stack>
    );
};

function renderCost(cost: number): string {
    if (cost >= 0 && cost < 1000000) {
        return `${cost / 1000} K`;
    } else {
        return `${cost / 1000000} M`;
    }
}
