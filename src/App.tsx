import { FluentCustomizations } from "@uifabric/fluent-theme";
import { Customizer, Pivot, PivotItem } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import React, { useReducer } from "react";
import { ArmorPanel } from "./components/armorPanel/ArmorPanel";
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

    case "SET_HULL": {
      const newSelectedHull = (action.payload as HullPart).hullType.toString();
      if (state.selectedHullCategory !== newSelectedHull) {
        return {
          ...state,
          selectedHull: action.payload,
          selectedHullCategory: newSelectedHull,
        };
      } else {
        return {
          ...state,
          selectedHull: action.payload,
        };
      }
    }

    case "SET_ARMOR": {
      return {
        ...state,
        selectedArmor: action.payload,
      };
    }

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
        <ArmorPanel
            selectedHull={dataState.selectedHull}
            selectedArmor={dataState.selectedArmor}
            onArmorSelected={(armor: ArmorPart) => dispatch({payload: armor, type: "SET_ARMOR"})} />
        </PivotItem>
      </Pivot>
    </Customizer>
  );
};

export default App;
