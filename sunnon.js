var adIds = ['12345', '23456', '34567'];
var ads = AdWordsApp.ads().withIds(adIds);

while (ads.hasNext()) {
  var ad = ads.next();
  ad.pause();
}
