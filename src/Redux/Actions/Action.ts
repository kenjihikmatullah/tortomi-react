export default abstract class Action {
  type: string;

  constructor(params: { type: string }) {
    const { type } = params;
    this.type = type;
  }
}