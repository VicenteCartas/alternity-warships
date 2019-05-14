import { Dropdown, IDropdownOption, Label, SpinButton, Stack } from "office-ui-fabric-react";
import React from "react";
import { PowerPlantComponent } from "../model/baseComponents/powerPlantComponent";
import { PowerPlantFactory } from "../model/factories/powerPlantFactory";
// tslint:disable: max-line-length

interface IPowerPlantUpdater {
    onPowerPlantChanged: (newPowerPlant: PowerPlantComponent) => void;
    onPowerPlantSizeChanged: (newSize: number) => void;
}

export function PowerPlantSelector(props: IPowerPlantUpdater) {
    const initialOptions: IDropdownOption[] = [
        ...(PowerPlantFactory.getDefault().map((e) => ({ data: e, key: e.name, text: `${e.name}` } as IDropdownOption))),
    ];

    const handlePowerPlantChanged = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption | undefined, index?: number | undefined): void => {
        if (option !== undefined) {
            props.onPowerPlantChanged(option.data as PowerPlantComponent);
        }
    };

    const handleValueChanged = (value: string): string | void => {
        if (value !== null) {
            props.onPowerPlantSizeChanged(Number(value));
        }
    };

    return (
        <Stack horizontal tokens={{ childrenGap: 10 }}>
            <Stack.Item align="auto" >
                <Label>Power plants</Label>
            </Stack.Item>
            <Stack.Item align="auto">
                <Dropdown
                    required
                    options={initialOptions}
                    onChange={handlePowerPlantChanged}/>
            </Stack.Item>
            <Stack.Item align="auto">
                <SpinButton
                    label="Size"
                    min={0}
                    max={20000}
                    step={1}
                    value="0" />
            </Stack.Item>
        </Stack>
    );
}
// tslint:enable: max-line-length
