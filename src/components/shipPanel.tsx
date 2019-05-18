import { Stack } from "./node_modules/office-ui-fabric-react";
import React from "./node_modules/react";
import { HullPart } from "../model/parts/HullPart";
import { PowerPlantPart } from "../model/parts/PowerPlantPart";
import { HullSelector } from "./HullSelector";
import { PowerPlantSelector } from "./PowerPlantSelector";
import { ShipName } from "./ShipName";

interface IShipProps {
    currentPowerPlantSize: number;
    onNameChanged: (newName: string) => void;
    onHullChanged: (newHull: HullPart) => void;
    onPowerPlantChanged: (newPowerPlant: PowerPlantPart) => void;
    onPowerPlantSizeChanged: (newSize: number) => void;
}

export function ShipPanel(props: IShipProps) {
    return (
        <div>
            <Stack tokens={{ childrenGap: 10 }}>
                <ShipName onNameChanged={props.onNameChanged} />
                <HullSelector onHullChanged={props.onHullChanged} />
                <PowerPlantSelector
                    currentSize={props.currentPowerPlantSize.toString()}
                    onPowerPlantChanged={props.onPowerPlantChanged}
                    onPowerPlantSizeChanged={props.onPowerPlantSizeChanged} />
            </Stack>
        </div>
    );
}
