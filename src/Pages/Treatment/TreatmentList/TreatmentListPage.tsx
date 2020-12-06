import { List } from "@fluentui/react";
import React, { FunctionComponent as Component } from "react";
import { connect } from "react-redux";
import { WithNavbar } from 'Components';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "Redux/Map";
import { default as Presenter } from "./TreatmentListPresenter";
import { Link } from "react-router-dom";
import './TreatmentListPage.scss';
import TreatmentItem from "./TreatmentItem/TreatmentItem";

const TreatmentListPage: Component<GlobalProps> = (props: GlobalProps) => {
  const presenter = new Presenter(props);
  const { treatments } = props;

  if (treatments.length == 0) {
    presenter.getTreatments();
  }

  return (
    <WithNavbar>
      <List
        className='list'
        items={treatments}
        onRenderCell={(treatment, index) => {
          return (
            <div className='item'>
              <Link
                to={`/treatments/${treatment?.id}`}
                onClick={() => presenter.read(treatment?.id)}>
                <TreatmentItem
                  treatment={treatment}
                />
              </Link>
            </div>
          );
        }}
      />
    </WithNavbar>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  TreatmentListPage
);