const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  #root = null;

  #add(parent, child) {
    if (!parent) {
      this.#root = child;
      return;
    }
    if (child.data < parent.data) {
      if (parent.left) {
        this.#add(parent.left, child);
      } else {
        parent.left = child;
      }
    }    
    if (child.data > parent.data) {
      if (parent.right) {
        this.#add(parent.right, child);
      } else {
        parent.right = child;
      }
    } 
  }

  #find(data, target) {
    if (!target) {
      return null;
    }
    if (data === target.data) {
      return target;
    }    
    if (data < target.data) {
      if (target.left) {
        return this.#find(data, target.left);
      } else {
        return null;
      }
    }   
    if (data > target.data) {
      if (target.right) {
        return this.#find(data, target.right);
      } else {
        return null;
      }
    }          
  }

  #remove(data, target) {
    if (!target) {
      return null;
    }
    if (data > target.data) {
      target.right = this.#remove(data, target.right);    
      return target;  
    }      
    if (data < target.data) {
      target.left = this.#remove(data, target.left);  
      return target;    
    }    
    if (data === target.data) {
      if (!target.left && !target.right) {
        target = null;  
        return null;      
      }
      if (target.left && !target.right) {
        target = target.left;  
        return target;      
      }      
      if (!target.left && target.right) {
        target = target.right;     
        return target;   
      }      
      if (target.left && target.right) {
        if (!target.right.left) {
          target.data = target.right.data;  
          target.right = target.right.right;
          return target;           
        } else {
          target.data = this.#min(target.right.left);
          target.right = this.#remove(target.data, target.right);
          return target;       
        }     
      }         
    }     
  }  

  #min(target) {
    if (!target) {
      return null;
    }    
    return target.left ? this.#min(target.left) : target.data;
  }

  #max(target) {
    if (!target) {
      return null;
    }    
    return target.right ? this.#max(target.right) : target.data;
  }  

  root() {
    return this.#root;
  }

  add(data) {
    this.#add(this.#root, new Node(data));    
  }

  has(data) {    
    return !!this.find(data);
  }

  find(data) {    
    return this.#find(data, this.#root);
  }

  remove(data) {
    this.#remove(data, this.#root);
  }

  min() {
    return this.#min(this.#root);
  }

  max() {
    return this.#max(this.#root);
  }
}

module.exports = {
  BinarySearchTree
};