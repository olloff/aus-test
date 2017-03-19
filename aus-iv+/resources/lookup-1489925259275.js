(function(window, undefined) {
  var dictionary = {
    "5a7e5995-d3d6-44a7-b849-9cc148aa8b60": "image-edit-screen-3-basic",
    "e5234c67-3c1d-4fde-8b5b-31ec36f597c3": "image-edit-screen-6-share",
    "90f03475-8a07-4824-b9c3-d800d7a2124b": "image-edit-screen-6-edit",
    "ace48f72-5d1f-42e9-a5f8-653f6fd9680d": "image-selection-screen-upload",
    "92100698-f7dc-4bec-a798-3a3eb5846ff3": "image-edit-screen-3-edit",
    "554bd711-4586-4865-a703-f819de43e5b1": "image-edit-screen-3-filters-3",
    "e29549b3-654b-4c1c-ba21-976c268fd978": "image-edit-screen-3-filters-2",
    "208d09a3-16d4-4fff-85a5-908ae26885c4": "image-edit-screen-6-basic",
    "3435434b-4903-4eb9-be12-2c451b1f7713": "image-edit-screen-3-share",
    "293c06dc-f756-46dc-a359-2d25c488bd75": "image-edit-screen-3-filters-1",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "image-selection-screen-basic",
    "6a3d947a-7846-465a-bf5f-5ccc09f223ef": "image-edit-screen-3-filters-basic",
    "2f9d57d1-d254-4551-9b99-123505038770": "start-screen-basic",
    "1c12654e-c436-4689-8da3-31be514e8f4e": "select-image-screen-template",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "basic-screen-template",
    "d811100f-3776-4433-ad7f-0a7496afc40e": "image-edit-screen-template-basic",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);