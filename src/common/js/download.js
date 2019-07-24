var rjDownload = function () {

  var subSelf = this;

  subSelf.download = function (url) {
    window.location.href = url;
  };
};

export default new rjDownload();
