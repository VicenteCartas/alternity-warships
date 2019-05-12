import { ArmorComponent } from "./src/ts/model/baseComponents/armorComponent";
import { EngineComponent } from "./src/ts/model/baseComponents/engineComponent";
import { FtlDriveComponent } from "./src/ts/model/baseComponents/ftlDriveComponent";
import { Hull } from "./src/ts/model/baseComponents/hull";
import { PowerPlantComponent } from "./src/ts/model/baseComponents/powerPlantComponent";
import { ShipComponent } from "./src/ts/model/baseComponents/shipComponent";
import { WeaponComponent } from "./src/ts/model/baseComponents/weaponComponent";
import { ArmorFactory } from "./src/ts/model/factories/armorFactory";
import { EngineFactory } from "./src/ts/model/factories/engineFactory";
import { FtlDriveFactory } from "./src/ts/model/factories/ftlDriveFactory";
import { HullFactory } from "./src/ts/model/factories/hullFactory";
import { PowerPlantFactory } from "./src/ts/model/factories/powerPlantFactory";
import { WeaponFactory } from "./src/ts/model/factories/weaponFactory";
import { Ship } from "./src/ts/model/ship";

const hulls: Hull[] = HullFactory.getDefault();
const armors: ArmorComponent[] = ArmorFactory.getDefault();

const ship: Ship = new Ship();
ship.name = "USS Enterprise";
ship.hull = hulls[hulls.length - 1];
ship.armor = armors[0];

console.log(ship.name);
console.log(`Has errors -> ${ship.hasValidationErrors.length > 0}`);
console.log(`${ship.hull.name} -> ${ship.hull.hullPoints} (Base) + ${ship.hull.bonusHullPoints} (Bonus)`);
console.log(`${ship.armor.name}, ${ship.armor.ArmorType.toString()} -> ${ship.armorHullPoints} hull points`);
console.log(`Hull (Used/Total): ${ship.usedHull}/${ship.totalHull}`);
