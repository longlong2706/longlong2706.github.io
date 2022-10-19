var light=[];

var solve=[];
var input=3;
var input2;
var Sum=input*input;
var ch=0;

function state_changing(x,y) {
    if(x<=input2 && y<=input2 && x>=0 && y>=0) {
    if(light[x][y]==1) {
        light[x][y]=0;
        document.getElementById("l_"+x+"_"+y).style.backgroundImage="url('img/LightOff.jpg')";
        Sum-=1;
    } else {
        light[x][y]=1;
        Sum+=1;
        document.getElementById("l_"+x+"_"+y).style.backgroundImage="url('img/LightOn.jpg')";
    }
} }

function theFunction(e)
{ 
    let id=e.target.id;
    let x=id.charAt(2); let y=id.charAt(4);
    state_changing(x,y);
    state_changing(+x+1,+y);     state_changing(+x-1,+y);
    state_changing(+x,+y+1);     state_changing(+x,+y-1);
    if(Sum==0 || Sum==(input*input)) {
        alert('YOU WIN');
    }
    if ( solve[y][x]==1) {
        solve[y][x]=0; 
        if (light[x][y]==1) {
            document.getElementById("l_"+x+"_"+y).style.backgroundImage="url('img/LightOn.jpg')";
        } else document.getElementById("l_"+x+"_"+y).style.backgroundImage="url('img/LightOff.jpg')";
    } else solve[y][x]=1;
    if(ch==1) {
    w_solve(); }
    
}

function w_solve() {
    ch=1;
    for (var m=0; m<=input2; m++) {
        for (var n=0; n<=input2; n++) {
            if (solve[m][n]==1) {
            if (light[n][m]==1) {
                document.getElementById("l_"+n+"_"+m).style.backgroundImage="url('img/LightOn_S.jpg')";
            } else document.getElementById("l_"+n+"_"+m).style.backgroundImage="url('img/LightOff_S.jpg')";
        }
        }
    }
}

function ngu() {

    document.getElementById("box").innerHTML="";
    document.getElementById("box").style.display="block";



input=document.getElementById("size").value;
Sum=input*input;
input2=input-1;
if(input<3 || input>10) { alert('Chỉ nhập giá trị từ 3 đến 10!');
    } else {




for (var i=0; i<=input2; i++) {
    light[i]=[];
        for (var j=0; j<=input2; j++) {
            light[i][j]=1;

            document.getElementById("box").innerHTML+='<div class="light" id="l_'+i+'_'+j+'"></div>';
            document.getElementById("l_"+i+"_"+j).style.left=i*(100/input)+"%";
            document.getElementById("l_"+i+"_"+j).style.top=j*(100/input)+"%";
            document.getElementById("l_"+i+"_"+j).style.width=(100/input)+"%";
            document.getElementById("l_"+i+"_"+j).style.height=(100/input)+"%";
        }
    }





for (var m=0; m<=input2; m++) {
    solve[m]=[];
    for (var n=0; n<=input2; n++) {
        solve[m][n]=Math.round(Math.random());
        if (solve[m][n]==1) {     
            state_changing(n,m);
            state_changing(n+1,m); state_changing(n-1,m);
            state_changing(n,m+1); state_changing(n,m-1);
        }
    }
}
}



}

    