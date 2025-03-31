export class Version {
  public constructor(init?: Partial<Version>) {
    Object.assign(this, init);
  }

  version: string;
}
