// Utility functions

class Util{
    static findNode(tree, nodeId){
        if(tree.id == nodeId){
            return tree;
        }else{
            for(let node in tree.nodes){
                let ret = Util.findNode(node)
                if(ret != null){
                    return ret;
                }
            }
            return null;
        }
    }
}

export default Util;