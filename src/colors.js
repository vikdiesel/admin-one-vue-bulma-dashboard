export const colorsBg = {
  white: ['jb-bg-white'],
  light: ['jb-bg-light'],
  success: ['jb-bg-green'],
  danger: ['jb-bg-red'],
  warning: ['jb-bg-yellow'],
  info: ['jb-bg-blue']
}

export const colorsBorders = {
  white: ['jb-borders-white'],
  light: ['jb-borders-light'],
  success: ['jb-borders-green'],
  danger: ['jb-borders-red'],
  warning: ['jb-borders-yellow'],
  info: ['jb-borders-blue']
}

export const colorsText = {
  white: ['jb-text-white'],
  light: ['jb-text-light'],
  success: ['jb-text-green'],
  danger: ['jb-text-red'],
  warning: ['jb-text-yellow'],
  info: ['jb-text-blue']
}

export const colorsOutline = {
  white: [...colorsText.white, ...colorsBorders.white],
  light: [...colorsText.light, ...colorsBorders.light],
  success: [...colorsText.success, ...colorsBorders.success],
  danger: [...colorsText.danger, ...colorsBorders.danger],
  warning: [...colorsText.warning, ...colorsBorders.warning],
  info: [...colorsText.info, ...colorsBorders.info]
}

export const colorsButtons = {
  white: ['jb-hover-white', ...colorsBg.white, ...colorsBorders.white],
  light: ['jb-hover-light', ...colorsBg.light, ...colorsBorders.light],
  success: ['jb-hover-green', ...colorsBg.success, ...colorsBorders.success],
  danger: ['jb-hover-red', ...colorsBg.danger, ...colorsBorders.danger],
  warning: ['jb-hover-yellow', ...colorsBg.warning, ...colorsBorders.warning],
  info: ['jb-hover-blue', ...colorsBg.info, ...colorsBorders.info]
}

export const colorsButtonsOutline = {
  white: ['jb-hover-outline-white', ...colorsText.white, ...colorsBorders.white],
  light: ['jb-hover-outline-light', ...colorsText.light, ...colorsBorders.light],
  success: ['jb-hover-outline-green', ...colorsText.success, ...colorsBorders.success],
  danger: ['jb-hover-outline-red', ...colorsText.danger, ...colorsBorders.danger],
  warning: ['jb-hover-outline-yellow', ...colorsText.warning, ...colorsBorders.warning],
  info: ['jb-hover-outline-blue', ...colorsText.info, ...colorsBorders.info]
}
