export interface Locations {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url: string;
  created: string;
}

export interface LocationsItemProps {
  item: Locations;
}
