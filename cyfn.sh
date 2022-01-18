#!/usr/bin/env bash
echo "-----------------------------------------------"
echo "            1- Cleaning up the system ."
echo "-----------------------------------------------"
cd ./blockchain-explorer && docker-compose down -v && cd ..
cd ./test-network && ./network.sh down && cd ..
echo "-----------------------------------------------"
echo "            2- Creating the network , channel ."
echo "-----------------------------------------------"
cd ./test-network &&  ./network.sh up createChannel -c mychannel -ca  && cd ..
echo "-----------------------------------------------"
echo "            3- Deploying the Chaincode "
echo "-----------------------------------------------"
cd ./test-network &&  ./network.sh deployCC -ccn basic -ccp ../chaincode -ccl javascript && cd ..
echo "------------------------------------------------------"
echo "            4- Running Blockchain explorer "
echo "------------------------------------------------------"
echo "----------------------------------------------------"
echo "    4-1 Cleaning Blockchain explorer folder"
echo "----------------------------------------------------"
rm -R ./blockchain-explorer/organizations
cp -R ./test-network/organizations ./blockchain-explorer
sed -i -E "s~/keystore/.*_sk~/keystore/$(ls ./blockchain-explorer/organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore)~" ./blockchain-explorer/connection-profile/test-network.json
echo "Done !!"
echo "----------------------------------------------------"
echo "    4-2 launching Blockchain explorer web app on port 8080"
echo "----------------------------------------------------"
cd ./blockchain-explorer && docker-compose down -v && docker-compose up -d && cd ..
echo "------------------------------------------------------"
echo "            5- Running the Server "
echo "------------------------------------------------------"
echo "----------------------------------------------------"
echo "    5-1 Deleting the admin/user"
echo "----------------------------------------------------"
cd application && rm -R wallet && npm install
echo "----------------------------------------------------"
echo "    5-1 Starting The server on port 5000"
echo "----------------------------------------------------"
npm start &

