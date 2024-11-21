var $ligar = document.getElementById('ligar');
var $desligar = document.getElementById('desligar');
var $lampada = document.getElementById('lamp');

function LigarLamp(){
        $lampada.src = 'img/lampada-acesa.jpg';
    } 

function DesligarLamp(){
        $lampada.src = 'img/lampada-apagada.jpg'
    }
function QuebradaLamp(){
        $lampada.src = 'img/lampada-quebrada.jpg'
    }

$ligar.addEventListener ('click' ,LigarLamp);
$desligar.addEventListener ('click' , DesligarLamp);
$lampada.addEventListener ('mouseover' ,  LigarLamp);
$lampada.addEventListener ('mouseleave' , DesligarLamp);
$lampada.addEventListener ('dblclick' , QuebradaLamp);