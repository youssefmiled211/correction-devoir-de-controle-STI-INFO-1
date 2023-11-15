function verif1()
{
    dis=document.getElementById("dis").value;
    liste=document.getElementById("liste").value;
    prix=document.getElementById("prix").value;
    s=document.getElementById("s").checked;
    m=document.getElementById("m").checked;
    l=document.getElementById("l").checked;
    xl=document.getElementById("xl").checked;
    if(liste==0){
        alert("choix cathegorie obligatoire")
    };
    dis=dis.toUpperCase()
    if((dis.langth)<10||(dis.length)>100 || dis[0]<"A"|| dis[0]>"Z" || (dis.charAt((dis.langth-1))<"A") || (dis.charAt((dis.langth-1))>"Z"))
    {
        alert ("saisir votre dis")
    };
    
    if(s==false&&m==false&&l==false&&xl==false)
    {
        alert("choix obligatoire")
    }
    
    if(prix<100||prix>2000){
        alert("prix entre 100dt et2000dt")
    }
    
}
function est_chifre(cc){ 
    i=0;
    test=true;
    while(test==true && i<cc.length){
        if((cc.charAt(i)<"0") || (cc.charAt(i)>"9")){
            test=false
            console.log(cc,test)
        }
        i++;
    }
    return (test);
}
function verif2()
{
    ch=document.getElementById("ch").value;
    cc=document.getElementById("cc").value;
    dl=document.getElementById("dl").value;
    if(ch<1||!(ch.isNaN)){
        alert("code habit incorrect")
    }
    if(est_chifre(cc)==false||cc.length!=8||cc[0]<"0"||cc[0]>"1" )
    {
        alert ("cin client incc")
    }
    if(dl<1||dl>4)
    {
        alert("dl incc")
    }
}