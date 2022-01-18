document.getElementById('inp').addEventListener('keyup',keyupfun)
function keyupfun()
{
    var a=document.querySelectorAll('li');

    for(var i=0;i<a.length;i++)
    {
        var val=document.getElementById('inp').value.toLowerCase();

        if(a[i].innerHTML.toLowerCase().indexOf(val) != -1 )
        {
            a[i].style.display ='block';
        }
        else{
            a[i].style.display ='none';
        }
        
    }
}

<script>
function myFunction() {
  location.replace("https://www.google.co.in/maps/place/Afghanistan/@33.6056763,58.6980667,5z/data=!3m1!4b1!4m5!3m4!1s0x38d16eb6f8ff026d:0xf3b5460dbe96da78!8m2!3d33.93911!4d67.709953")
}
</script>