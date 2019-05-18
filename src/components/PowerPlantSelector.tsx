import { Dropdown, IDropdown, IDropdownOption, Label, SpinButton, Stack } from "office-ui-fabric-react";
import React from "react";
import { PowerPlantPartFactory } from "../model/factories/PowerPlantPartFactory";
import { PowerPlantPart } from "../model/parts/PowerPlantPart";
// tslint:disable: max-line-length

interface IPowerPlantUpdater {
    currentSize?: string;
    onPowerPlantChanged: (newPowerPlant: PowerPlantPart) => void;
    onPowerPlantSizeChanged: (newSize: number) => void;
}

export function PowerPlantSelector(props: IPowerPlantUpdater) {
    const dropDown = React.createRef<IDropdown>();
    const spinButton = React.createRef<SpinButton>();

    const initialOptions: IDropdownOption[] = [
        ...(PowerPlantPartFactory.getDefault().map((e) => ({ data: e, key: e.name, text: `${e.name}` } as IDropdownOption))),
    ];

    const handlePowerPlantChanged = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption | undefined): void => {
        if (option !== undefined) {
            const selectedPowerPlant = (option.data as PowerPlantPart);
            props.onPowerPlantChanged(selectedPowerPlant);

            if (spinButton.current !== null && spinButton.current.value !== undefined) {
                const currentSize = Number(spinButton.current.value);
                if (currentSize < selectedPowerPlant.minimumSize) {
                    spinButton.current.setState({value: selectedPowerPlant.minimumSize.toString()});
                }
            }
        }
    };

    const handleValueDecremented = (value: string): string | void => {
        if (value !== null) {
            const newSize = Number(value) - 1;
            props.onPowerPlantSizeChanged(newSize);
            return newSize.toString();
        }
    };

    const handleValueIncremented = (value: string): string | void => {
        if (value !== null) {
            const newNumber = Number(value) + 1;
            props.onPowerPlantSizeChanged(newNumber);
            return newNumber.toString();
        }
    };

    return (
        <Stack horizontal tokens={{ childrenGap: 10 }}>
            <Stack.Item align="auto" >
                <Label>Power plants</Label>
            </Stack.Item>
            <Stack.Item align="auto">
                <Dropdown
                    componentRef={dropDown}
                    required
                    options={initialOptions}
                    onChange={handlePowerPlantChanged}/>
            </Stack.Item>
            <Stack.Item align="auto">
                <SpinButton
                    componentRef={spinButton}
                    label="Size"
                    min={0}
                    max={20000}
                    step={1}
                    defaultValue={props.currentSize}
                    onDecrement={handleValueDecremented}
                    onIncrement={handleValueIncremented} />
            </Stack.Item>
        </Stack>
    );
}
// tslint:enable: max-line-length
