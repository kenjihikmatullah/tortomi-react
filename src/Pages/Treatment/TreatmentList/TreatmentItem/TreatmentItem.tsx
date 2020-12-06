import { Text } from "@fluentui/react";
import React from "react";
import { TreatmentModel } from "Models";
import './TreatmentItem.scss';
import { DEFAULT_ARTICLE_IMAGE } from "Utils/constants";

interface Props {
  treatment?: TreatmentModel;
}

class TreatmentItem extends React.Component<Props> {

  render() {
    const { treatment } = this.props;

    return (
      <div className="row">
        {/* Image */}
        <span className="image-container">
          <img
            src={treatment?.image ?? DEFAULT_ARTICLE_IMAGE}
            alt={`Image of This Treatment`}
            className='image'
          />
        </span>

        <div className='text-container'>

          {/* Title */}
          <Text className='title'>
            {treatment?.title}
          </Text>

          <Text className='meta-data'>
            Dibaca {treatment?.views}x
          </Text>

        </div>

      </div>
    );
  }
}

export default TreatmentItem;