import React, { useState, FunctionComponent as Component } from "react";
import { connect } from "react-redux";
import { WithNavbar } from 'Components';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "Redux/Map";
import { default as Presenter } from "./TreatmentDetailPresenter";
import { useParams } from "react-router-dom";
import { TreatmentModel } from "Models";
import { Text } from "@fluentui/react";
import './TreatmentDetailPage.scss'
import { DEFAULT_ARTICLE_IMAGE } from "Utils/constants";

interface Params {
  id?: string;
}

const TreatmentDetailPage: Component<GlobalProps> = (props: GlobalProps) => {
  const [treatment, setTreatment] = useState<TreatmentModel | undefined>();
  const { id } = useParams<Params>();
  const presenter = new Presenter(props);

  if (!treatment) {
    presenter.getTreatment({
      id: id,
      onSucceed: newTreatment => setTreatment(newTreatment)
    });
  }

  return (
    <WithNavbar>
      <main>
        {/* Title */}
        <Text className='title'>
          {treatment?.title}
        </Text>

        {/* Metadata */}
        <Text className='meta-data'>
          Dibaca {treatment?.views}x
        </Text>

        {/* Image */}
        <img
          src={treatment?.image ?? DEFAULT_ARTICLE_IMAGE}
          alt={`Image of This Treatment`}
          className='image'
        />

        {/* Body */}
        <Text className='body'>
          {treatment?.body}
        </Text>

      </main>
    </WithNavbar>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  TreatmentDetailPage
);