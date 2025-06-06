# chmod +x deploy.sh - give access
# ./deploy.sh - run script

cd ~/fundamental_FE_v3
npm run build:prod

sudo rm -r ~/../../var/www/fundamental_FE_v3/html
sudo mv ~/fundamental_FE_v3/build ~/../../var/www/fundamental_FE_v3
cd ../../../var/www/fundamental_FE_v3/
sudo mv build html