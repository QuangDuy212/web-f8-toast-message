function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    const timeRemove = duration + 1000;

    const autoRemoveID = setTimeout(() => {
      main.removeChild(toast);
    }, timeRemove);

    toast.addEventListener("click", (e) => {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveID);
      }
    });

    const icons = {
      success: "fa-solid fa-circle-check",
      info: "fa-solid fa-circle-info",
      warning: "fa-solid fa-triangle-exclamation",
      error: "fa-solid fa-virus",
    };

    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 1s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Success",
    message: "Bạn đã đăng kí thành công tài khoản",
    type: "success",
    duration: 5000,
  });
}
function showErrorToast() {
  toast({
    title: "Error",
    message: "Có lỗi xảy ra vui lòng liên hệ quản trị viên",
    type: "error",
    duration: 5000,
  });
}
