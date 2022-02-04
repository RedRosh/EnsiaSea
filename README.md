# Welcome To EnsiaSea

## Introduction

**EnsiaSea** is a project built (or still in the buidling phase) by second year Software Engineering students from __ENSIAS__. As you can see from its name, it has combined the two words _ENSIAS_ and _SEA_, this combination was based on the website **OpenSea**, and if you can't guess yet, the goal of this project is to build a blockchain website for ENSIAS students to sell, buy, and exchange **NTF**s (**N**on **F**ungible **T**okens). To make this project come true, it was devided into 3 parts: The blockchain network, the back-end, and the front-end of the website. This repository is the main one, and it contains the blockchain part of the project.



## How to Setup The Project in ubuntu / Wsl2

- ### Install all the dependencies

  1. _Make sure to update the system_

     - ```
       sudo apt-get update
       ```
  2. _Install git & curl_
     - ```
         sudo apt install curl git
       ```
  3. _Install Nodejs & npm_

     1. ```
        curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
        ```

     2. ```
        sudo apt install nodejs
        ```

     3. ```
        sudo apt install build-essential
        ```

  
  4. _Install docker & docker-compose_

      _Ps : if you have any problem with one of the following commands, check the [documentation](https://docs.docker.com/engine/install/ubuntu/)_

     1. ```
        sudo apt-get install ca-certificates gnupg lsb-release
        ```
     2. ```
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
        ```
     3. ```
         echo \
        "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
        $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        ```

     4. ```
        sudo apt-get update
        ```

     5. ```
        sudo apt-get install docker-ce docker-ce-cli containerd.io
        ```

     6. ```
        sudo apt-get install docker-compose
        ```

  5. _Starting docker service_

     1. **Using Ubuntu** :

        1. ```
           sudo systemctl start docker
           ```

        2. ```
           sudo systemctl enable docker
           ```

     2. **Using Wsl2** :

        1. ```
           sudo git clone https://github.com/DamionGans/ubuntu-wsl2-systemd-script.git
           ```
        2. ```
           cd ubuntu-wsl2-systemd-script/
           ```

        3. ```
           bash ubuntu-wsl2-systemd-script.sh
           ```

           _Ps : Make sure to restart the ubuntu shell by doing this :_

            1. Open Windows PowerShell
            2. Enter this command :
            
               ```
               wsl --shutdown
               ```
            3. Open a new ubuntu shell and continue

        4. ```
           sudo systemctl start docker
           ```
        5. ```
           sudo systemctl enable docker
           ```

- ### Setting up the project structure / files

  1. **Clone the repo**

     - ```
       git clone https://github.com/RedRosh/EnsiaSea.git
       ```

  2. **Install Samples, Binaries, and Docker Images**

     1. ```
        cd EnsiaSea
        ```
     2. ```
        sudo curl -sSL https://bit.ly/2ysbOFE | sudo bash -s
        ```

     [comment]: <> (_Ps : You Need to run the same command with sudo and without it , the following command may also work_ .)

  3. **Changing permission of the folder fabric-samples**

     1. ```
        sudo su
        ```

     2. ```
         chmod -R 777 ./fabric-samples
        ```
     3. ```
         chmod -R 777 .
        ```
        _Ps : If you could not copy/remove a file , make sure to verify your permission ._

  4. **Extract the folders that we need to use from fabric-samples**

     - ```
       ./bp.sh
       ```
       _Ps : bp stands for build project ._

  5. **Create the network & setup the blockchain & launch blockchain explorer / server**
     - ```
       ./cyfn.sh
       ```
       _Ps : blockchain explorer is running on port 8080 & server running on port 5000_
  6. **Creating Admin / User / connect the hyperledger Application to blockchain**

     - Open new terminal - run the following code :

       - ```
         ./cad.sh
         ```

     _Ps : You can check the server , you ll see logs of the requests ._

  7. **YOU ARE READY TO GO**

- ### Testing if the blockchain is up using blockchain explorer

  Link : [localhost](http://localhost:8080/)

  _Ps : Password = admin / username = admin_

## TODO

- [x] - Setup blockchain .
- [x] - create an api in order communicate with blockchain .
- [X] - structure of database .
- [X] - create back-end of EnsiaSea ( In Progress ) .
- [ ] - create front-end of EnsiaSea .

## Ressources

- Installing Node js : [Click Here](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/)
- Installing Docker : [Click Here](https://docs.docker.com/engine/install/ubuntu/)
- Starting systemd in WSL : [Click Here](https://github.com/DamionGans/ubuntu-wsl2-systemd-script)
- Hypderledger doc : [Click Here](https://hyperledger-fabric.readthedocs.io/en/release-2.2/install.html)
