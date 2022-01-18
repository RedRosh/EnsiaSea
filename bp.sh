#!/usr/bin/env bash

echo "-----------------------------------------------------"
echo "            1- Cleaning the folder structure "
echo "-----------------------------------------------------"
 
sudo chmod 777 ./fabric-samples
cd ./fabric-samples && cp -R ./test-network bin config .. && cd ..
sudo  rm -R ./fabric-samples
echo "Done !!"