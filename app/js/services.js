'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).

  /* News factory */
    factory('NewsFactory', function () {
      return [
        {
          type : "ARTICLE",
          title: "Etiam eget adipiscing dolor, quis lobortis magna",
          desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus. Suspendisse eros arcu, faucibus nec dolor vel, vestibulum fringilla risus.",
          img  : "http://fillmurray.com/231/114",
          tags : ["Government &amp; Non-Profits", "Cross-Media", "Build Awareness", "Influence Consideration"]
        },
        {
          type : "ARTICLE",
          title: "Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis",
          desc : "Sit amet, consectetur adipiscing elit. Mauris erat nibh, fermentum et erat nec, scelerisque rutrum dolor. Sed bibendum, libero id lobortis hendrerit, nibh nulla dictum dui, in tempor sapien nibh ut tellus.",
          img  : "http://fillmurray.com/231/115",
          tags : ["Bid Software", "Build Awareness", "Government &amp; Non-Profits", "Influence Consideration"]
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
    });
