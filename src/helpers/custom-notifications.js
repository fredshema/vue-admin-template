import Vue from "vue";
export default (text = "", variant = "") => {
  if (typeof text != "string") return;
  const config = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  };

  if (variant) {
    Vue.$toast[variant](text, config);
  } else {
    Vue.$toast(text, config);
  }
};
