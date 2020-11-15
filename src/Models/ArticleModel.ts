import Model from "./Model";

export default class ArticleModel extends Model {
  name?: string;
  body?: string;

  constructor(params: { id?: number, name?: string, body?: string }) {
    const { id, name, body } = params;

    super({ id: id });
    this.name = name;
    this.body = body;
  }
}