const e=document.querySelector(".feedback-form"),t=document.querySelector('input[name="email"]'),a=document.querySelector('textarea[name="message"]');let o={};e.addEventListener("input",throttle((e=>{o={email:t.value,message:a.value},localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500));const r=JSON.parse(localStorage.getItem("feedback-form-state"));r&&(t.value=r.email,a.value=r.message),e.addEventListener("submit",(t=>{t.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.dd5f2fe8.js.map
