goog.provide('node.goog.examples.animals.Cat');

goog.require('node.goog.examples.animals.CatLike');
goog.require('node.goog.examples.animals.IAnimal');



/**
 * @constructor
 * @extends {node.goog.examples.animals.CatLike}
 */
node.goog.examples.animals.Cat = function() {
  node.goog.examples.animals.CatLike.call(this);
};
goog.inherits(node.goog.examples.animals.Cat,
    node.goog.examples.animals.CatLike);
