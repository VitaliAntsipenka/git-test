function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="vmodal-header">
          <span class="modal-title"></span>
          <span class="modal-close">&times;</span>
        </div>
        <div class="vmodal-body">
          <div class="wrapper-form">
            <div class="sing-up-title title">
              <h2>Запишись на знакомство с клубом</h2>
            </div>
            <form class="form" method="post">
              <input class="input" type="text" name="Введите имя" placeholder="Введите имя" required>
              <input class="input" type="email" name="Введите E-mail" placeholder="mail@mail.ru" required>
              <input class="input" type="text" required pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                     minlength="6"
                     name="Введите номер телефона" placeholder="xxx-xxx-xxx">
              <input class="input-btn" type="submit" value="Записаться сейчас!">
            </form>
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  `
  );
  document.body.appendChild(modal);
  return modal;
}
$.modal = function (options) {
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);
  let closing = false;
  return {
    open() {
      document
        .querySelector(".martial-arts__button")
        .addEventListener("click", () => {
          document.querySelector(".vmodal").style.display = "block";
        });
      !closing && $modal.classList.add("open");
    },
    close() {
      document.querySelector(".modal-close").addEventListener("click", () => {
        document.querySelector(".vmodal").style.display = "none";
      });
      closing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.remove("hide");
        closing = false;
      }, ANIMATION_SPEED);
    },
  };
};
