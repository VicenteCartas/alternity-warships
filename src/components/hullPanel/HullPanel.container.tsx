import React from "react";
import { HullPanel } from "./HullPanel";
import { IGroup } from "office-ui-fabric-react/lib/DetailsList";
import { HullPart, HullType } from "../../model/parts/HullPart";
import { HullPartFactory } from "../../model/factories/HullPartFactory";
import { IDropdownOption } from "office-ui-fabric-react";

interface IHullPanelContainerProps {
    selectedHull?: HullPart
}

interface IHullPanelContainerState {
    hullCategoriesSelectedValue: string;
    selectedHull?: HullPart;
}

export class HullPanelContainer extends React.Component<IHullPanelContainerProps, IHullPanelContainerState> {
    constructor(props: Readonly<IHullPanelContainerProps>) {
        super(props);

        let selectedHullCategory = "military";
        if (this.props.selectedHull && 
            this.props.selectedHull.hullType === HullType.Civilian) {
            selectedHullCategory = "civilian";
        }

        this.state = {
            hullCategoriesSelectedValue: selectedHullCategory,
            selectedHull: this.props.selectedHull,
        }
    }

    render() {
        const [groups, hulls] = HullPanelContainer.buildGroups();

        return (
            <HullPanel 
                hullCategoriesOptions={HullPanelContainer.buildHullTypesOptions(this.state.hullCategoriesSelectedValue)}
                hullCategoriesSelectedValue={this.state.hullCategoriesSelectedValue}
                groups={groups}
                hulls={hulls} 
                selectedHull={this.state.selectedHull}
                onHullCategoryChanged={this.onHullCategoryChanged.bind(this)} />
        )
    }

    private onHullCategoryChanged(option?: IDropdownOption): void {
        if (option) {
            this.setState(state => {
                return {
                    selectedHull: undefined,
                    hullCategoriesSelectedValue: option.key
                } as IHullPanelContainerState            
            });
        }

        return undefined;
    }

    private static buildHullTypesOptions(hullCategory: string) {
        const hullTypesOptions: IDropdownOption[] = [];

        hullTypesOptions.push({ key: "military", text:"Military" });
        hullTypesOptions.push({ key: "civilian", text:"Civilian" });

        return hullTypesOptions;
    }

    private static buildGroups(): [IGroup[], HullPart[]] {
        let groups: IGroup[] = [];
        let hulls: HullPart[] = [];
        let start = 0;

        hulls = [...hulls, ...HullPartFactory.smallCraftMilitary()];
        groups.push({ key: "smallCraft", name:"Small craft", startIndex: start, count: hulls.length });

        start += groups[0].count;
        hulls = [...hulls, ...HullPartFactory.lightMilitary()];
        groups.push({ key: "lightShips", name:"Light ships", startIndex: start, count: hulls.length - start });

        start += groups[1].count;
        hulls = [...hulls, ...HullPartFactory.mediumMilitary()];
        groups.push({ key: "mediumShips", name:"Medium ships", startIndex: start, count: hulls.length - start });

        start += groups[2].count;
        hulls = [...hulls, ...HullPartFactory.heavyMilitary()];
        groups.push({ key: "heavyShips", name:"Heavy ships", startIndex: start, count: hulls.length - start });

        start += groups[3].count;
        hulls = [...hulls, ...HullPartFactory.superHeavyMilitary()];
        groups.push({ key: "superHeavyShips", name:"Super-heavy ships", startIndex: start, count: hulls.length - start });

        return [groups, hulls];
    }
}
