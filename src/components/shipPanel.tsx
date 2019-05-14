import { Stack } from "office-ui-fabric-react";
import React from "react";
import { Hull } from "../model/baseComponents/hull";
import { PowerPlantComponent } from "../model/baseComponents/powerPlantComponent";
import { Ship } from "../model/ship";
import { HullSelector } from "./HullSelector";
import { PowerPlantSelector } from "./PowerPlantSelector";
import { ShipName } from "./ShipName";

interface IShipProps {
    ship: Ship;
    onNameChanged: (newName: string) => void;
    onHullChanged: (newHull: Hull) => void;
    onPowerPlantChanged: (newPowerPlant: PowerPlantComponent) => void;
    onPowerPlantSizeChanged: (newSize: number) => void;
}

export function ShipPanel(props: IShipProps) {
    return (
        <div>
            <Stack tokens={{ childrenGap: 10 }}>
                <ShipName onNameChanged={props.onNameChanged} />
                <HullSelector onHullChanged={props.onHullChanged} />
                <PowerPlantSelector
                    onPowerPlantChanged={props.onPowerPlantChanged}
                    onPowerPlantSizeChanged={props.onPowerPlantSizeChanged} />
            </Stack>
        </div>
    );
}
