function getOffsetHeight(): number {
  let offsetHeight = 0
  let dom = document.getElementsByClassName('bg-router-view')[0]
  if (dom) {
    offsetHeight = (dom as HTMLDivElement).offsetHeight - 90
  }
  return offsetHeight
}
export { getOffsetHeight }
