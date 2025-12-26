function titleCase(str){
  const arr=str.split(' ');
  const words=[]
  for (const st of arr){
      words.push(st[0].toUpperCase() + st.slice(1).toLowerCase())
  }
  return words.join(' ')
}
console.log(titleCase("I'm a little tea pot"))
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))