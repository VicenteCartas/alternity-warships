import { FluentCustomizations } from "@uifabric/fluent-theme";
import { Customizer, Pivot, PivotItem, Stack } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import React, { useReducer } from "react";
import { ArmorPanel } from "./components/armorPanel/ArmorPanel";
import { HullPanel } from "./components/hullPanel/HullPanel";
import { ShipInfoPanel } from "./components/shipInfo/ShipInfoPanel";
import { ArmorPart } from "./model/parts/ArmorPart";
import { HullPart } from "./model/parts/HullPart";
import { Ship } from "./model/Ship";

initializeIcons();

export interface IAction {
  type: string;
  payload: any;
}

interface IAppState {
  name: string;
  selectedHull?: HullPart;
  selectedHullCategory: string;
  selectedArmor?: ArmorPart;
}

const initialAppState: IAppState = {
  name: "USS Enterprise",
  selectedArmor: undefined,
  selectedHull: undefined,
  selectedHullCategory: "military",
};

const App: React.FC<{}> = () => {
  const [dataState, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <Customizer {...FluentCustomizations}>
      <Stack>
        <ShipInfoPanel
          ship={shipFromState(dataState)}
          onNameChanged={(newName: string) => dispatch({payload: newName, type: "SET_NAME"})} />
        <Pivot>
          <PivotItem headerText = "Hulls">
            <HullPanel
              selectedHullCategory={dataState.selectedHullCategory}
              selectedHull={dataState.selectedHull}
              onHullCategorySelected={(category: string) => dispatch({payload: category, type: "SET_HULL_CATEGORY"})}
              onHullSelected={(hull?: HullPart) => dispatch({payload: hull, type: "SET_HULL"})} />
          </PivotItem>
          <PivotItem headerText="Armor">
          <ArmorPanel
              selectedHull={dataState.selectedHull}
              selectedArmor={dataState.selectedArmor}
              onArmorSelected={(armor?: ArmorPart) => dispatch({payload: armor, type: "SET_ARMOR"})} />
          </PivotItem>
        </Pivot>
      </Stack>
    </Customizer>
  );
};

export default App;

function shipFromState(state: IAppState): Ship {
  const ship: Ship = new Ship();

  ship.name = state.name;
  ship.hull = state.selectedHull;
  ship.armorPart = state.selectedArmor;

  return ship;
}

function appReducer(state: IAppState, action: IAction): IAppState {
  switch (action.type) {
    case "SET_NAME": {
      return {
        ...state,
        name: action.payload,
      };
    }

    case "SET_HULL_CATEGORY": {
      return {
        ...state,
        selectedHull: undefined,
        selectedHullCategory: action.payload,
      };
    }

    case "SET_HULL": {
      if (action.payload) {
        return {
          ...state,
          selectedHull: action.payload,
          selectedHullCategory: (action.payload as HullPart).hullType.toString()
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
