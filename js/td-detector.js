// td_js_generator - mini detector
(function () {
  const htmlTag = document.documentElement;
  const ua = navigator.userAgent;

  if (ua.includes("MSIE 10.0")) htmlTag.classList.add("ie10");
  if (/Trident.*rv\:11\./.test(ua)) htmlTag.classList.add("ie11");
  if (/(iPad|iPhone|iPod)/.test(ua)) htmlTag.classList.add("td-md-is-ios");
  if (ua.toLowerCase().includes("android")) htmlTag.classList.add("td-md-is-android");
  if (ua.includes("Mac OS X")) htmlTag.classList.add("td-md-is-os-x");
  if (/chrom(e|ium)/.test(ua.toLowerCase())) htmlTag.classList.add("td-md-is-chrome");
  if (ua.includes("Firefox")) htmlTag.classList.add("td-md-is-firefox");
  if (ua.includes("Safari") && !ua.includes("Chrome")) htmlTag.classList.add("td-md-is-safari");
  if (ua.includes("IEMobile")) htmlTag.classList.add("td-md-is-iemobile");
})();
