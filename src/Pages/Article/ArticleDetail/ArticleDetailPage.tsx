import { List } from "@fluentui/react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { WithNavbar } from 'Components';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "Redux/Map";
import { default as Presenter } from "./ArticleDetailPresenter";
import { useParams } from "react-router-dom";
import { ArticleModel } from "Models";
import { Text } from "@fluentui/react";
import './ArticleDetailPage.scss'
import { DEFAULT_ARTICLE_IMAGE } from "Utils/constants";

interface Params {
  id?: string;
}

const ArticleDetailPage: React.FC<GlobalProps> = (props: GlobalProps) => {
  const [article, setArticle] = useState<ArticleModel | undefined>();
  const { id } = useParams<Params>();
  const presenter = new Presenter(props);

  presenter.getArticle({
    id: id,
    onSucceed: newArticle => setArticle(newArticle)
  });

  return (
    <WithNavbar>
      <main className='main'>
        {/* Title */}
        <Text className='title'>
          {article?.title}
        </Text>

        {/* Metadata */}
        <Text className='meta-data'>
          Dibaca {article?.views}x
        </Text>

        {/* Image */}
        <img
          src={article?.image ?? DEFAULT_ARTICLE_IMAGE}
          alt={`Image of This Article`}
          className='image'
        />

        {/* Body */}
        <Text className='body'>
          {article?.body}
        </Text>

      </main>
    </WithNavbar>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticleDetailPage
);