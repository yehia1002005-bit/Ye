document.addEventListener('DOMContentLoaded',()=>{
  const stats=document.querySelector('[data-live-date]');
  if(stats){stats.textContent=new Date().toLocaleDateString('ar-SA');}
  const support=document.querySelectorAll('[data-support]');
  support.forEach(b=>b.addEventListener('click',()=>alert('تم فتح تذكرة دعم تجريبية بنجاح.')));
});
