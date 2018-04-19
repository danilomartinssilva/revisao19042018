
function binaryGap(num){
    var bin = Math.abs(num).toString(2);
    var curremtnMax = 0;
     var finalMax = 0;
     console.log("O binário de: ",num, "é:",bin);
    
    for(var i=0;i<bin.length;i++){
        curremtnMax=0;
        while(bin[i]=="0"){
            curremtnMax++;
            i++;
        }
        //console.log(curremtnMax);
        //console.log(curremtnMax);
        //finalMax = finalMax>=curremtnMax ? curremtnMax : finalMax;
        //console.log("O final Max é ",finalMax);
       /* if(finalMax<curremtnMax){
            finalMax = curremtnMax
        }
        else{
            finalMax = finalMax;
        }
        */
       finalMax = finalMax<curremtnMax ? curremtnMax : finalMax;
     
    }
    return finalMax;
}
 
function Cycle (x,y){
    console.log(x);
    for(var i=0;i<x.length;i++){
        console.log(x[i],x[(y+i)% (x.length)])
        x[i] = x[(y+i)% (x.length)];
    }
    console.log("O VETOR" ,x);
}

Cycle([2,3,6,7,10,1],1);
//console.log(binaryGap(2));