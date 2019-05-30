import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import React from "react";

interface IResourceUseProps {
    title: string;
    subtitle: string;
    current: number;
    maximum: number;
}

export const ResourceUse: React.FC<IResourceUseProps> = (props: IResourceUseProps) => {
    return (
        <ProgressIndicator
            label={props.title}
            description={`${props.subtitle}: ${props.current}/${props.maximum}`}
            percentComplete={props.current / props.maximum} />
    );
};
