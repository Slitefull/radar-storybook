echo "Removing existing content in /home/nishant/code/projects/seoradar/workstation/engine/public/onboarding/"
rm -rf /home/nishant/code/projects/seoradar/workstation/engine/public/onboarding/*
echo "Removing existing content in /home/nishant/code/projects/seoradar/workstation/engine/public/static/"
rm -rf /home/nishant/code/projects/seoradar/workstation/engine/public/static/*

echo "Copying new contents!"
cp -R /home/nishant/code/projects/seoradar/React\ Builds/build* /home/nishant/code/projects/seoradar/workstation/engine/public/onboarding/
cp -R /home/nishant/code/projects/seoradar/React\ Builds/build/static/* /home/nishant/code/projects/seoradar/workstation/engine/public/static/

echo "***Copy successful1***"
