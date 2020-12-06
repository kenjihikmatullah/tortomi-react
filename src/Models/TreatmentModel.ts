import Model from './Model';

interface Props {
  id?: number,
  title?: string,
  body?: string,
  image?: string
  views?: number
}

export default class TreatmentModel extends Model {
  title?: string;
  body?: string;
  outline?: string;
  image?: string;
  views?: number;

  constructor(params: Props) {
    const { id, title, body, image, views } = params;

    super({ id: id });

    this.title = title;
    this.body = body;
    this.image = image;
    this.views = views;
  }
}