// ctrl + t
// shift x2 -> extract
function foo() {

  if (this.foo === this.bar) {
    return 0;
  }

  if (this.foo === this.bar && this.baz) {
    return 0;
  }
}
