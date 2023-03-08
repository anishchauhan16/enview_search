## Hi, I am Anish Chauhan, and here are the few steps which demonstrate on how to get started with the App.

Steps to be followed for running the app:

1. Download the ZIP from the code section of this github repo

2. Create a new folder on the desktop

3. Extract the files from the zip into the new folder

4. Open the folder on VS Code

5. Open the terminal in VS code and run the cd command : cd ./enview_search-main 

6. Once you reach the "enview_search-main" directory, try runnung the "npm start" command. 
   (a) If there is an error, first run the follwoing command :
       npm install react-scripts --save
   (b) Now run the command: npm start (this starts the development server on the localhost).

7. The app will open in the available localhost

## Note: The video for the application is attached in the main branch of the repo, and is named as "Enview_video.mkv"

## Functions performed by the app are:

1. The Search Bar: It is a general search bar and you can find any Alert based on any of its properties, namely, its "id", "alert_type", "vehicle_id", "driver_friendly_name", "vehicle_friendly_name", or "timestamp".

2. The Vehicle # Search bar : It allows you to search all the alerts which have only a specific "vehicle_friendly_name".

3. The Date Range based search: Here, you can put the start and end dates, and it will display all alerts falling between these two given dates. 
*Note : In the video attached, I have changed the dates on one of the pre-defined cases, just to demonstrate the Date Range based Search.

4. The False Alarm button : This button gives an alert to the user on clicking that the given alert is a false alarm.

### Thank you so much for giving me this opportunity.
