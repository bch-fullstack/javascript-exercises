var a = 8154; 
var b = 516;   
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
    }
gcd = a;
console.log(gcd);