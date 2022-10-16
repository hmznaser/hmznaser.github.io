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

 
 var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule(`
				  .box {
				   width: 23%;
				  text-align:center;
				  display: inline-block;
				  background-color: transparent;
				  border: 1px solid transparent;
				  margin-right: 10px;
				  margin-bottom: 30px;
				  padding-bottom: 10px;
				 
				 
				}
  `
  );