const generateLogo = require('../lib/shapes');

describe('generateLogo', () => {
  test('it should generate SVG content', () => {
    const mockAnswers = {
      text: 'ABC',
      textColor: 'blue',
      shape: 'circle',
      shapeColor: 'red',
    };

    const svgContent = generateLogo(mockAnswers);

    expect(svgContent).toContain('<svg');
    expect(svgContent).toContain('<text');
    expect(svgContent).toContain('<circle');
  });

  test('it should pass all given parameters correctly', () => {
    const mockAnswers = {
      text: 'ABC',
      textColor: 'blue',
      shape: 'circle',
      shapeColor: 'red',
    };

    const svgContent = generateLogo(mockAnswers);

    expect(svgContent).toContain('ABC');
    expect(svgContent).toContain('blue');
    expect(svgContent).toContain('circle');
    expect(svgContent).toContain('red');
  })
});