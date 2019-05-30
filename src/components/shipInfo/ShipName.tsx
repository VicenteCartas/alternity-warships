import { TextField } from "office-ui-fabric-react/lib/TextField";
import React from "react";

interface INameUpdaterProps {
    onNameChanged: (newName: string) => void;
}

export const ShipName: React.FC<INameUpdaterProps> = (props: INameUpdaterProps) => {
    return (
        <div>
            <TextField
                required
                label="Warship name"
                defaultValue="USS Enterprise"
                onChange={(event, newValue) => {
                        if (newValue) {
                            props.onNameChanged(newValue);
                        }
                    }
                }/>
        </div>
    );
};
