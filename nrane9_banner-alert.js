nrAlert = {};

var sessionText = 'nrAlertBanner-text';

nrAlert.alert = function(text, params) {
  Session.set(sessionText, text);
};

nrAlert.clear = function(params) {
  Session.set(sessionText, '');
};

Template.bannerAlert.helpers({
  isError: function(){
    var text = Session.get(sessionText);
    if (text === undefined || text ===''){
      return false;
    }
    return true;
  },
  errorText: function(){
    return Session.get(sessionText);
  }
});

Router.onBeforeAction(function() {
  Session.set(sessionText, '');
  this.next();
});