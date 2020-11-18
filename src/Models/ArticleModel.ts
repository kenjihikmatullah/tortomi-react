import Model from "./Model";

interface Props {
  id?: number,
  title?: string,
  body?: string,
  imageUrl?: string
}

export default class ArticleModel extends Model {
  title?: string;
  body?: string;
  outline?: string;
  imageUrl?: string;

  constructor(params: Props) {
    const { id, title, body, imageUrl } = params;

    super({ id: id });

    this.title = title;
    this.body = body;
    this.imageUrl = imageUrl;
  }
}