const fs=require('fs')
// fs.readdir('./',(err,dirs)=>{
//     for (let index = 0; index < dirs.length; index++) {
//       console.log(dirs[index])
      
//     }
// })

fs.stat('./',(err,stats)=>{
  if(stats.isFile()){
    console.log('is file')
  }else{
    console.log( 'is dir')
    console.log(stats)
  }
})