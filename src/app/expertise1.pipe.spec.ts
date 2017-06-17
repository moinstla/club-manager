import { expertisePipe } from './expertise.pipe';

describe('expertisePipe', () => {
  it('create an instance', () => {
    const pipe = new expertisePipe();
    expect(pipe).toBeTruthy();
  });
});
