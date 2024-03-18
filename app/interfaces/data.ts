
type FavourablePointData = {
  name: string;
  date_of_birth: string;
  destiny_number: number;
  radical_number: number;
  name_number: number;
  evil_number: string;
  favourite_colour: string;
  favourite_day: string;
  favourite_god: string;
  favourite_mantra: string;
  favourite_metal: string;
  favourite_stone: string;
  favourite_substones: string;
  friendly_numbers: string;
  neutral_number: string;
  radical_ruler: string;

}

type FavourablePoint = {
  type: 'KEY_VALUE';
  heading: 'Favourable Points';
  data: FavourablePointData;
}

type NumerologyReport = {
  type: 'PARAGRAPH';
  heading: 'Radical Number' | 'Favourable Time' | 'Favourable Gayatri Mantra';
  data: string[];
}

type AscendantReport = {
  type: 'KEY_PARAGRAPH';
  heading: 'Ascendant Report';
  data: {
    ascendant: string;
    report: string;
  };
}

type HouseCuspAndSandhiData = {
  house: number;
  degree: string;
  sign: string;
  sign_lord: string;
  start_lord: string;
  sub_lord: string;
};

type HouseCuspAndSandhi = {
  type: 'TABLE';
  heading: 'House Cusps And Sandhi';
  data: HouseCuspAndSandhiData[];
}

type KalsarpaDosha = {
  type: 'KEY_PARAGRAPH' | 'PARAGRAPH';
  heading: 'Kalsarpa Details' | 'Kalsarpa Remedies';
  data: {
    present?: boolean;
    one_line?: string;
  } | string[];
}

type ManglikDetails = {
  manglik_present_rule: {
    based_on_aspect: string[];
    based_on_house: string[];
  };
  manglik_cancel_rule: any[];
  is_mars_manglik_cancelled: boolean;
  manglik_status: string;
  percentage_manglik_present: number;
  percentage_manglik_after_cancellation: number;
  manglik_report: string;
  is_present: boolean;
  what_is_manglik_dosha_?: string;
}

type ManglikDosha = {
  type: 'KEY_PARAGRAPH' | 'PARAGRAPH';
  heading: 'Manglik Details' | 'Manglik Remedies';
  data: ManglikDetails | string[];
}

type SadhesatiDetails = {
  consideration_date: string;
  is_saturn_retrograde: boolean;
  moon_sign: string;
  saturn_sign: string;
  is_undergoing_sadhesati: string;
  sadhesati_status: boolean;
  what_is_sadhesati_?: string;
}

type SadhesatiAnalysis = {
  type: 'KEY_PARAGRAPH' | 'PARAGRAPH';
  heading: 'Sadhesati Details' | 'Sadhesati Remedies';
  data: SadhesatiDetails | string[];
}

type Gemstone = {
  name: string;
  gem_key: string;
  semi_gem: string;
  wear_finger: string;
  weight_caret: string;
  wear_metal: string;
  wear_day: string;
  gem_deity: string;
}

type GemStoneData = {
  LIFE: Gemstone;
  BENEFIC: Gemstone;
  LUCKY: Gemstone;
}

type Gemstones = {
  type: 'SPECIAL';
  heading: 'Gemstone Suggestions';
  data: GemStoneData;
}

type Report = {
  favourablePoints: FavourablePoint[];
  numerologyReport: NumerologyReport[];
  ascendantReport: AscendantReport[];
}

type HouseCuspsAndSandhi = {
  houseCuspsAndSandhi: HouseCuspAndSandhi[];
}

type Dosha = {
  kalsarpaDosha: KalsarpaDosha[];
  manglikDosha: ManglikDosha[];
  sadhesatiAnalysis: SadhesatiAnalysis[];
}

type Data = {
  report: Report;
  houseCuspsAndSandhi: HouseCuspsAndSandhi[];
  dosha: Dosha;
  gemstones: Gemstones[];
}

export {
  HouseCuspAndSandhiData,
  FavourablePointData,
  FavourablePoint,
  NumerologyReport,
  AscendantReport,
  HouseCuspAndSandhi,
  KalsarpaDosha,
  ManglikDetails,
  ManglikDosha,
  SadhesatiDetails,
  SadhesatiAnalysis,
  Gemstone,
  Gemstones,
  GemStoneData,
  Report,
  Dosha,
  Data,
};