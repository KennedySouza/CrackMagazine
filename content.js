Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function breakFree() {
    document.getElementById("piano_offer").remove();
    document.getElementsByClassName("piano-offer-overlay").remove();
    document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    document.getElementsByClassName("ad-sidebar").remove();
    document.getElementById("abrAD_leaderboard1").remove();
    document.getElementById("superbanner-3").remove();
    document.getElementsByClassName("teads-inread-sm-screen").remove();
    document.getElementById("superbanner-2").remove();
    document.getElementById("superbanner-1").remove();
  };

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        breakFree();
    });