# Welcome To EnsiaSea

# Introduction

Introduction About this project tools / diagrams / goals

# How to Setup The Project in ubuntu / Wsl2

- ## Install all the dependencies

  1.  _Make sure to update the system_

      - ```
        sudo apt-get install update
        ```

  2.  _Install Nodejs & npm_

      - ```
        curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
        ```
      - ```
        sudo apt install nodejs
        ```
      - ```
        sudo apt install build-essential
        ```

  3.  _Install git & curl_
      - `sudo apt install curl git`
  4.  _Install docker & docker-compose_ - `apt-get install ca-certificates gnupg lsb-release` - `echo \ "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null` - `sudo apt-get update` - `sudo apt-get install docker-ce docker-ce-cli containerd.io` - `sudo apt-get install docker-compose`
  5.  _Starting docker service_ 1. **Using Ubuntu** : - `sudo systemctl start docker` - `sudo systemctl enable docker` 2. **Using Wsl** : - `git clone https://github.com/DamionGans/ubuntu-wsl2-systemd-script.git` - `cd ubuntu-wsl2-systemd-script/` - `bash ubuntu-wsl2-systemd-script.sh`
      Ps : _Make sure to restart the ubuntu shell_

- ## Setting up the project structure / files
  1. **Clone the repo**
     `git clone url`
  2. **Install Samples, Binaries, and Docker Images**
     `curl -sSL https://bit.ly/2ysbOFE | bash -s`
     `sudo curl -sSL https://bit.ly/2ysbOFE | bash -s`
     Ps : You Need to run the same command with sudo and without it , the following command may also work .  
      `curl -sSL https://bit.ly/2ysbOFE | sudo bash -s `
  3. **Changing permission of the folder fabric-samples**
     `sudo su`
     `sudo chmod -R 777 ./fabric-samples`
     Ps : If you could not copy/remove a file , make sure to verify your permission .
  4. **Extract the folders that we need to use from fabric-samples**
     `chmod 777 bp.sh`
     `./bp.sh`
     Ps : bp stands for build project .
  5. **Create the network & setup the blockchain & launch blockchain explorer / server**
     `chmod 777 cyfn.sh`
     `./cyfn.sh`
     Ps : blockchain explorer is running on port 8080 & server running on port 5000
  6. **Creating Admin / User / connect the hyperledger Application to blockchain** - open new terminal - run the following code :
     `chmod 777 cau.sh`
     `./cau.sh`
     Ps : You can check the server , you ll see logs of the requests .
  7. **YOU ARE READY TO GO**
- ## Testing if the blockchain is up using blockchain explorer
  `http://localhost:8080/`
  Ps : Password = admin / username = admin

# TODO

---

[X] - Setup blockchain .
[X] - create an api in order communicate with blockchain .
[ ] - structure of database .
[ ] - create back-end of EnsiaSea .
[ ] - create front-end of EnsiaSea .

# Ressources

---

- Installing Node js : [Click Here](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/)
- Installing Docker : [Click Here](https://docs.docker.com/engine/install/ubuntu/)
- Starting systemd in WSL : [Click Here](https://github.com/DamionGans/ubuntu-wsl2-systemd-script)
- Hypderledger doc : [Click Here](https://hyperledger-fabric.readthedocs.io/en/release-2.2/install.html)
