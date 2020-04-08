/**
 * @description 从数组中删除指定项
 * @param arr 指定的数组
 * @param item 要删除的项
 * @returns Array 返回一个新数组
 */
export const removeItemFromArray = (arr, item) => {
  let index = -1;
  for(let i=0, len=arr.length; i<len; i++){
    if(arr[i] === item) {
      index = i;
      console.log(index);
      break;
    }
  }
  if(index > -1) {
    arr.splice(index, 1);
    console.log(arr);
  }
};
// 去重
export const duplicateItemFromArray = (arr) => {
  let res =[];
  let json = {};
  for(let i=0;i<arr.length;i++){
    if(!json[arr[i]]){
      res.push(arr[i]);
      json[arr[i]] = 1;
    }
  }
  return res;

}

//将数组数据转换成树形结构数据rootId:根元素id
export const treeDataFromArr = (arr,rootId,type) => {
  let data = [];
  let dataArr = [];
  if(arr.length > 0){
    if(type == 'orgTree'){
      arr.forEach(item => {
        data.push({
          id:item.id,
          label:item.nodeName,
          nodeId: item.nodeId,
          nodeType: item.nodeType,
          level: item.level,
          pid: item.pid,
          sort: item.sort,
          deptPId: item.deptPId,
          deptPName: item.deptPName,
          userId: item.userId
        })
      });
    }else{
      arr.forEach(item => {
        data.push({
          id:item.dictionaryId,
          label:item.dictionaryName,
          dictionaryCode: item.dictionaryCode,
          dictionaryLevel: item.dictionaryLevel,
          pid: item.dictionaryPid
        })
      });
    }


    data.forEach(ele => {
      let parentId = ele.pid;
      if (parentId === rootId) {
        //是根元素的hua ,不做任何操作,如果是正常的for-i循环,可以直接continue.
      } else {
        //如果ele是子元素的话 ,把ele扔到他的父亲的child数组中.
        data.forEach(d => {
          if (d.id === parentId) {
            let childArray = d.children;
            if (!childArray) {
              childArray = [];
            }
            childArray.push(ele);
            d.children = childArray;
          }
        })
      }
    });
    //去除重复元素
    dataArr = data.filter(ele => ele.pid === rootId);
    return dataArr;

  }

}
