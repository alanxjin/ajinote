// Utility functions

class Util{
    static findNode(tree, nodeId){
        if(tree.id == nodeId){
            return tree;
        }else{
            for(let ind in tree.nodes){
                let ret = Util.findNode(tree.nodes[ind],nodeId);
                if(ret != null){
                    return ret;
                }
            }
            return null;
        }
    }

    static createNewNode(id, name, type){
        return {"name":name,"type":type,"id":id,"nodes":[]};
    }

    static clone(obj){
        return JSON.parse(JSON.stringify(obj));
    }

    static generateId(){
        return (Math.floor(Math.random() * 90000) + 10000).toString();
    }

    
}

export default Util;