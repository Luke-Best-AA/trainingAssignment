import { DetectBottomDirective } from './detect-bottom.directive';

describe('DetectBottomDirective', () => {
  let directive: DetectBottomDirective;
  let target: any;

  beforeEach(() => {
    directive = new DetectBottomDirective();
    target = {
      scrollHeight: 1000,
      scrollTop: 0,
      clientHeight: 100
    };
  });

  it('should create an instance', () => {
    const directive = new DetectBottomDirective();
    expect(directive).toBeTruthy();
  });

  it('should emit scrolledToBottom event when bottom is reached', () => {
    spyOn(directive.scrolledToBottom, 'emit');
    target.scrollTop = 900;

    directive.onScroll(target);

    expect(directive.scrolledToBottom.emit).toHaveBeenCalled();
  });

  it('should not emit scrolledToBottom event when bottom is not reached', () => {
    spyOn(directive.scrolledToBottom, 'emit');
    target.scrollTop = 800;

    directive.onScroll(target);

    expect(directive.scrolledToBottom.emit).not.toHaveBeenCalled();
  });  
});
