function find_img(){
  var imgs = document.getElementsByTagName("img")
  var imgSrcs = []

  console.log("tags",imgs)

  for (var  i = 0; i < imgs.length; i++){
    imgSrcs.push(imgs[i].src);
    imgs[i].src = ""
    // Calling the API for checking the image hash
  }
  console.log("getting images",imgSrcs)
}

if(document.readyState === "complete") {
  // Fully loaded!
  console.log("complete")
  find_img()
}
else if(document.readyState === "interactive") {
  // DOM ready! Images, frames, and other subresources are still downloading.
  console.log("interactive")
  find_img()
}
else {
  // Loading still in progress.
  // To wait for it to complete, add "DOMContentLoaded" or "load" listeners.
  console.log("loading")
  window.addEventListener("DOMContentLoaded", () => {
      // DOM ready! Images, frames, and other subresources are still downloading.
      console.log("loaded")
      find_img()
  });

  window.addEventListener("load", () => {
      // Fully loaded!
      console.log("loaded")
      find_img()
  });
}