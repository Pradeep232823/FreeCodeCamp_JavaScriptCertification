function pairElement(str){
  const arr=[]
  for (const ch of str){
    if (ch==="A"){
      arr.push(["A","T"])
    } else if (ch==="T"){
      arr.push(["T","A"])
    } else if (ch==="C"){
      arr.push(["C","G"])
    } else{
      arr.push(["G","C"])
    }
  }
  console.log(arr);
}

pairElement("ATCGA")
pairElement("TTGAG")
pairElement("CTCTA")