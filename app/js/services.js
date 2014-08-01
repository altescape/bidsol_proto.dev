'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])

    /* News factory */
		.factory('NewsFactory', function () {
      return [
        {
          type : "ARTICLE",
          title: "Etiam eget adipiscing dolor, quis lobortis magna",
          desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Suspendisse eros arcu, faucibus nec dolor vel, vestibulum fringilla risus.",
          img  : "http://fillmurray.com/231/114",
          tags : ["Government & Non-Profits", "Cross-Media", "Build Awareness", "Influence Consideration"]
        },
        {
          type : "ARTICLE",
          title: "Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis",
          desc : "Sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus.",
          img  : "http://fillmurray.com/231/115",
          tags : ["Bid Software", "Build Awareness", "Government & Non-Profits", "Influence Consideration"]
        },
        {
          type : "NEWS",
          title: "Scelerisque rutrum dolors ed bibendum",
          desc : "Scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Cras porta elementum massa nec mollis. Suspendisse eget ligula gravida nunc consequat consequat sit amet ac metus. Donec volutpat ipsum at ultrices varius. Suspendisse mollis lorem non nisi semper tempus. Duis et elit libero.",
          img  : "http://fillmurray.com/231/116",
          tags : ["Bid training", "Government legislation", "Law"]
        },
        {
          type : "ARTICLE",
          title: "Tempor sapien nibh ut tellus. Cras porta elementum massa nec mollis",
          desc : "Scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Cras porta elementum massa nec mollis. Suspendisse eget ligula gravida nunc consequat consequat sit amet ac metus. Donec volutpat ipsum at ultrices varius. Suspendisse mollis lorem non nisi semper tempus. Duis et elit libero.",
          img  : "http://fillmurray.com/231/117",
          tags : ["Bid Design", "New Bids", "Etc"]
        }
      ]
    })

    /* blog factory */
		.factory('BlogFactory', function () {
      return [
        {
          type : "ARTICLE",
          title: "Etiam eget adipiscing dolor, quis lobortis magna",
          desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Suspendisse eros arcu, faucibus nec dolor vel, vestibulum fringilla risus.",
          img  : "http://fillmurray.com/230/200",
          tags : ["Government & Non-Profits", "Cross-Media", "Build Awareness", "Influence Consideration"]
        },
        {
          type : "ARTICLE",
          title: "Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis",
          desc : "Sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus.",
          img  : "http://fillmurray.com/231/200",
          tags : ["Bid Software", "Build Awareness", "Government & Non-Profits", "Influence Consideration"]
        },
        {
          type : "ARTICLE",
          title: "Scelerisque rutrum dolors ed bibendum",
          desc : "Scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Cras porta elementum massa nec mollis. Suspendisse eget ligula gravida nunc consequat consequat sit amet ac metus. Donec volutpat ipsum at ultrices varius. Suspendisse mollis lorem non nisi semper tempus. Duis et elit libero.",
          img  : "http://fillmurray.com/229/200",
          tags : ["Bid training", "Government legislation", "Law"]
        },
        {
          type : "ARTICLE",
          title: "Tempor sapien nibh ut tellus. Cras porta elementum massa nec mollis",
          desc : "Scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Cras porta elementum massa nec mollis. Suspendisse eget ligula gravida nunc consequat consequat sit amet ac metus. Donec volutpat ipsum at ultrices varius. Suspendisse mollis lorem non nisi semper tempus. Duis et elit libero.",
          img  : "http://fillmurray.com/233/200",
          tags : ["Bid Design", "New Bids", "Etc"]
        }
      ]
    })

    /* team factory */
		.factory('TeamFactory', function () {
      return [
        {
          type : "Job Title",
          title: "Roy Trenneman",
          desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Suspendisse eros arcu, faucibus nec dolor vel, vestibulum fringilla risus.",
          img  : "http://fillmurray.com/230/200"
        },
        {
          type : "Job Title",
          title: "Maurice Moss",
          desc : "Sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus.",
          img  : "http://fillmurray.com/231/200"
        },
        {
          type : "Job Title",
          title: "Richmond Felicity Avenal",
          desc : "Scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Cras porta elementum massa nec mollis. Suspendisse eget ligula gravida nunc consequat consequat sit amet ac metus. Donec volutpat ipsum at ultrices varius. Suspendisse mollis lorem non nisi semper tempus. Duis et elit libero.",
          img  : "http://fillmurray.com/229/200"
        },
        {
          type : "Job Title",
          title: "Jen Barber",
          desc : "Scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Cras porta elementum massa nec mollis. Suspendisse eget ligula gravida nunc consequat consequat sit amet ac metus. Donec volutpat ipsum at ultrices varius. Suspendisse mollis lorem non nisi semper tempus. Duis et elit libero.",
          img  : "http://fillmurray.com/233/200"
        }
      ]
    })

    /* events factory */
		.factory('EventsFactory', function () {
      return [
        {
          type : "Event type",
          title: "Event title",
          day: "1st",
					time : "10:30am",
          desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Suspendisse eros arcu, faucibus nec dolor vel, vestibulum fringilla risus.",
        },
        {
          type : "Event type",
          title: "Event title two",
					day: "2nd",
					time : "10:30am",
          desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Suspendisse eros arcu, faucibus nec dolor vel, vestibulum fringilla risus.",
        },
        {
          type : "Event type",
          title: "Event title three",
					day: "15th",
					time : "10:30am",
          desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Suspendisse eros arcu, faucibus nec dolor vel, vestibulum fringilla risus.",
        },
        {
          type : "Event type",
          title: "Event title four",
					day: "22nd",
					time : "10:30am",
          desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Suspendisse eros arcu, faucibus nec dolor vel, vestibulum fringilla risus.",
        },
        {
          type : "Event type",
          title: "Event title five",
					day: "28th",
					time : "10:30am",
          desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Suspendisse eros arcu, faucibus nec dolor vel, vestibulum fringilla risus.",
        },
        {
          type : "Event type",
          title: "Event title six",
					day: "29th",
					time : "2:30pm",
          desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Suspendisse eros arcu, faucibus nec dolor vel, vestibulum fringilla risus.",
        }
      ]
    })

    /* information links factory */
		.factory('InformationFactory', function () {
      return [
				{
					name: "Stats & Facts",
					state : "gen.stats"
				},
				{
					name: "Simplifying Bid Terminology",
					state : "gen.terminology"
				},
				{
					name: "Free resources",
					state : "gen.resources"
				},
				{
					name: "Associate programme",
					state : "gen.ass-programme"
				},
				{
					name: "Publications",
					state : "gen.publications"
				},
				{
					name: "Amazon Books",
					state : "gen.amazon"
				}
			]
    });
