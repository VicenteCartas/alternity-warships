import { TextField } from "office-ui-fabric-react/lib/TextField";
import React from "react";

interface INameUpdaterProps {
    name: string | null;
    onNameChanged: (newName: string) => void;
}

export const ShipName: React.FC<INameUpdaterProps> = (props: INameUpdaterProps) => {
    return (
        <div>
            <TextField
                required
                label="Warship name"
                defaultValue={(props.name) ? (props.name) : ""}
                onChange={(event, newValue) => (newValue) ? props.onNameChanged(newValue) : props.onNameChanged("")} />
        </div>
    );
};
