document.getElementById('toggleBtn').onclick = function() {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('toggleBtn').classList.toggle('change');
  document.getElementById('overlay').classList.toggle('hidden');
  
}
 
document.getElementById('overlay').onclick = function() {
	document.getElementById('sidebar').classList.toggle('active');
	  document.getElementById('toggleBtn').classList.toggle('change');
  document.getElementById('overlay').classList.toggle('hidden');
  
 
}

 