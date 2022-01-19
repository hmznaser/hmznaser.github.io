 var myObject = {
		isVisible: false,
		toggleBox: function () {
				this.isVisible  = !this.isVisible;
				if(this.isVisible){
					 document.getElementById("box").style.display = "block";
					 document.getElementById("demo").innerHTML = myObject.isVisible ;
				}else{
					 document.getElementById("box").style.display = "none";
					 document.getElementById("demo").innerHTML = myObject.isVisible ;
				}
			}
  };
				
				