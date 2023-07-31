# HiFront


### git

#### 本地仓库

- git init
- git add . 
- git status
- git commit -m 'xxxx'
- git log

- git reset --hard HEAD^
- git reset --hard HEAD^^


- git reflog
- git reset --hard xxxx


- git remote add origin https://xxxxx.git
- git push origin master:master

- git clone http://xxxxx.git
- git pull

#### 分支 

- git checkout -b dev

- git checkout dev
- git merge xxx
- git branch -d xxx 


## cookie eidter 插件


## 问题
+ 0308010C:digital envelope routines::unsupported
    + 因为 node.js V17版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响.
    + export NODE_OPTIONS=--openssl-legacy-provider    （linux）
    + set NODE_OPTIONS=--openssl-legacy-provider    (window)


+ package.json

scripts": {
   "serve": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
   "build": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build"
},


