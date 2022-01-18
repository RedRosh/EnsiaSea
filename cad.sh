#!/usr/bin/env bash
echo "-----------------------------------------------"
echo "            1-  Enroll Amin ."
echo "-----------------------------------------------"
curl -X POST  http://localhost:5000/api/v1/enroll/admin
echo "-----------------------------------------------"
echo "            2-  Enroll User ."
echo "-----------------------------------------------"
curl -X POST  http://localhost:5000/api/v1/enroll/user
echo "-----------------------------------------------"
echo "            3-  Assure Connectivity ."
echo "-----------------------------------------------"
curl -X POST  http://localhost:5000/api/v1/connect
echo "-----------------------------------------------"
echo "            3-  Init The Ledger ."
echo "-----------------------------------------------"
curl -X POST  http://localhost:5000/api/v1/assets/init
echo "-----------------------------------------------"
echo "                  Done !!                      "    
echo "-----------------------------------------------"
