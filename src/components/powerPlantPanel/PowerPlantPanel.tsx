import React from "react";
import { PowerPlant } from "../../model/PowerPlant";

interface IPowerPlantPanelProps {
    powerPlants: PowerPlant[];
    onPowerPlantAdded: (powerPlant: PowerPlant) => void;
    onPowerPlantRemoved: (powerPlant: PowerPlant) => void;
}

export const PowerPlantPanel: React.FC<IPowerPlantPanelProps> = (props: IPowerPlantPanelProps) => {
    return (
        <></>
    );
};
