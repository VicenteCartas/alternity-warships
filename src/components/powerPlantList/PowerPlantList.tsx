// tslint:disable-next-line:max-line-length
import { DetailsList, DetailsListLayoutMode, IconButton, Modal, SelectionMode, Stack, StackItem } from "office-ui-fabric-react";
import React, { useState } from "react";
import { PowerPlantPart } from "../../model/parts/PowerPlantPart";
import { PowerPlant } from "../../model/PowerPlant";
import { PowerPlantPanel } from "./PowerPlantPanel";

interface IPowerPlantPanelProps {
    powerPlants: PowerPlant[];
    onPowerPlantsModified: (powerPlant: PowerPlant[]) => void;
}

export const PowerPlantList: React.FC<IPowerPlantPanelProps> = (props: IPowerPlantPanelProps) => {
    const [isOpen, setDialogOpen] = useState(false);

    const onNewPowerPlantSelected = (powerPlantPart: PowerPlantPart): void => {
        setDialogOpen(false);
        props.onPowerPlantsModified([
                ...props.powerPlants,
                new PowerPlant(powerPlantPart, powerPlantPart.minimumSize),
            ]);
    };

    const removePowerPlant = (): void => {
        return;
    };

    return (
        <>
            <Stack>
                <StackItem>
                    <Stack horizontal gap={10}>
                        <IconButton
                            iconProps={{ iconName: "Add" }}
                            title="Add Power Plant" ariaLabel="Add power plant"
                            onClick={() => setDialogOpen(true)} />
                        <IconButton
                            iconProps={{ iconName: "Remove" }}
                            title="Remove Power Plant" ariaLabel="Remove power plant"
                            onClick={() => removePowerPlant()} />
                    </Stack>
                </StackItem>
                <DetailsList
                    layoutMode={DetailsListLayoutMode.justified}
                    compact={true}
                    columns={buildColumns()}
                    items={props.powerPlants}
                    setKey="selectionKey"
                    selectionMode={SelectionMode.single}
                    selectionPreservedOnEmptyClick={true}
                    selection={selection}/>
            </Stack>
            <Modal
                titleAriaId="Power plants list"
                isBlocking={false}
                isOpen={isOpen}
                onDismiss={() => setDialogOpen(false)}>
                <PowerPlantPanel
                    onPowerPlantSelected={onNewPowerPlantSelected} />
            </Modal>
        </>
    );
};
