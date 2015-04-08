nrAlert = {};


var nrBannerText = new ReactiveVar('');

nrAlert.alert = function(text, params) {
  nrBannerText.set(text);
};

nrAlert.clear = function(params) {
  nrBannerText.set('');
};

Template.bannerAlert.helpers({
  isError: function(){
    var text = nrBannerText.get();
    if (text === undefined || text ===''){
      return false;
    }
    return true;
  },
  errorText: function(){
    return nrBannerText.get();
  }
});

Template.bannerAlert.events({
  'click .banner-close': function(){
    // console.log("")
    nrBannerText.set('');
  }
});

Router.onBeforeAction(function() {
  nrBannerText.set('');
  this.next();
});