import { List } from "@fluentui/react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { WithNavbar } from 'Components';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "Redux/Map";
import { default as Presenter } from "./ArticleDetailPresenter";
import { useParams } from "react-router-dom";
import { ArticleModel } from "Models";
import { debug } from "Utils/debugging";

interface Params {
  id?: string;
}

const ArticleDetailPage: React.FC<GlobalProps> = (props: GlobalProps) => {
  const [article, setArticle] = useState<ArticleModel | undefined>();
  const { id } = useParams<Params>();
  debug(`id: ${id}`);
  const presenter = new Presenter(props);

  presenter.getArticle({
    id: id,
    onSucceed: newArticle => setArticle(newArticle)
  });

  return (
    <div>

    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticleDetailPage
);