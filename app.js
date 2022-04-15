var app = angular.module('app', []);

app.controller('classSystem', function($scope) {
  $scope.data = { 
    icons: ['chart', 'envelope outline', 'bell outline'], 
    servers: ['🌓 MoonServ', '🚜 Farmers'],
    settingsOptions: ['My Account', 'Subscription', 'Privacy & Safety', 'Notifications'],
    subscription: ['Server Credits', 'Server Pledges', 'Billing'],
    userData: {'User Name': "The Dude", 'Name': 'Dude', 'Email Address': 'dude@cool.dude', 'Phone Number': '4128 4124', 'Country': 'USA'}
  }
})