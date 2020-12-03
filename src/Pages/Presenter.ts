import { GlobalProps } from "../Redux/Map";

class Presenter {
  props: GlobalProps;

  constructor(props: GlobalProps) {
    this.props = props;
  }
}

export default Presenter;