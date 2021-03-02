import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `
Enter text content in the value field and css styles in the styles field in the appropriate block, then click the add button. The added items will appear at the bottom of the page.
`

export const model = [
  new TitleBlock('Website Builder', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5 rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock( image, {
    styles: {
      // width: '100%'
      // padding: '2rem 0',
      // display: 'flex',
      // 'justify-content': 'center'
    },
    imageStyles: {
      padding: '0',
      width: '100%',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
  new ColumnsBlock([
    'Build your own webstie',
    'Knowledge of programming languages is not required',
    'Very simple website creation. Create a website with your own hands.'
    ], {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
      }
    }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })

]
