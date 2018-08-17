// Utility functions
import path from 'path';
const electron = window.require('electron');
const fs = electron.remote.require('fs');

class Util{
    static findNode(tree, nodeId){
        if(tree.id === nodeId){
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

    static findParent(tree, nodeId){
        for(let ind in tree.nodes){
            if(tree.nodes[ind].id === nodeId){
                return tree;
            }else{
                let ret = Util.findParent(tree.nodes[ind],nodeId)
                if( ret != null){
                    return ret;
                }
            }
        }
        return null;
    }

    static createNewNode(id, name, type){
        return {'name':name,'type':type,'id':id, 'foldopen':false, 'nodes':[]};
    }

    static clone(obj){
        return JSON.parse(JSON.stringify(obj));
    }

    static generateId(){
        return (Math.floor(Math.random() * 90000) + 10000).toString();
    }

    static loadDataFromLocal(path, defaults={'docs':{}, 'tree': {'ids':['10000'], 'root':Util.createNewNode('10000','Ajinote','folder')}}){
        return Util._parseDataFile(path, defaults);
    }

    static _parseDataFile(filePath, defaults) {
        try {
          return JSON.parse(fs.readFileSync(filePath));
        } catch(error) {
          return defaults;
        }
    }

    static saveDataToLocal(path, data){
        fs.writeFileSync(path, JSON.stringify(data));  
    }

    static getLocalStoragePath(){
        const userDataPath = (electron.app || electron.remote.app).getPath('userData');
        return path.join(userDataPath, 'ajinStore1', '.json');
    }
    
}

export default Util;