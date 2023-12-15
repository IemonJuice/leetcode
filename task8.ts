//You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. 
//Return the destination city, that is, the city without any path outgoing to another city.
//It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

function destCity(paths: string[][]): string {
    let map:any = {};
    for(let i = 0; i < paths.length; i++){
        map[paths[i][1]] = 0;
    }

    for(let j = 0; j < paths.length;j++){
        if(Object.keys(map).includes(paths[j][0])){
            map[paths[j][0]] = map[paths[j][1]] + 1  ;
            console.log()
        }
    }

    for(let i = 0; i < paths.length; i++){
        if(map[paths[i][1]] === 0){
            return  Object.keys(map).find(key => map[key] === map[paths[i][1]]) as string
        }
    }
    return ""
};

