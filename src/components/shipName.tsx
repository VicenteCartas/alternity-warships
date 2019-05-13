import { TextField } from "office-ui-fabric-react/lib/TextField";
import React from "react";

interface INameUpdater {
    updateName: (newName: string) => void;
}

export function ShipName(props: INameUpdater) {
    const handleChange: (x: any) => void = (e) => props.updateName(e.target.value);

    return (
        <div>
            <TextField
                label="Warship name"
                required
                defaultValue="USS Enterprise"
                onChange={handleChange} />
        </div>
    );
}
