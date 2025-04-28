import { region } from "./Region";
import { incomeLevel } from "./incomeLevel"
import { lendingType } from "./lendingType";
import { adminregion } from "./adminregion"

export interface Country {
    id?: string;
    iso2Code?: string;
    name?: string;
    region?: region;
    adminregion?: adminregion;
    incomeLevel?: incomeLevel;
    lendingType?: lendingType
    capitalCity?: string;
    longitude?: string;
    latitude?: string;
}
