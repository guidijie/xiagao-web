function setHeight(refs: HTMLElement[] | any, offset: number): void {
  const height = document.documentElement.clientHeight || document.body.clientHeight
  const heightStr = height - offset + 'px'
  if (refs) {
    for (const item of refs) {
      item.style.height = heightStr
      item.style.maxHeight = heightStr
    }
  }
}
export { setHeight }
