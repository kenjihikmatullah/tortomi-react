import { Text } from "@fluentui/react";
import React from "react";
import { ArticleModel } from "Models";
import './ArticleItem.scss';
import { DEFAULT_ARTICLE_IMAGE } from "Utils/constants";

interface Props {
  article?: ArticleModel;
}

class ArticleItem extends React.Component<Props> {

  render() {
    const { article } = this.props;

    return (
      <div className="row">
        {/* Image */}
        <span className="image-container">
          <img
            src={article?.image ?? DEFAULT_ARTICLE_IMAGE}
            alt={`Image of This Article`}
            className='image'
          />
        </span>

        <div className='text-container'>

          {/* Title */}
          <Text className='title'>
            {article?.title}
          </Text>

          <Text className='meta-data'>
            Dibaca {article?.views}x
          </Text>

        </div>

      </div>
    );
  }
}

export default ArticleItem;