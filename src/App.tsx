import { FluentCustomizations } from "@uifabric/fluent-theme";
import { Customizer, Pivot, PivotItem, Stack } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import React, { useReducer } from "react";
import { HullPanel } from "./components/hullPanel/HullPanel";
import { ArmorPart } from "./model/parts/ArmorPart";
import { HullPart } from "./model/parts/HullPart";

initializeIcons();

export interface IAction {
  type: string;
  payload: any;
}

interface IAppState {
  selectedHull?: HullPart;
  selectedHullCategory: string;
  selectedArmor?: ArmorPart;
}

const initialAppState: IAppState = {
  selectedHull: undefined,
  selectedHullCategory: "military",
};

function appReducer(state: IAppState, action: IAction): IAppState {
  switch (action.type) {
    case "SET_HULL_CATEGORY": {
      return {
        ...state,
        selectedHull: undefined,
        selectedHullCategory: action.payload,
      };
    }
    case "SET_HULL":
      return {
        ...state,
        selectedHull: action.payload,
        selectedHullCategory: (action.payload as HullPart).hullType.toString(),
      };

    default:
      throw new Error();
  }
}

const App: React.FC<{}> = () => {
  const [dataState, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <Customizer {...FluentCustomizations}>
      <Pivot>
        <PivotItem headerText = "Hulls">
          <HullPanel
            selectedHullCategory={dataState.selectedHullCategory}
            selectedHull={dataState.selectedHull}
            onHullCategorySelected={(category: string) => dispatch({payload: category, type: "SET_HULL_CATEGORY"})}
            onHullSelected={(hull: HullPart) => dispatch({payload: hull, type: "SET_HULL"})} />
        </PivotItem>
        <PivotItem headerText="Armor">
        </PivotItem>
      </Pivot>
    </Customizer>
  );
};

export default App;
