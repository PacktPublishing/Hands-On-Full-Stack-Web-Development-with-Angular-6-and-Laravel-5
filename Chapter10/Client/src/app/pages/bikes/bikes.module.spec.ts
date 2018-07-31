import { BikesModule } from './bikes.module';

describe('BikesModule', () => {
  let bikesModule: BikesModule;

  beforeEach(() => {
    bikesModule = new BikesModule();
  });

  it('should create an instance', () => {
    expect(bikesModule).toBeTruthy();
  });
});
