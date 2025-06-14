import {
  BsFillHouseDoorFill,
  FaBed,
  FaClone,
  FaCrown,
  FaUsers,
  MdBed,
} from "@/components/icons";
import { images } from "@/helpers/localImages";
import { CategoryInterface } from "@/type";

export const categories: CategoryInterface[] = [
  {
    label: "Basicas",
    units: [202, 503],
    Icon: MdBed,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: images[0],
    btnCTA: "View Rooms",
    slug: "basicas",
    details: [{ units: 2, maxPerUnit: 4 }] 
  },
  {
    label: "Doble Camas",
    units: [102, 402, 502],
    Icon: FaBed,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: images[1],
    btnCTA: "View Rooms",
    slug: "doble-camas",
    details: [{ units: 3, maxPerUnit: 4 }]
  },
  {
    label: "Executivas",
    units: [201, 301, 204, 401],
    Icon: FaCrown,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: images[2],
    btnCTA: "View Rooms",
    slug: "ejecutivas",
    details: [{ units: 2, maxPerUnit: 4 }]
  },
  {
    label: "Standars",
    units: [203, 501],
    Icon: BsFillHouseDoorFill,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: images[3],
    btnCTA: "View Rooms",
    slug: "standars",
    details: [{ units: 2, maxPerUnit: 4 }]
  },
  {
    label: "Dobles",
    units: [403, 504],
    Icon: FaClone,
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: images[0],
    btnCTA: "View Rooms",
    slug: "dobles",
    details: [{ units: 2, maxPerUnit: 4 }]
  },
  {
    label: "Familiares",
    Icon: FaUsers,
    units: [302],
    maxGuestsPerUnit: 4,
    totalUnits: 2,
    bgImage: images[0],
    btnCTA: "View Rooms",
    slug: "familiares",
    details: [{ units: 2, maxPerUnit: 4 }]
  },
  {
    label: "Ver Todas",
    Icon: FaUsers,
    units: [],
    maxGuestsPerUnit: 0,
    totalUnits: 0,
    bgImage: "",
    btnCTA: "",
    slug: "",
    details: []
  },
];
