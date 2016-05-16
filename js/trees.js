var BinaryTree = (function () {
  var _BinaryTree = function () {
    this.head = null;
  };

  var utils = {
    node: function (value, parent) {
      return {
        value: value,
        parent: parent,
        left: null,
        right: null
      };
    },
    left: function (pointer) {
      if (pointer.left) return pointer.left;
      else return false;
    },
    right: function (pointer) {
      if (pointer.right) return pointer.right;
      else return false;
    }
  };

  _BinaryTree.prototype = {
    insert: function (value) {
      if (!this.head) {
        this.head = utils.node(value, null);
      } else {
        var pointer = this.head,
            old;
        while (pointer !== false) {
          old = pointer;
          if (pointer.value !== value)
            pointer = (value > pointer.value) ? utils.right(pointer) : utils.left(pointer);
          else break;
        }

        old[(value > old.value) ? "right" : "left"] = utils.node(value, old);
      }
    },
    find: function (value) {
      if (!this.head) return false;
      else {
        var pointer = this.head,
            old;

        while (pointer !== false) {
          if (pointer.value != value) {
            pointer = (value > pointer.value) ? utils.right(pointer) : utils.left(pointer);
          } else if (pointer.value == value) break;
        }

        return !!pointer;
      }
    }
  };

  return _BinaryTree;
})();

var tree = new BinaryTree();

tree.insert(5);
tree.insert(3);

console.log(tree.find(3)); // true
