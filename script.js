document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("FdOhm_60er8jWBRtn");

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      message: form.message.value,
      time: new Date().toLocaleString()
    };

    // 1️⃣ ADMIN EMAIL FIRST
    emailjs.send("service_jpxbp4n", "template_adlj02n", params)
      .then(() => {

        // 2️⃣ AUTO REPLY AFTER SUCCESS
        return emailjs.send("service_jpxbp4n", "template_11cran9", params);

      })
      .then((response) => {
        console.log("SUCCESS:", response);
        alert("Message sent successfully ✅");
        form.reset();
      })
      .catch((error) => {
        console.log("FAILED:", error);
        alert("Failed to send ❌ Check EmailJS setup");
      });

  });

});