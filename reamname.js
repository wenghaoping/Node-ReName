const fs = require('fs');
fs.readdir('./bizhi', (err, files) => {
        //err 为错误 , files 文件名列表包含文件夹与文件
    if(err){
        console.log('error:\n' + err);
        return;
    }
    let arr = [];
    let i = 0;
    files.forEach((file) => {
        fs.stat(`./bizhi/${file}`, (err2, stat) => {
            if(err2){console.log(err2); return;}
            if(stat.isDirectory()){
                fs.readdir(`./bizhi/${file}`, (err3, files2) => {
                    if(err3){console.log(err3); return;}
                    // 读出所有的文件
                    console.log('文件名:' + files2);
                    files2.forEach((file2) => {
                        i++;
                        fs.rename(`./bizhi/${file}/${file2}`, `./bizhi2/${i}.jpg`, (err) => {
                            console.log(err);
                        })
                    })
                });
            }
        });
    });
})