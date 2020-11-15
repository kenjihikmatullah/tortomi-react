import Model from "./Model";

interface MenuModel extends Model {
  name: string;
  onClick?: () => void;
}

export default MenuModel;