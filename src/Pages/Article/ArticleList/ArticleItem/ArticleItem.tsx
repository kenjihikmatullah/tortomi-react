import { Text } from "@fluentui/react";
import React from "react";
import { ArticleModel } from "../../../../Models";
import './ArticleItem.scss';

interface Props {
  article?: ArticleModel;
}

class ArticleItem extends React.Component<Props> {

  render() {
    const { article } = this.props;

    return (
      <div className='container'>

        {/* Image */}
        <img
          src={article?.imageUrl}
          alt={`Image of This Article`}
          className='image'
        />

        <div className='text-container'>

          {/* Title */}
          <Text className='title'>
            {article?.title}
          </Text>

        </div>

      </div>
    );
  }
}

export default ArticleItem;