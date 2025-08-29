// Typewriter for roles
const roles = ["Data Analyst", "Data Scientist", "Problem Solver"];
let i = 0, j = 0, current = '', isDeleting = false;
(function type(){
  const el = document.getElementById('typewriter');
  if(!el) return;
  if(!isDeleting){
    current = roles[i].slice(0, ++j);
    el.textContent = current;
    if(j === roles[i].length){ isDeleting = true; setTimeout(type, 900); return; }
  } else {
    current = roles[i].slice(0, --j);
    el.textContent = current;
    if(j === 0){ isDeleting = false; i = (i+1)%roles.length; setTimeout(type, 300); return; }
  }
  setTimeout(type, isDeleting ? 90 : 120);
})();

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.body;
const savedTheme = localStorage.getItem('theme') || 'dark';
if(savedTheme === 'light') root.classList.add('light'); else root.classList.remove('light');
themeToggle.textContent = root.classList.contains('light') ? '🌙' : '☀️';

themeToggle.addEventListener('click', ()=>{
  root.classList.toggle('light');
  const isLight = root.classList.contains('light');
  themeToggle.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});