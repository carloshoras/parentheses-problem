//This was uploaded for StickerMule
function findParentheses(parenthesesSequence) {
  if (parenthesesSequence.indexOf("()") !== -1) return findParentheses(parenthesesSequence.replaceAll("()", ""))
  return parenthesesSequence.length
}
