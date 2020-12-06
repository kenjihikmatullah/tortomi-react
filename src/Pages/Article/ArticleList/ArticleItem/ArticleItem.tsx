import { Text } from "@fluentui/react";
import React from "react";
import { ArticleModel } from "Models";
import './ArticleItem.scss';

interface Props {
  article?: ArticleModel;
  onSelect: () => void;
}

class ArticleItem extends React.Component<Props> {

  render() {
    const { article, onSelect } = this.props;

    return (
      <div className='container' onClick={onSelect}>

        {/* Image */}
        <span className="image-container">
          <img
            src={article?.image ?? 'https://cdn.idntimes.com/content-images/community/2020/04/19764990-1721267444554302-6319357529188990976-n-0e8dd01aeb6b9bd0f06c7b7919a21c3e_600x400.jpg'}
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