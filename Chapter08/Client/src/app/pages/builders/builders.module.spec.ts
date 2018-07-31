import { BuildersModule } from './builders.module';

describe('BuildersModule', () => {
  let buildersModule: BuildersModule;

  beforeEach(() => {
    buildersModule = new BuildersModule();
  });

  it('should create an instance', () => {
    expect(buildersModule).toBeTruthy();
  });
});
