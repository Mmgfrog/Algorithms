<!DOCTYPE html>
<html>
<head>
	<title>Template for Testing JS Code in Console</title>
	<script type="text/javascript"></script>
	<script>
	"use strict";
	function bouncer(arr) {
  		function isFalsy(value) {
    		if(value !== false && value !== "" && value !== undefined && value !== null && value !== 0 && isNaN(NaN)) 
     		return value;
  			}
  	var filtered = (arr).filter(isFalsy);
  		return filtered;
	}

bouncer([false, null, 0, NaN, undefined, ""]);

	
	</script>
</head>
<body>

</body>
</html>