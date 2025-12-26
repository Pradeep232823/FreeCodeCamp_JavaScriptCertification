function convertHTML(str){
  let arr=str.split("")
  for (let i=0;i<=arr.length;i++){
      if (arr[i]==="<"){
          arr[i]="&lt;"
      } else if (arr[i]==="&"){
          arr[i]="&amp;"
      } else if (arr[i]===">"){
          arr[i]="&gt;"
      } else if (arr[i]==="\""){
          arr[i]="&quot;"
      } else if (arr[i]==="\'"){
          arr[i]="&apos;"
      }
  }
  console.log(arr.join(""))
}

convertHTML("Hamburgers < Pizza < Tacos")
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")