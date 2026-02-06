$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".abstract-toggle");
  if (!btn) return;

  const entry = btn.closest(".publication-entry");
  if (!entry) return;

  const abs = entry.querySelector(".abstract-text");
  if (!abs) return;

  const caret = btn.querySelector(".abstract-caret");

  const isHidden = abs.hasAttribute("hidden");
  if (isHidden) {
    abs.removeAttribute("hidden");
    btn.setAttribute("aria-expanded", "true");
    if (caret) {
      caret.classList.remove("fa-angle-down");
      caret.classList.add("fa-angle-up");
    }
  } else {
    abs.setAttribute("hidden", "");
    btn.setAttribute("aria-expanded", "false");
    if (caret) {
      caret.classList.remove("fa-angle-up");
      caret.classList.add("fa-angle-down");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Make CV / PDF links in social icons open in a new tab
  document.querySelectorAll(".contact-icons a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href.endsWith(".pdf") || href.includes("/assets/pdf/")) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    }
  });
});
