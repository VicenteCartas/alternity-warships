import { TextField } from "./node_modules/office-ui-fabric-react/lib/TextField";
import React from "./node_modules/react";
// tslint:disable: max-line-length

interface INameUpdater {
    onNameChanged: (newName: string) => void;
}

export function ShipName(props: INameUpdater) {
    const handleNameChanged = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
        if (newValue === undefined) {
            props.onNameChanged("");
        } else {
            props.onNameChanged(newValue);
        }
    };

    return (
        <div>
            <TextField
                label="Warship name"
                required
                defaultValue="USS Enterprise"
                onChange={handleNameChanged} />
        </div>
    );
}
// tslint:enable: max-line-length
