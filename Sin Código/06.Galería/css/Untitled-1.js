
a=[10,20,20,10,10,30,50,10,20]

function contar(n, array){
    var contador =0;
    aux=new Set()
    for (var i of array ){
        if (!aux.has(i)){
            aux.add(i);
        }else{
            contador ++;
            aux.delete(i)
        }


    }
    console.log(contador)
}
contar(9,a)