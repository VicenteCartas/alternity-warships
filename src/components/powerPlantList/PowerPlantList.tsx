// tslint:disable:max-line-length
import { ColumnActionsMode, DetailsList, DetailsListLayoutMode, IColumn, IconButton, Modal, Selection, SelectionMode, SpinButton, Stack, StackItem } from "office-ui-fabric-react";
import React, { ReactNode, useState } from "react";
import { PowerPlantPart } from "../../model/parts/PowerPlantPart";
import { PowerPlant } from "../../model/PowerPlant";
import { PowerPlantPanel } from "./PowerPlantPanel";

interface IPowerPlantPanelProps {
    powerPlants: PowerPlant[];
    onPowerPlantsModified: (powerPlant: PowerPlant[]) => void;
}

export const PowerPlantList: React.FC<IPowerPlantPanelProps> = (props: IPowerPlantPanelProps) => {
    const [isOpen, setDialogOpen] = useState(false);
    const selection: Selection = new Selection();
    selection.setItems(props.powerPlants, true);

    const onNewPowerPlantSelected = (powerPlantPart: PowerPlantPart): void => {
        setDialogOpen(false);
        props.onPowerPlantsModified([
                ...props.powerPlants,
                new PowerPlant(powerPlantPart, powerPlantPart.minimumSize),
            ]);
    };

    const removePowerPlant = (): void => {
        const selectedPowerPlants = selection.getSelection() as PowerPlant[];
        props.onPowerPlantsModified(props.powerPlants.filter(
            (p) => selectedPowerPlants.indexOf(p) < 0));
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
                    columns={buildColumns()}
                    items={props.powerPlants}
                    onRenderItemColumn={(item?: any, index?: number, column?: IColumn) => renderItemColumn(item, index, column, props.onPowerPlantsModified)}
                    setKey="selectionKey"
                    selectionMode={SelectionMode.multiple}
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

// tslint:disable: max-line-length
function buildColumns(): IColumn[] {
    const columns: IColumn[] = [];

    columns.push({ key: "type", name: "Power plant", fieldName: "name", minWidth: 125, maxWidth: 200, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "size", name: "Size", fieldName: "size", minWidth: 50, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "powerProduced", name: "Power", fieldName: "powerProduced", minWidth: 50, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "cost", name: "Cost", fieldName: "cost", minWidth: 50, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });

    return columns;
}

function renderItemColumn(item?: any, index?: number, column?: IColumn, onPowerPlantsModified?: (powerPlant: PowerPlant[]) => void): ReactNode {
    if (!item || !column) {
        return (<></>);
    }

    const powerPlant = item as PowerPlant;

    const onValueChanged = (value: string): string => {
        const newSize: number = Number(value);

        if (!isNaN(newSize)) {
            powerPlant.size = newSize;
            onPowerPlantsModified!([powerPlant]);
            return value;
        }

        return powerPlant.minimumSize.toLocaleString();
    };

    switch (column.key) {
        case "type":
            return <span>{powerPlant.name}</span>;
        case "size":
            return <SpinButton
                        min={powerPlant.minimumSize}
                        step={1}
                        defaultValue={powerPlant.size.toString()}
                        onValidate={(v, e) => onValueChanged(v) } />;
        case "powerProduced":
                return <span>{powerPlant.powerProduced}</span>;
        case "cost":
                return <span>{powerPlant.cost}</span>;
        default:
            return <></>;
    }
}
// tslint:enable: max-line-length
