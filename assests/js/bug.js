// Array.prototype is for window explorer support
Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload-button"),
  function (button) {
    const hiddenInput =
      button.parentElement.querySelector(".file-upload-input");
    const label = button.parentElement.querySelector(".file-upload-label");
    const defaultLabelText = "No File(s) Selected";

    // set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", () => {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", () => {
      const fileNameList = Array.prototype.map.call(
        hiddenInput.files,
        function (file) {
          return file.name;
        }
      );
      label.textContent = fileNameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
);
