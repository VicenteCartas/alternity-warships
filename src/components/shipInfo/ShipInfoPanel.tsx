import { Stack, StackItem } from "office-ui-fabric-react/lib/components/Stack";
import React from "react";
import { ResourceUse } from "./ResourceUse";
import { ShipName } from "./ShipName";

interface IShipInfoPanelProps {
    onNameChanged: (newName: string) => any;
}

export const ShipInfoPanel: React.FC<IShipInfoPanelProps> = (props: IShipInfoPanelProps) => {
    return (
        <Stack horizontal gap={20}>
            <ShipName onNameChanged={props.onNameChanged} />
            <StackItem grow={1}>
                <ResourceUse
                    title={"Hull"}
                    subtitle={"Used"}
                    current={50}
                    maximum={100} />
            </StackItem>
            <StackItem grow={1}>
                <ResourceUse
                    title={"Power"}
                    subtitle={"Used"}
                    current={20}
                    maximum={100} />
            </StackItem>
        </Stack>
    );
};
