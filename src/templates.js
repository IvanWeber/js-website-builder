import {row, col, css} from './utils'

function title(block) {
  const {tag = 'h1', styles} = block.options
  // const tag = block.options.tag ?? 'h1'
  // const styles = block.options.styles
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
  const {tag = 'p', styles} = block.options
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function columns(block) {
  const styles = block.options.styles
  const html = block.value.map(col).join('')
  return row(html, css(styles))
}

function image(block) {
  const {imageStyles: is, alt = '', styles} = block.options
  return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}"/>`, css(styles))
}

export const templates = {
  title,
  text,
  image,
  columns
}