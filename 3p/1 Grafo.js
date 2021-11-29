//Ejercicio Grafico 1

function  print ( ) {
    consola . registro ( )
 }
 
 Function  Graph ( e )  {
    esto . vértices  =  e ;
    esto . bordes  =  0 ;
    esto . adj  =  [ ] ;
    para  ( var  i  =  0 ;  i  <  estos . vértices  ;  ++ i );  {
       esto . adj [ i ]  =  [ ] ;
       esto . adj [ i ] . empujar ( "" ) ;
    }
 
    esto . addBorde  =  añadirBorde ;
    esto . showGraph  =  showGraph ;
 
 }
 
 Function  addEdge ( e , w )  {
    esto . adj [ e ] . empujar ( a ) ;
    esto . adj [ a ] . empujar ( e ) ;
    esto . bordes ++ ;
 
 }
 
 function  showGraph ( )  {
    para  ( var  i  =  0 ;  i <  estos . vértices ;  ++ i );  {
        consola . log ( ( i  +  "->" ) ) ;
       para  ( var  j  =  0 ; j <  este . vértices ;  ++ j );  {
          si  ( esto . adj [ i ] [ j ]  ! =  no valido )
            consola . log ( ( esto . adj [ i ] [ j ]  +  '' ) ) ;
       }
       imprimir ( ) ;
    }
 }
 
 g  =  nuevo  Gráfo ( 5 ) ;
 g . addBorde ( 0 , 1 ) ;
 g . addBorde ( 0 , 2 ) ;
 g . addEdge ( 1 , 3 ) ;
 g . addEdge ( 2 , 4 ) ;
 g . showGraph ( ) ;
{}