import { DefaultButton, IconButton, Modal, PrimaryButton, Stack, StackItem } from "office-ui-fabric-react";
import React, { useState } from "react";
import { PowerPlant } from "../../model/PowerPlant";
import { PowerPlantPanel } from "./PowerPlantPanel";

interface IPowerPlantPanelProps {
    powerPlants: PowerPlant[];
    onPowerPlantsModified: (powerPlant: PowerPlant[]) => void;
}

export const PowerPlantList: React.FC<IPowerPlantPanelProps> = (props: IPowerPlantPanelProps) => {
    const [isOpen, setDialogOpen] = useState(false);

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
                            title="Remove Power Plant" ariaLabel="Remove power plant" />
                    </Stack>
                </StackItem>
                <Stack> // TODO: this needs to be a list for selection for removal
                    {props.powerPlants.map((p) => renderPowerPlant(p))}
                </Stack>
            </Stack>
            <Modal
                titleAriaId="Power plants list"
                isBlocking={false}
                isOpen={isOpen}
                onDismiss={() => setDialogOpen(false)}>
                <PowerPlantPanel
                    onPowerPlantAdded={() => {return; }} />
                <Stack horizontal gap={10} horizontalAlign="end" >
                    <PrimaryButton onClick={() => {return; }} text="Add" />
                    <DefaultButton onClick={() => setDialogOpen(false) } text="Cancel" />
                </Stack>
            </Modal>
        </>
    );
};

function renderPowerPlant(powerPlant: PowerPlant) {
    return (<></>);
}

/*

<Dialog
                dialogContentProps={{
                    title: "Power plants",
                    type: DialogType.normal}}
                modalProps={{
                    isBlocking: false,
                    styles: { main: { maxWidth: 3000 }}
                }}
                isBlocking={false}
                hidden={dialogHidden}
                onDismiss={() => setDialogHidden(true)}>
                <PowerPlantPanel
                    onPowerPlantAdded={() => {return; }} />
                <DialogFooter>
                    <PrimaryButton onClick={() => {return; }} text="Add" />
                    <DefaultButton onClick={() => setDialogHidden(true) } text="Cancel" />
                </DialogFooter>
            </Dialog>

*/