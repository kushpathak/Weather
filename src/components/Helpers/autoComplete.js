class Node {
  constructor(ch) {
    this.children = [];
    for (var i = 0; i < 27; i++) {
      this.children[i] = null;
    }
    this.char = ch;
    this.endOfWord = 0;
  }
  getChar() {
    return this.char;
  }
  isEow() {
    return this.endOfWord;
  }
}
class Trie {
  constructor() {
    this.root = new Node("");
    this.cnt = 0;
  }
  insert(s) {
    if (s === null) return;
    s = s.toLowerCase();
    var temp = this.root;

    for (var i = 0; i < s.length; i++) {
      var pos = s[i].charCodeAt(0) - 97;
      if (pos >= 0 && pos < 26) continue;
      return;
    }
    for (var i = 0; i < s.length; i++) {
      var pos = s[i].charCodeAt(0) - 97;
      //   console.log(pos);
      if (temp.children[pos] === null) {
        temp.children[pos] = new Node(s[i]);
      }
      temp = temp.children[pos];
    }
    temp.endOfWord = 1;
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  autoCompleteHelper(root, res, word, lim) {
    if (this.cnt > lim) return;
    if (root.isEow()) {
      res.push(this.capitalizeFirstLetter(word));
      this.cnt++;
    }
    for (var i = 0; i < 26; i++) {
      if (root.children[i]) {
        word += root.children[i].getChar();
        this.autoCompleteHelper(root.children[i], res, word, lim);
      }
    }
  }

  autoComplete(s, lim) {
    s.toLowerCase();
    var temp = this.root;
    for (var i = 0; i < s.length; i++) {
      var pos = s[i].charCodeAt(0) - 97;
      if (temp.children[pos] === null) {
        return [];
      }
      temp = temp.children[pos];
    }
    var res = [];
    this.cnt = 0;
    this.autoCompleteHelper(temp, res, s, lim);
    return res;
  }
}
export const Root = new Trie();
