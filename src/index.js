module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let isOpen = false;

    for(let i = 0; i < str.length; i++){
        for(let k = 0; k < bracketsConfig.length; k++){
            if(bracketsConfig[k][0] == str[i] && bracketsConfig[k][0] == bracketsConfig[k][1]){
                if(str[i] !== arr[arr.length - 1]){
                    isOpen = true;
                    arr.push(str[i]);
                } else if(str[i] == arr[arr.length - 1]){
                    isOpen = false;
                    arr.pop();
                } else if(arr.length == 0 && i == str.length - 1){
                    return true;
                }
            } else{
                if(bracketsConfig[k][1] == str[i] && arr.length == 0){
                    return false;
                }
                if(bracketsConfig[k][0] == str[i]){
                    isOpen = true;
                    arr.push(str[i]);
                } else{
                    isOpen = false;
                }
                if(!isOpen){
                    if(bracketsConfig[k][1] == str[i] && bracketsConfig[k][0] == arr[arr.length - 1]){
                        arr.pop();
                    } else if(arr.length == 0 && i == str.length - 1){
                        return true;
                    }
                }
            }
        }
    }
    if(arr.length == 0){
        return true;
    } else{
        return false;
    }
}
