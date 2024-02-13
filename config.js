/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 * Updated by Pierre Gode
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true
	language: "sv",
	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

//############################### Modules Below ###################################//

	modules: [

//#######################################################################//		

{
  module: "MMM-next-episode",
  position: "bottom_right",
  header: "Next-Episode",
  config: {
    id: '', // Add ID here between ''
    hash_key: '', // Add hash here between ''
    displaySeasonAndEpisode: false,
    maxdays: 5,
    ShowThumbnail: true,
    ThumbnailSize: 'small',
    updateInterval: 180 // Update interval in minutes
  }
},
		

//################# Väder #################### 
{
			module: "weather",
			position: "top_right",
			config: {
				type: "current",
				lang: "sv",
                                initialLoadDelay: "1000",
                                colored: "true",
				location: "Stockholm",
				locationID: "2673723", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "" //openweathermap API Key
			}
		},
{
			module: "weather",
			position: "top_right",
			header: "Väder",
			config: {
				type: "forecast",
				lang: "sv",
				tableClass:"small",
                                maxNumberOfDays: "10",
				location: "Stockholm",
				locationID: "2673723", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "" //openweathermap API Key
			}
		},
{
                        module: "weather",
                        position: "top_right",
                        config: {
				type: "current",
				lang: "sv",
                                colored: "true",
                                initialLoadDelay: "2000",
                                location: "Los Alcázares",
                                locationID: "2514868", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                                apiKey: "" //openweathermap API Key
                        }
                },
{
                        module: "weather",
                        position: "top_right",
                        header: "Väder",
                        config: {
				type: "forecast",
				lang: "sv",
				tableClass:"small",
                                maxNumberOfDays: "10",
                                location: "Los Alcázares",
                                locationID: "2514868", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                                apiKey: "" //openweathermap API Key
                        }
},		

//################# SL Resor #################### 		
	{
  module: "MMM-SL",
  header: "Avresor Årstadal",
  position: "bottom_right",
  config: {
    debug: false,
    realtimeappid: "", //Get realtime api from SL
    timewindow: "10",
    sorting: "directionTime",
    updateNotification: "UPDATE_SL",
    convertTimeToMinutes: true,
    showRecentlyPassed: false,
    showLastUpdatedAlways: true,
    lastUpdatedInTitle:true,
    siteids: [
      {
      	id: "9807", //Årstadal
      	type: ["tram"], // Only show tram
      	timewindow: 25, // Only show departures in the next 30 minutes
      	displayCount: 4, // Display at most 5 results
      },
    ],
  }
},
//################# Wifi Password #################### 
/*		

{
    module: 'MMM-WiFiPassword',
    position: "bottom_right",
      config: {
        //See 'Configuration options' for more information.
        network: "skynet_5G-2",
	header: "Skanna för att ansluta till Wi-Fi",
	qrSize:"100",
        showPassword: false,
	showAuthType: false,
	showNetwork: false,
        password: "", //Your wifi password in clear text
      }
  },
*/
//################# Calendar and notifications #################### 
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
                        config: {
                        showWeek:true
                },
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Familjekalender",
			position: "top_left",
			config: {
                                 customEvents: [
                                 {keyword: 'Spanien', symbol: 'fas fa-plane', color: 'Gold'},
				 {keyword: 'Sundsvall', symbol: 'fa-solid fa-briefcase', color: 'white'},
			         {keyword: 'Norrköping', symbol: 'fa-solid fa-briefcase', color: 'white'},
			         {keyword: 'färja', symbol: 'fa-solid fa-ship', color: 'white'},
			         {keyword: 'skolavslutning', symbol: 'fa-solid fa-graduation-cap', color: 'white'},
			         {keyword: 'läkar', symbol: 'fa-solid fa-user-doctor', color: 'white'},
			         {keyword: 'båt', symbol: 'fa-solid fa-ship', color: 'white'},
                                 {keyword: 'Flyg', symbol: 'fas fa-plane', color: 'Gold'},
				 {keyword: 'arlanda', symbol: 'fas fa-plane', color: 'Gold'},
                                 {keyword: 'Resa', symbol: 'fas fa-pla<i class="fa-solid fa-graduation-capne', color: 'Gold'},
                                 {keyword: 'Semester', symbol: 'fas fa-plane', color: 'Gold'},
                                 {keyword: 'Fotboll', symbol: 'fas fa-futbol', color: 'white'},
                                 {keyword: 'Minecraft', symbol: 'fas fa-hammer', color: 'white'},
                                 {keyword: 'Bilresa', symbol: 'fas fa-car', color: 'white'},
                                 {keyword: 'Roadtrip', symbol: 'fas fa-car', color: 'white'},
			         {keyword: 'Ferrari', symbol: 'fas fa-car', color: 'white'},
                                 {keyword: 'Camping', symbol: 'fas ffas fa-cara-campground', color: 'white'},
                                 {keyword: 'Campa', symbol: 'fas fa-campground', color: 'white'},
                                 {keyword: 'Vaccin', symbol: 'fas fa-vial', color: 'white'},
				 {keyword: 'spruta', symbol: 'fa-solid fa-syringe', color: 'white'},
				 {keyword: 'injektion', symbol: 'fa-regular fa-syringe', color: 'white'},
                                 {keyword: 'Picknic', symbol: 'fas fa-hotdog', color: 'white'},
                                 {keyword: 'Middag', symbol: 'fas fa-utensils', color: 'white'},
			         {keyword: 'Pinchos', symbol: 'fas fa-utensils', color: 'white'},
			         {keyword: 'Ramblas', symbol: 'fas fa-utensils', color: 'white'},
				 {keyword: 'restaurang', symbol: 'fas fa-utensils', color: 'white'},
				 {keyword: 'tapas', symbol: 'fas fa-utensils', color: 'white'},
				 {keyword: 'kök', symbol: 'fas fa-utensils', color: 'white'},
                                 {keyword: 'delsedag', symbol: 'fas fa-birthday-cake', color: 'white'},
                                 {keyword: 'fyller', symbol: 'fas fa-birthday-cake', color: 'white'},
                                 {keyword: 'kalas', symbol: 'fas fa-birthday-cake', color: 'Gold'},
                                 {keyword: 'Game Jam', symbol: 'fas fa-cogs', color: 'white'},
                                 {keyword: 'Spelprogrammering', symbol: 'fas fa-cogs', color: 'white'},
                                 {keyword: 'Game', symbol: 'fa-solid fa-hat-wizard', color: 'white'},
                                 {keyword: 'Bil', symbol: 'fas fa-car', color: 'white'},
			         {keyword: 'Tesla', symbol: 'fas fa-car', color: 'white'},
				 {keyword: 'eCar', symbol: 'fas fa-car', color: 'white'},
			         {keyword: 'npf74a', symbol: 'fas fa-car', color: 'white'},
                                 {keyword: 'Dop', symbol: 'fa-solid fa-church', color: 'Gold'},
                                 {keyword: 'Lek', symbol: 'fa-solid fa-hat-wizard', color: 'white'},
                                 {keyword: 'Bröllop', symbol: 'fa-solid fa-church', color: 'Gold'},
                                 {keyword: 'vigsel', symbol: 'fa-solid fa-church', color: 'Gold'},
                                 {keyword: 'verktad', symbol: 'fa-solid fa-screwdriver-wrench', color: 'white'},
                                 {keyword: 'service', symbol: 'fa-solid fa-screwdriver-wrench', color: 'white'},
                                 {keyword: 'kolmården', symbol: 'fas fa-horse', color: 'Green'},
                                 {keyword: 'klippning', symbol: 'fa-solid fa-scissors', color: 'White'},
			         {keyword: 'cyckel', symbol: 'fas fa-biking', color: 'White'},
                                 {keyword: 'cykla', symbol: 'fas fa-biking', color: 'White'},
                                 {keyword: 'aw', symbol: 'fas fa-beer', color: 'White'},
                                 {keyword: 'afterwork', symbol: 'fas fa-beer', color: 'White'},
                                 {keyword: 'klippa', symbol: 'fa-solid fa-scissors', color: 'White'},
				 {keyword: 'grill', symbol: 'fa-solid fa-hotdog', color: 'White'},
				 {keyword: 'korv', symbol: 'fa-solid fa-hotdog', color: 'White'},
                                 {keyword: 'Doktor', symbol: 'fa-solid fa-stethoscope', color: 'White'},
				 {keyword: 'kirurg', symbol: 'fa-solid fa-stethoscope', color: 'White'},	 
			         {keyword: 'spraytan', symbol: 'fa-solid fa-person-shelter', color: 'White'},
			         {keyword: 'soldush', symbol: 'fa-solid fa-person-shelter', color: 'White'},	 
				 {keyword: 'Tandläkare', symbol: 'fa-solid fa-tooth', color: 'White'},
				 {keyword: 'Läkare', symbol: 'fa-solid fa-stethoscope', color: 'White'},
			         {keyword: 'simma', symbol: 'fa-solid fa-person-swimming', color: 'White'},
			         {keyword: 'simskola', symbol: 'fa-solid fa-person-swimming', color: 'White'},
				 {keyword: 'bio', symbol: 'fa-solid fa-film', color: 'White'},
				 {keyword: 'film', symbol: 'fa-solid fa-film', color: 'White'},
				 {keyword: 'studera', symbol: 'fa-solid fa-book', color: 'White'},	 
				 {keyword: 'plugga', symbol: 'fa-solid fa-book', color: 'White'},	 
				 {keyword: 'läsa', symbol: 'fa-solid fa-book', color: 'White'},
				 {keyword: 'God of War', symbol: 'fa-solid fa-axe', color: 'White'},	 	 
				 {keyword: 'läsning', symbol: 'fa-solid fa-book', color: 'White'},	 
				 {keyword: 'handboll', symbol: 'fa-solid fa-baseball', color: 'White'},
				 {keyword: 'dans', symbol: 'as fa-theater-masks', color: 'White'},
			         {keyword: 'disco', symbol: 'as fa-theater-masks', color: 'White'},
				 {keyword: 'fest', symbol: 'as fa-theater-masks', color: 'White'},
				 {keyword: 'party', symbol: 'as fa-theater-masks', color: 'White'},
				 {keyword: 'teater', symbol: 'as fa-theater-masks', color: 'White'},
				 {keyword: 'star wars', symbol: 'fas fa-jedi', color: 'White'},
				 {keyword: 'yoda', symbol: 'fas fa-jedi', color: 'White'},
				 {keyword: 'jedi', symbol: 'fas fa-jedi', color: 'White'},	 
			         {keyword: 'frisör', symbol: 'fa-solid fa-scissors', color: 'White'}	 
                  ],
                              maximumEntries: 30,
			      getRelative:0,
                              showLocation:false,
                              displayRepeatingCountTitle:true,
                              maxTitleLength:30,
                              calendars: [
					{
						symbol: "calendar-check",
						url: ""} // your webcal:// URL between ""
				]
			}
		},
		
	
		
		
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
