<html>  
<head>  
<title> Fibonacci Series in JavaScript </title>  
</head>  
<body>  
<script>  
 
var n1 = 1,  n2 = 1, next_num, i;  
var num = parseInt (prompt (" Enter the limit for Fibonacci Series "));  
document.write( "Fibonacci Series: ");  
for ( i = 1; i <= num; i++)  
{  document.write (" <br> " +  n1);   
    next_num = n1 + n2;  
      
    n1 = n2;  
    n2 = next_num;   
}  
  
</script>  
</body>  
</html>  



