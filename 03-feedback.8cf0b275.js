!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector('input[name="email"]'),a=document.querySelector('textarea[name="message"]'),o={};e.addEventListener("input",throttle((function(e){o={email:t.value,message:a.value},localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500));var r=JSON.parse(localStorage.getItem("feedback-form-state"));r&&(t.value=r.email,a.value=r.message),e.addEventListener("submit",(function(t){t.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.8cf0b275.js.map