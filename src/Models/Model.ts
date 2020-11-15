export default abstract class Model {
  id?: number;

  constructor(params: {id?: number}) {
    const { id } = params;
    this.id = id;
  }
}