import { Paint } from '../models/exterior-color';
import { Wheel } from '../models/wheel';
import { DriveTypes } from '../enums/drive-types';
import { Interior } from '../models/interior';
import { InteriorTypes } from '../enums/interior-types';
import { WheelTypes } from '../enums/wheel-types';
import { ExteriorColors } from '../enums/exterior-colors';

export const exteriorLookMap: Map<string, string> = new Map([
  ['0_1_1', '/assets/standard-range-white.jpg'],
  ['0_2_1', '/assets/standard-black.jpg'],
  ['0_3_1', '/assets/standard-midnightsilver.jpg'],
  ['0_4_1', '/assets/standard-blue.jpg'],
  ['0_5_1', '/assets/standard-deepred.jpg'],

  ['0_1_2', '/assets/standard-white-19inchwheels.jpg'],
  ['0_2_2', '/assets/standard-black-19inchwheels.jpg'],
  ['0_3_2', '/assets/standard-midnightsilver-19inchwheels.jpg'],
  ['0_4_2', '/assets/standard-blue-19inchwheels.jpg'],
  ['0_5_2', '/assets/standard-deepred-19inchwheels.jpg'],

  ['1_1_1', '/assets/long-range-white.jpg'],
  ['1_2_1', '/assets/long-range-black.jpg'],
  ['1_3_1', '/assets/long-range-silver.jpg'],
  ['1_4_1', '/assets/long-range-blue.jpg'],
  ['1_5_1', '/assets/long-range-red.jpg'],

  ['1_1_2', '/assets/long-range-white-sport.jpg'],
  ['1_2_2', '/assets/long-range-black-sport.jpg'],
  ['1_3_2', '/assets/long-range-silver-sport.jpg'],
  ['1_4_2', '/assets/long-range-blue-sport.jpg'],
  ['1_5_2', '/assets/long-range-red-sport.jpg'],

  ['2_1_3', '/assets/performance-white-turbine-wheels.jpg'],
  ['2_2_3', '/assets/performance-black-turbine-wheels.jpg'],
  ['2_3_3', '/assets/performance-midnightsilver-turbine-wheels.jpg'],
  ['2_4_3', '/assets/performance-blue-turbine-wheels.jpg'],
  ['2_5_3', '/assets/performance-red-turbine-wheels.jpg'],
]);

export const commonInteriors: string[] = [
  '12-way power adjustable front and rear heated seats',
  'Premium audio – 14 speakers, 1 subwoofer, 2 amps, and immersive sound',
  'Premium Connectivity (1 year included)',
  'Music and media over Bluetooth®',
  'LED fog lamps',
  'Tinted glass roof with ultraviolet and infrared protection',
  'Power folding, auto-dimming, heated side mirrors',
  'Custom driver profiles',
  'Center console with storage, 4 USB-C ports and wireless charging for 2 smartphones',
  'Interior floor mats',
];

export const interiors: Interior[] = [
  {
    id: InteriorTypes.AllBlack,
    name: 'All Black',
    look: '/assets/black-interior-look.jpg',
    icon: '/assets/black-interior-icon.png',
    featuresIncluded: commonInteriors,
    cost: 0,
  },
  {
    id: InteriorTypes.BlackAndWhite,
    name: 'Black and White',
    look: '/assets/blackandwhite-interior-look.jpg',
    icon: '/assets/white-interior-icon.png',
    featuresIncluded: commonInteriors,
    cost: 1000,
  },
];

export const fullSelfDrivingFeatures: string[] = [
  'Navigate on Autopilot: automatic driving from highway on-ramp to off-ramp including interchanges and overtaking slower cars.',
  'Auto Lane Change: automatic lane changes while driving on the highway.',
  'Autopark: both parallel and perpendicular spaces.',
  'Summon: your parked car will come find you anywhere in a parking lot. Really.',
  'Traffic Light and Stop Sign Control: assisted stops at traffic controlled intersections.',
];

export const autopilotFeatures: string[] = [
  'Enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane.',
];

export const autopilotVideoSource = '/assets/autopilot-video.mp4';

export const upcomingFeatures: string[] = ['Autosteer on city streets.'];

export const exteriorColors: Paint[] = [
  {
    name: 'Pearl White Multi-Coat',
    id: ExteriorColors['Pearl White Multi-Coat'],
    cost: 0,
    icon:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_ppsw.png?&version=v0028d202011190440',
  },
  {
    name: 'Solid Black',
    id: ExteriorColors['Solid Black'],
    cost: 1000,
    icon:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_pbsb.png?&version=v0028d202011190440',
  },
  {
    name: 'Midnight Silver Metallic',
    id: ExteriorColors['Midnight Silver Metallic'],
    cost: 1000,
    icon:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_pmng.png?&version=v0028d202011190440',
  },
  {
    name: 'Deep Blue Metallic',
    id: ExteriorColors['Deep Blue Metallic'],
    cost: 1000,
    icon:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_ppsb.png?&version=v0028d202011190440',
  },
  {
    name: 'Red Multi-Coat',
    id: ExteriorColors['Red Multi-Coat'],
    cost: 2000,
    icon:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_ppmr.png?&version=v0028d202011190440',
  },
];

export const wheelTypes: Wheel[] = [
  {
    name: '18" Aero wheels',
    id: WheelTypes['18" Aero Wheels'],
    icon:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-18-aero.png?&version=v0028d202011190440',
    cost: 0,
  },
  {
    name: '19" Aero wheels',
    id: WheelTypes['19" Sport Wheels'],
    icon:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-19-sport.png?&version=v0028d202011190440',
    cost: 1500,
  },
  {
    name: '20’’ Überturbine Wheels',
    id: WheelTypes['20" Ubeerturbine Wheels'],
    icon:
      'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-20-uberturbine.png?&version=v0028d202011190440',
    cost: 0,
  },
];

export const exteriorLook = (
  drive: DriveTypes,
  colorId: number,
  wheelId: number
): string => {
  return exteriorLookMap.get(`${drive}_${colorId}_${wheelId}`);
};
